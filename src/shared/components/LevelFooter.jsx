import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as LF from '../../styles/LevelFooterStyles';
import MenuBar2 from '../../assets/images/menubar2.png';
import Home3 from '../../assets/images/home3.png';
import Learn from '../../assets/images/learn.png';
import Pencil from '../../assets/images/pencil.png';
import Profile from '../../assets/images/profile.png';

const LevelFooter = () => {
    const navigate = useNavigate();

        const handleMain = () => {
            navigate(`/main`)
        };
        const handleLearn = () => {
            navigate(-1);
        };
        const handleProfile = () => {
            navigate(`/Profile`)
        };

    return(
        <LF.Container>
            <LF.Menubar>
                <img id="MenuBar2" src={MenuBar2} />
                <LF.Home onClick={handleMain}>
                    <img id="Home3" src={Home3} />
                    <LF.HomeText>홈</LF.HomeText>
                </LF.Home>
                <LF.Learn onClick={handleLearn}>
                    <img id="Learn" src={Learn} />
                    <LF.LearnText>학습하기</LF.LearnText>
                </LF.Learn>
                <LF.Pencil>
                    <img id="Pencil" src={Pencil} />
                    <LF.PencilText>오답하기</LF.PencilText>
                </LF.Pencil>
                <LF.Profile onClick={handleProfile}>
                    <img id="Profile" src={Profile} />
                    <LF.ProfileText>프로필</LF.ProfileText>
                </LF.Profile>
            </LF.Menubar>
        </LF.Container>
    );
};

export default LevelFooter;