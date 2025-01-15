import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as QE6 from '../../styles/quests/QuestE6Styles';
import QuestHeader from '../../shared/components/QuestHeader';
import Rectangle5 from '../../assets/images/rectangle5.png';
import Figures from '../../assets/images/figures.png';
import Footer from '../../shared/components/Footer';
import Rectangle from '../../assets/images/rectangle.png';
import Fire from '../../assets/images/fire.png';
import Hill from '../../assets/images/hill.png';
import Sun from '../../assets/images/sun.png';

const QuestE6 = () => {
  const navigate = useNavigate();

    const handleQuestE6H = () => {
      navigate('/questE6H')
    };
    const handleQuestE6M = () => {
      navigate('/questE6M')
    };
    const handleQuestE6L = () => {
      navigate('/questE6L')
    };
  
  return (
    <QE6.Container>
      <QuestHeader />
      <QE6.Profile>
        <QE6.PhotoBack>
          <img id="Rectangle5" src={Rectangle5} />
        </QE6.PhotoBack>
        <QE6.Photo>
          <img id="Figures" src={Figures} />
        </QE6.Photo>
        <QE6.Text>초등 6학년</QE6.Text>
      </QE6.Profile>
      <QE6.QuestList>퀘스트 목록</QE6.QuestList>
      <QE6.Qe4Hard onClick={handleQuestE6H}>
        <QE6.Qe4Back>
          <img id="Rectangle" src={Rectangle} />
          <QE6.Qe4photoback>
            <img id="Rectangle5" src={Rectangle5} />
          </QE6.Qe4photoback>
          <QE6.Qe4photo>
            <img id="Fire" src={Fire} />
          </QE6.Qe4photo>
          <QE6.TextHard>난이도 (상)</QE6.TextHard>
          <QE6.TextCount>20 문항</QE6.TextCount>
        </QE6.Qe4Back>
      </QE6.Qe4Hard>
      <QE6.Qe4Middle onClick={handleQuestE6M}>
        <QE6.Qe4BackMiddle>
          <img id="Rectangle" src={Rectangle} />
          <QE6.Qe4photobackMiddle>
            <img id="Rectangle5" src={Rectangle5} />
          </QE6.Qe4photobackMiddle>
          <QE6.Qe4photoMiddle>
            <img id="Hill" src={Hill} />
          </QE6.Qe4photoMiddle>
          <QE6.TextMiddle>난이도 (중)</QE6.TextMiddle>
          <QE6.TextCountMiddle>20 문항</QE6.TextCountMiddle>
        </QE6.Qe4BackMiddle>
      </QE6.Qe4Middle>
      <QE6.Qe4Low onClick={handleQuestE6L}>
        <QE6.Qe4BackLow>
          <img id="Rectangle" src={Rectangle} />
          <QE6.Qe4photobackLow>
            <img id="Rectangle5" src={Rectangle5} />
          </QE6.Qe4photobackLow>
          <QE6.Qe4photoLow>
            <img id="Sun" src={Sun} />
          </QE6.Qe4photoLow>
          <QE6.TextLow>난이도 (하)</QE6.TextLow>
          <QE6.TextCountLow>20 문항</QE6.TextCountLow>
        </QE6.Qe4BackLow>
      </QE6.Qe4Low>
      <Footer />
    </QE6.Container>
  );
};
export default QuestE6;
