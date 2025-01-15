import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as O from '../styles/OptionStyles'; 
import CharacterLogo from '../assets/images/characterLogo.png';
import Home2 from '../assets/images/home2.png';
import SpeechBubble from '../assets/images/speechbubble2.png';
import Setting from '../assets/images/setting2.png';

const Option = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const handleSettingsClick = () => {
        setModalOpen(true);
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    return (
        <O.Container>
            <O.ProfileSection>
                <O.ProfileImage src={CharacterLogo} alt="Profile" />
                <O.ProfileText>
                    <O.Name>김멋사</O.Name>
                    <O.Grade>초등학교 3학년</O.Grade>
                </O.ProfileText>
            </O.ProfileSection>
            <O.Menu>
                <O.MenuItem>
                    <O.Icon src={Home2} alt="Home" />
                    <O.Label>홈</O.Label>
                </O.MenuItem>
                <O.MenuItem>
                    <O.Icon src={SpeechBubble} alt="Usage Guide" />
                    <O.Label>사용방법</O.Label>
                </O.MenuItem>
                <O.MenuItem onClick={handleSettingsClick}>
                    <O.Icon src={Setting} alt="Settings" />
                    <O.Label>설정</O.Label>
                </O.MenuItem>
            </O.Menu>
            {isModalOpen && (
                <O.ModalOverlay onClick={closeModal}>
                    <O.ModalContainer onClick={(e) => e.stopPropagation()}>
                        <O.ModalHeader>more modal</O.ModalHeader>
                        <O.ModalMenu>
                            <O.ModalItem>프로필 수정</O.ModalItem>
                            <O.ModalItem>문의하기</O.ModalItem>
                            <O.ModalItem>건의하기</O.ModalItem>
                            <O.ModalItem>리뷰 작성하기</O.ModalItem>
                            <O.ModalItem>도움말</O.ModalItem>
                            <O.ModalItem>개발자 소개</O.ModalItem>
                            <O.ModalItem>로그아웃</O.ModalItem>
                            <O.ModalItem>회원탈퇴</O.ModalItem>
                        </O.ModalMenu>
                    </O.ModalContainer>
                </O.ModalOverlay>
            )}
        </O.Container>
    );
};

export default Option;