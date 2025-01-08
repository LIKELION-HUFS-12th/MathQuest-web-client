import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as E4H from '../../styles/questsHard/QuestE4HStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';

const questE4H = () => {
    return(
        <E4H.Container>
            <E4H.Header>
                <E4H.Header2>
                    <E4H.Year>초등학교 4학년</E4H.Year>
                    <E4H.Logo>
                        <img id="CharacterLogo" src={CharacterLogo}/>
                    </E4H.Logo>
                </E4H.Header2>
                <E4H.Level>난이도 (상)</E4H.Level>
            </E4H.Header>
        </E4H.Container>
    );
};

export default questE4H;