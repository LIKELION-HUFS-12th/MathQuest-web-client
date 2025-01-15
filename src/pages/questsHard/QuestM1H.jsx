import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M1H from '../../styles/questsHard/QuestM1HStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import RectangleTop from '../../assets/images/rectangleTop.png';
import Rectangle from '../../assets/images/rectangle.png';
import Level1 from '../../assets/images/level1.png';
import Level2 from '../../assets/images/level2.png';
import Level3 from '../../assets/images/level3.png';
import LevelFooter from '../../shared/components/LevelFooter';

const questM1H = () => {
    return(
        <M1H.Container>
            <M1H.Header>
                <M1H.BackgroundImage>
                    <img id="RectangleTop" src={RectangleTop} alt="RectangleTop"/>
                </M1H.BackgroundImage>
                <M1H.Header2>
                    <M1H.Year>중학교 1학년</M1H.Year>
                    <M1H.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </M1H.Logo>
                </M1H.Header2>
                <M1H.Level>난이도 (상)</M1H.Level>
            </M1H.Header>
                <M1H.Level1>
                    <M1H.Level1Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M1H.Level1Photo>
                            <img id="Level1" src={Level1}/>
                        </M1H.Level1Photo>
                        <M1H.TextLevel1>LEVEL 1</M1H.TextLevel1>
                        <M1H.Level1Content>정수와 유리수</M1H.Level1Content>
                    </M1H.Level1Back>
                </M1H.Level1>
                <M1H.Level2>
                    <M1H.Level2Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M1H.Level2Photo>
                            <img id="Level2" src={Level2}/>
                        </M1H.Level2Photo>
                        <M1H.TextLevel2>LEVEL 2</M1H.TextLevel2>
                        <M1H.Level2Content>비례식과 비례 배분</M1H.Level2Content>
                    </M1H.Level2Back>
                </M1H.Level2>
                <M1H.Level3>
                    <M1H.Level3Back>
                        <img id="Rectangle" src={Rectangle}/>
                        <M1H.Level3Photo>
                            <img id="Level3" src={Level3}/>
                        </M1H.Level3Photo>
                        <M1H.TextLevel3>LEVEL 3</M1H.TextLevel3>
                        <M1H.Level3Content>기본 확률과 통계</M1H.Level3Content>
                    </M1H.Level3Back>
                </M1H.Level3>
            <LevelFooter/>
        </M1H.Container>
    );
};

export default questM1H;