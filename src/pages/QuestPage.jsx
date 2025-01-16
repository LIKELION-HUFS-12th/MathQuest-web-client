import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import * as QP from '../styles/QuestPageStyles';
import QuestPageHeader from '../shared/components/QuestPageHeader';
import rectangleQuest from '../assets/images/rectangleQuest.png';

const QuestPage = () => {
    const location = useLocation();
    const { level, difficulty, chapter } = location.state || {};
    const [questionData, setQuestionData] = useState(null);
    const [selectedOption, setSelectedOption] = useState(null);

    useEffect(() => {
        if (level && difficulty && chapter) {
            const token = localStorage.getItem('authToken'); // 토큰 가져오기
            if (!token) {
                console.error('No authentication token found');
                return;
            }
    
            console.log('Authorization Header:', `Bearer ${token}`);
            console.log('API URL:', `https://mathquestpro.shop/problem/level_chapter_difficulty/${level}/${chapter}/${difficulty}/`);
            
            axios
                .get(`https://mathquestpro.shop/problem/level_chapter_difficulty/${level}/${chapter}/${difficulty}/`, {
                    headers: {
                        Authorization: `Bearer ${token}`, // 인증 헤더 추가
                    },
                })
                .then((response) => {
                    if (response.data.code === 200) {
                        console.log('API Response:', response.data);
                        setQuestionData(response.data.data[0]); // 첫 번째 문제 가져오기
                    } else {
                        console.error('Unexpected response code:', response.data.code);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching question data:', error.response || error);
                });
        }
    }, [level, difficulty, chapter]);
    
    

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        console.log(`Selected Option: ${option}`);
    };

    const handleAnswerSubmit = () => {
        console.log(`Submitted answer: ${selectedOption}`);
    };

    const options = questionData
        ? [
            questionData.choice1,
            questionData.choice2,
            questionData.choice3,
            questionData.choice4,
        ]
        : [];

    return (
        <QP.Container>
            <QuestPageHeader/>
            <QP.Content>
                <QP.Quest>
                    <QP.QuestBack>
                        <img id="rectangleQuest" src={rectangleQuest}/>
                    </QP.QuestBack>
                    <QP.QuestText>
                        {questionData ? questionData.question : '문제를 불러오는 중...'}
                    </QP.QuestText>
                </QP.Quest>
                <QP.Options>
                    {options.map((option, index) => (
                        <QP.Option
                            key={index}
                            onClick={() => handleOptionClick(index + 1)} // 선택 시 실행
                            isSelected={selectedOption === index + 1} // 선택 상태 전달
                        >
                            {option}
                        </QP.Option>
                    ))}
                </QP.Options>
                <QP.AnswerButton onClick={handleAnswerSubmit}>
                    정답 제출하기
                </QP.AnswerButton>
            </QP.Content>
        </QP.Container>
    );
};

export default QuestPage;