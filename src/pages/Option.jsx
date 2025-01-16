import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as O from '../styles/OptionStyles'; 
import CharacterLogo from '../assets/images/characterLogo.png';
import Home2 from '../assets/images/home2.png';
import SpeechBubble from '../assets/images/speechbubble2.png';
import Setting from '../assets/images/setting2.png';

const Option = () => {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
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
                <O.MenuItem onClick={() => handleNavigation('/main')}>
                    <O.Icon src={Home2} alt="Home" />
                    <O.Label>홈</O.Label>
                </O.MenuItem>
                <O.MenuItem onClick={() => handleNavigation('/howtouse')}>
                    <O.Icon src={SpeechBubble} alt="사용방법" />
                    <O.Label>사용방법</O.Label>
                </O.MenuItem>
                <O.MenuItem>
                    <O.Icon src={Setting} alt="설정" />
                    <O.Label>설정</O.Label>
                </O.MenuItem>
            </O.Menu>
        </O.Container>
    );
};

export default Option;
