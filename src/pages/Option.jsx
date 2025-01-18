import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as O from '../styles/OptionStyles'; 
import CharacterLogo from '../assets/images/characterLogo.png';
import Home2 from '../assets/images/home2.png';
import SpeechBubble from '../assets/images/speechbubble2.png';
import Setting from '../assets/images/setting2.png';
import Pencil from '../assets/images/pencil2.png';
import SpeechBuuble from '../assets/images/speechbubble1.png';
import Hand from '../assets/images/hand.png';
import Review from '../assets/images/review.png';
import Help from '../assets/images/help.png';
import Group from '../assets/images/group.png';
import Out from '../assets/images/out.png';

const Option = () => {
    const navigate = useNavigate();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    // Array of modal items with their images
    const modalItems = [
        { label: '프로필 수정', image: Pencil },
        { label: '문의하기', image: SpeechBuuble },
        { label: '건의하기', image: Hand },
        { label: '리뷰 작성하기', image: Review },
        { label: '도움말', image: Help },
        { label: '개발자 소개', image: Group },
        { label: '로그아웃', image: Out },
        { label: '회원탈퇴', image: Out },
    ];

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
                <O.MenuItem onClick={() => handleNavigation('/main')}>
                    <O.Icon src={Home2} alt="Home" />
                    <O.Label>홈</O.Label>
                </O.MenuItem>
                <O.MenuItem onClick={() => handleNavigation('/howtouse')}>
                    <O.Icon src={SpeechBubble} alt="사용방법" />
                    <O.Label>사용방법</O.Label>
                </O.MenuItem>
                <O.MenuItem onClick={openModal}> {/* Added the onClick to open the modal */}
                    <O.Icon src={Setting} alt="설정" />
                    <O.Label>설정</O.Label>
                </O.MenuItem>
            </O.Menu>
            {isModalOpen && (
                <O.ModalOverlay onClick={closeModal}>
                    <O.ModalContainer onClick={(e) => e.stopPropagation()}>
                        <O.ModalMenu>
                            {modalItems.map((item, index) => (
                                <O.ModalItem key={index}>
                                    <O.ModalIcon src={item.image} alt={item.label} />
                                    {item.label}
                                </O.ModalItem>
                            ))}
                        </O.ModalMenu>
                    </O.ModalContainer>
                </O.ModalOverlay>
            )}
        </O.Container>
    );
};

export default Option;
