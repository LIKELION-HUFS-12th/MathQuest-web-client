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


const LearningReport = () => {
  const [chartData, setChartData] = useState(null);
  const [comment, setComment] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://mathquestpro.shop/problem/reports/weekly/")
      .then((response) => {
        const { correct, incorrect } = response.data.data;

        // 요일 및 데이터 추출
        const days = ["월", "월", "화", "수", "목", "금", "토"];
        const correctValues = Object.values(correct);
        const incorrectValues = Object.values(incorrect);

        // Chart.js 데이터 구성
        const chartData = {
          labels: days,
          datasets: [
            {
              label: "맞은 문제",
              data: correctValues,
              backgroundColor: "#5F4B8B",
            },
            {
              label: "틀린 문제",
              data: incorrectValues,
              backgroundColor: "#D3D3D3",
            },
          ],
        };

        // 맞은 문제 총합 계산
        const totalCorrect = correctValues.reduce((sum, val) => sum + val, 0);

        // 코멘트 조건
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

  // Chart.js 옵션
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        enabled: true,
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
