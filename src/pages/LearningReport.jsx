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

const LearningReport = () => {
  const [chartData, setChartData] = useState(null);
  const [comment, setComment] = useState("");

  useEffect(() => {
    axios
      .get("problem/reports/weekly/")
      .then((response) => {
        const { correct, incorrect } = response.data.data;

        const days = ["일", "월", "화", "수", "목", "금", "토"];
        const correctValues = Object.values(correct);
        const incorrectValues = Object.values(incorrect);

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

        const totalCorrect = correctValues.reduce((sum, val) => sum + val, 0);

        if (totalCorrect >= 10) {
          setComment("훌륭합니다!");
        } else {
          setComment("조금 더 노력하세요!");
        }

        setChartData(chartData);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <Container>
      <Header>학습량 분석</Header>
      <ChartWrapper>
        {chartData ? (
          <Bar data={chartData} options={{ responsive: true }} />
        ) : (
          <p>데이터를 불러오는 중입니다...</p>
        )}
      </ChartWrapper>
      <CommentSection>
        <CommentTitle>한줄평</CommentTitle>
        <CommentText>{comment}</CommentText>
      </CommentSection>
    </Container>
  );
};

export default LearningReport;
