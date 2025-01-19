import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as QP from '../styles/QuestPageStyles';
import QuestPageHeader from '../shared/components/QuestPageHeader';
import rectangleQuest from '../assets/images/rectangleQuest.png';

const LearnAgainQuest = () => {
    const location = useLocation();
    const { question } = location.state || {};
    const [selectedOption, setSelectedOption] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState('');
    const navigate = useNavigate();

    const fetchWrongQuestions = () => {
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No authentication token found');
            return;
        }

        axios
            .get('https://mathquestpro.shop/problem/wrongproblems/', {
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((response) => {
                if (response.data.code === 200) {
                    console.log('Updated wrong questions fetched.');
                }
            })
            .catch((error) => {
                console.error('Error fetching wrong questions:', error.response || error);
            });
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleAnswerSubmit = () => {
        if (!question || selectedOption === null) {
            alert('옵션을 선택하세요.');
            return;
        }

        const isCorrect = selectedOption === Number(question.answer);
        setPopupContent(isCorrect ? '정답입니다.' : '오답입니다.');
        setShowPopup(true);

        if (isCorrect) {
            const token = localStorage.getItem('authToken');
            if (token) {
                axios
                    .post(
                        'https://mathquestpro.shop/problem/userproblem/',
                        {
                            problem_id: question.id,
                            status: 'RIGHT',
                        },
                        {
                            headers: { Authorization: `Bearer ${token}` },
                        }
                    )
                    .then(() => {
                        console.log('Correct answer submitted successfully.');
                        fetchWrongQuestions(); // 업데이트된 목록 다시 가져오기
                    })
                    .catch((error) => {
                        console.error('Error submitting answer:', error.response || error);
                    });
            }
        }
    };

    const handleGoBack = () => {
        navigate('/learnAgain'); // LearnAgain 페이지로 돌아가기
    };


    return (
        <QP.Container>
            <QP.Content>
                <QP.Quest>
                    <QP.QuestBack>
                        <img id="rectangleQuest" src={rectangleQuest} alt="Background"/>
                    </QP.QuestBack>
                    <QP.QuestText>{question ? question.question : '문제를 불러오는 중...'}</QP.QuestText>
                </QP.Quest>
                <QP.Options>
                    {question &&
                        [question.choice1, question.choice2, question.choice3, question.choice4].map((option, index) => (
                            <QP.Option
                                key={index}
                                onClick={() => handleOptionClick(index + 1)}
                                isSelected={selectedOption === index + 1}
                            >
                                {option}
                            </QP.Option>
                        ))}
                </QP.Options>
                <QP.AnswerButton onClick={handleAnswerSubmit}>정답 제출하기</QP.AnswerButton>
                {showPopup && (
                    <QP.Popup>
                        <QP.PopupContent>
                            <h2>{popupContent}</h2>
                            <button onClick={handleGoBack}>오답노트로 돌아가기</button>
                        </QP.PopupContent>
                    </QP.Popup>
                )}
            </QP.Content>
        </QP.Container>
    );
};

export default LearnAgainQuest;
