import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as E4H from '../../styles/questsHard/QuestE4HStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import Level4 from '../../assets/images/level4.png';

const questE4H = () => {
    return(
        <E4H.Container>
            <E4H.Header>
                <E4H.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </E4H.BackgroundImage>
                <E4H.Header2>
                    <E4H.Year>초등학교 4학년</E4H.Year>
                    <E4H.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </E4H.Logo>
                </E4H.Header2>
                <E4H.Level>난이도 (상)</E4H.Level>
            </E4H.Header>
            <E4H.Level1>
                <E4H.Level1Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4H.Level1Photo>
                        <img id="Level1" src={Level1}/>
                    </E4H.Level1Photo>
                    <E4H.TextLevel1>LEVEL 1</E4H.TextLevel1>
                    <E4H.Level1Content>세자릿수 덧셈</E4H.Level1Content>
                </E4H.Level1Back>
            </E4H.Level1>
            <E4H.Level2>
                <E4H.Level2Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4H.Level2Photo>
                        <img id="Level2" src={Level2}/>
                    </E4H.Level2Photo>
                    <E4H.TextLevel2>LEVEL 2</E4H.TextLevel2>
                    <E4H.Level2Content>곱셈과 나눗셈</E4H.Level2Content>
                </E4H.Level2Back>
            </E4H.Level2>
            <E4H.Level3>
                <E4H.Level3Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4H.Level3Photo>
                        <img id="Level3" src={Level3}/>
                    </E4H.Level3Photo>
                    <E4H.TextLevel3>LEVEL 3</E4H.TextLevel3>
                    <E4H.Level3Content>소수와 분수</E4H.Level3Content>
                </E4H.Level3Back>
            </E4H.Level3>
            <E4H.Level4>
                <E4H.Level4Back>
                    <img id="Rectangle" src={Rectangle}/>
                    <E4H.Level4Photo>
                        <img id="Level4" src={Level4}/>
                    </E4H.Level4Photo>
                    <E4H.TextLevel4>LEVEL 4</E4H.TextLevel4>
                    <E4H.Level4Content>시간 계산</E4H.Level4Content>
                </E4H.Level4Back>
            </E4H.Level4>
        </E4H.Container>
    );
};

export default questE4H;