import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as QP from '../styles/QuestPageStyles';
import QuestPageHeader from '../shared/components/QuestPageHeader';
import rectangleQuest from '../assets/images/rectangleQuest.png';

const QuestPage = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        console.log(`Selected Option: ${option}`);
    };

    const options = [
        "1. 1번 보기",
        "2. 2번 보기",
        "3. 3번 보기",
        "4. 4번 보기",
        "5. 5번 보기"
    ];

    return (
        <QP.Container>
            <QuestPageHeader/>
            <QP.Content>
                <QP.Quest>
                    <QP.QuestBack>
                        <img id="rectangleQuest" src={rectangleQuest}/>
                    </QP.QuestBack>
                    <QP.QuestText>
                        질문
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
                <QP.AnswerButton>
                    정답 제출하기
                </QP.AnswerButton>
            </QP.Content>
        </QP.Container>
    );
};

export default QuestPage;