import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Title, ChartContainer, FeedbackContainer, FeedbackTitle, FeedbackText } from '../styles/ReportStyles';
import { Bar } from 'react-chartjs-2';

const Report = ({ userId }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/api/study-data/${userId}`); // 사용자별 API 호출
                const studyData = response.data;

                // 데이터 가공
                const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
                const correctAnswers = studyData.map(day => day.correct);
                const incorrectAnswers = studyData.map(day => day.incorrect);

                setData({
                    labels,
                    datasets: [
                        {
                            label: '오답한 문제',
                            data: incorrectAnswers,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                        {
                            label: '맞힌 문제',
                            data: correctAnswers,
                            backgroundColor: 'rgba(54, 162, 235, 0.5)',
                        },
                    ],
                });

                // 피드백 로직
                const totalCorrect = correctAnswers.reduce((acc, cur) => acc + cur, 0);
                const totalIncorrect = incorrectAnswers.reduce((acc, cur) => acc + cur, 0);

                if (totalCorrect === 0) {
                    setFeedback('학습을 시작해보세요!');
                } else if (totalIncorrect === 0) {
                    setFeedback('훌륭해요! 모든 문제를 맞혔어요!');
                } else if (totalCorrect / (totalCorrect + totalIncorrect) > 0.7) {
                    setFeedback('잘하고 있어요! 계속 노력하세요!');
                } else {
                    setFeedback('조금 더 노력하세요! 오답을 줄여보세요!');
                }

                setLoading(false);
            } catch (error) {
                console.error("Error fetching study data:", error);
                setLoading(false);
            }
        };

        fetchData();
    }, [userId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Container>
            <Title>학습량 분석</Title>
            <ChartContainer>
                {data && (
                    <Bar
                        data={data}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    display: true,
                                },
                            },
                        }}
                    />
                )}
            </ChartContainer>
            <FeedbackContainer>
                <FeedbackTitle>한줄평</FeedbackTitle>
                <FeedbackText>{feedback}</FeedbackText>
            </FeedbackContainer>
        </Container>
    );
};

export default Report;
