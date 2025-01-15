import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as LA from '../styles/LearnAgainStyles';
import CharacterLogo from '../assets/images/characterLogo.png';
import RectangleTop from '../assets/images/rectangleTop.png';
import LevelFooter from '../shared/components/LevelFooter';


const LearnAgain = () => {
    return(
        <LA.Container>
            <LA.Header>
                <LA.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop}/>
                </LA.BackgroundImage>
                <LA.Header2>
                    <LA.Title>오답노트</LA.Title>
                    <LA.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </LA.Logo>
                </LA.Header2>
            </LA.Header>
            <LA.Content>
                오답노트 목록들
            </LA.Content>
            <LevelFooter/>
        </LA.Container>
    );
};

export default LearnAgain;