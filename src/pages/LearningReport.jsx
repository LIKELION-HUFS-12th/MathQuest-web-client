import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
import {
  Container,
  Header,
  ChartWrapper,
  CommentSection,
  CommentTitle,
  CommentText,
} from "../styles/LearningReportStyles";
import Footer from '../shared/components/Footer';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

// Chart.js에 필요한 스케일과 플러그인 등록
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LearningReport = () => {
  const [chartData, setChartData] = useState(null);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const authToken = localStorage.getItem("authToken"); // 토큰 가져오기

    axios
      .get("https://mathquestpro.shop/problem/reports/weekly/", {
        headers: { Authorization: `Bearer ${authToken}` },
      })
      .then((response) => {
        const { correct, incorrect } = response.data.data;

        const days = ["월", "화", "수", "목", "금", "토", "일"];
        const correctValues = days.map((_, index) => correct[index]);
        const incorrectValues = days.map((_, index) => incorrect[index]);

        const chartData = {
          labels: days,
          datasets: [
            {
              label: "맞은 문제",
              data: correctValues,
              backgroundColor: "#5F4B8B", // 진한 보라색
              borderRadius: 5,
            },
            {
              label: "틀린 문제",
              data: incorrectValues,
              backgroundColor: "#D3D3D3", // 밝은 회색
              borderRadius: 5,
            },
          ],
        };

        const totalCorrect = correctValues.reduce((sum, val) => sum + val, 0);

        if (totalCorrect >= 15) {
          setComment("정말 잘하고 있어요!");
        } else if (totalCorrect >= 10) {
          setComment("훌륭합니다!");
        } else if (totalCorrect >= 5) {
          setComment("좋은 출발입니다!");
        } else {
          setComment("조금 더 노력하세요!");
        }

        setChartData(chartData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("데이터를 불러오는 데 실패했습니다.");
        setIsLoading(false);
      });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          color: "#333",
        },
      },
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}개`,
        },
      },
    },
    scales: {
      x: {
        stacked: true, // x축 스택 활성화
        grid: { display: false },
        ticks: { color: "#333" },
      },
      y: {
        stacked: true, // y축 스택 활성화
        grid: { color: "#E0E0E0" },
        ticks: { color: "#333" },
      },
    },
  };

  return (
    <Container>
      <Header>학습량 분석</Header>
      {isLoading ? (
        <p>데이터를 불러오는 중입니다...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <>
          <ChartWrapper>
            <Bar data={chartData} options={options} />
          </ChartWrapper>
          <CommentSection>
            <CommentTitle>한줄평</CommentTitle>
            <CommentText>{comment}</CommentText>
          </CommentSection>
        </>
      )}
      <Footer />
    </Container>
  );
};

export default LearningReport;
