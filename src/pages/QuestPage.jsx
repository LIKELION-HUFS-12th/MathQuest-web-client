import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import * as QP from '../styles/QuestPageStyles';
import QuestPageHeader from '../shared/components/QuestPageHeader';
import rectangleQuest from '../assets/images/rectangleQuest.png';

const QuestPage = () => {
    const location = useLocation();
    const { level, difficulty, chapter } = location.state || {};
    const [questions, setQuestions] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({ message: '', solution: '' });

    useEffect(() => {
        if (level && difficulty && chapter) {
            const token = localStorage.getItem('authToken');
            if (!token) {
                console.error('No authentication token found');
                return;
            }
    
            const encodedURL = `https://mathquestpro.shop/problem/level_chapter_difficulty/${encodeURIComponent(level)}/${encodeURIComponent(chapter)}/${encodeURIComponent(difficulty)}/`;
            console.log('Encoded URL:', encodedURL);
            console.log('Auth Token:', token);
    
            axios
                .get(encodedURL, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                })
                .then((response) => {
                    console.log('API Response:', response.data);
                    if (response.data.code === 200) {
                        setQuestions(response.data.data);
                    } else {
                        console.warn('No questions available:', response.data.msg);
                    }
                })
                .catch((error) => {
                    console.error('Error fetching question data:', error.response || error);
                });
        }
    }, [level, difficulty, chapter]);
    
    const currentQuestion = questions[currentIndex];

    const handleOptionClick = (option) => {
        setSelectedOption(option);
    };

    const handleAnswerSubmit = () => {
        if (!currentQuestion || selectedOption === null) {
            alert('옵션을 선택하세요.');
            return;
        }
    
        const isCorrect = selectedOption === Number(currentQuestion.answer); 
        const status = isCorrect ? 'RIGHT' : 'WRONG';
    
        const token = localStorage.getItem('authToken');
        if (!token) {
            console.error('No authentication token found');
            return;
        }
    
        axios
            .post(
                'https://mathquestpro.shop/problem/userproblem/',
                {
                    problem_id: currentQuestion.id,
                    status,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )
            .then(() => {
                setPopupContent({
                    message: isCorrect ? '정답입니다' : '오답입니다',
                    solution: currentQuestion.solution,
                });
                setShowPopup(true);
            })
            .catch((error) => {
                console.error('Error submitting answer:', error.response || error);
            });
    };

        const handleNextQuestion = () => {
            setShowPopup(false);
            if (currentIndex < questions.length - 1) {
                setCurrentIndex(currentIndex + 1);
                setSelectedOption(null);
            } else {
                alert('모든 문제를 완료했습니다.');
            }
        };
    

    return (
        <QP.Container>
            <QuestPageHeader />
            <QP.Content>
                <QP.Quest>
                    <QP.QuestBack>
                        <img id="rectangleQuest" src={rectangleQuest} alt="Background" />
                    </QP.QuestBack>
                    <QP.QuestText>
                        {currentQuestion ? currentQuestion.question : '문제를 불러오는 중...'}
                    </QP.QuestText>
                </QP.Quest>
                <QP.Options>
                    {currentQuestion &&
                        [currentQuestion.choice1, currentQuestion.choice2, currentQuestion.choice3, currentQuestion.choice4].map(
                            (option, index) => (
                                <QP.Option
                                    key={index}
                                    onClick={() => handleOptionClick(index + 1)}
                                    isSelected={selectedOption === index + 1}
                                >
                                    {option}
                                </QP.Option>
                            )
                        )}
                </QP.Options>
                <QP.AnswerButton onClick={handleAnswerSubmit}>
                    정답 제출하기
                </QP.AnswerButton>
                {showPopup && (
                    <QP.Popup>
                        <QP.PopupContent>
                            <h2>{popupContent.message}</h2>
                            <button onClick={() => alert(popupContent.solution)}>해설보기</button>
                            <button onClick={handleNextQuestion}>다음</button>
                        </QP.PopupContent>
                    </QP.Popup>
                )}
            </QP.Content>
        </QP.Container>
    );
};

export default QuestPage;
