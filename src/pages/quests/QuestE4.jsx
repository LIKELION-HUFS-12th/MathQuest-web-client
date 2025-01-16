import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import * as QE4 from '../../styles/quests/QuestE4Styles';
import QuestHeader from '../../shared/components/QuestHeader';
import Rectangle5 from '../../assets/images/rectangle5.png';
import HeadPhone from '../../assets/images/headphone.png';
import Footer from '../../shared/components/Footer';
import Rectangle from '../../assets/images/rectangle.png';
import Fire from '../../assets/images/fire.png';
import Hill from '../../assets/images/hill.png';
import Sun from '../../assets/images/sun.png';

const QuestE4 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {level} = location.state || {};

  const handleQuestE4H = () => {
    navigate('/questE4H', { state: { level, difficulty: '상' } });
  };
  const handleQuestE4M = () => {
    navigate('/questE4M', { state: { level, difficulty: '중' } });
  };
  const handleQuestE4L = () => {
    navigate('/questE4L', { state: { level, difficulty: '하' } });
  };

  return (
    <QE4.Container>
      <QuestHeader />
      <QE4.Profile>
        <QE4.PhotoBack>
          <img id="Rectangle5" src={Rectangle5} />
        </QE4.PhotoBack>
        <QE4.Photo>
          <img id="HeadPhone" src={HeadPhone} />
        </QE4.Photo>
        <QE4.Text>{level}</QE4.Text>
      </QE4.Profile>
      <QE4.QuestList>퀘스트 목록</QE4.QuestList>
      <QE4.Qe4Hard onClick={handleQuestE4H}>
        <QE4.Qe4Back>
          <img id="Rectangle" src={Rectangle} />
          <QE4.Qe4photoback>
            <img id="Rectangle5" src={Rectangle5} />
          </QE4.Qe4photoback>
          <QE4.Qe4photo>
            <img id="Fire" src={Fire} />
          </QE4.Qe4photo>
          <QE4.TextHard>난이도 (상)</QE4.TextHard>
          <QE4.TextCount>20 문항</QE4.TextCount>
        </QE4.Qe4Back>
      </QE4.Qe4Hard>
      <QE4.Qe4Middle onClick={handleQuestE4M}>
        <QE4.Qe4BackMiddle>
          <img id="Rectangle" src={Rectangle} />
          <QE4.Qe4photobackMiddle>
            <img id="Rectangle5" src={Rectangle5} />
          </QE4.Qe4photobackMiddle>
          <QE4.Qe4photoMiddle>
            <img id="Hill" src={Hill} />
          </QE4.Qe4photoMiddle>
          <QE4.TextMiddle>난이도 (중)</QE4.TextMiddle>
          <QE4.TextCountMiddle>20 문항</QE4.TextCountMiddle>
        </QE4.Qe4BackMiddle>
      </QE4.Qe4Middle>
      <QE4.Qe4Low onClick={handleQuestE4L}>
        <QE4.Qe4BackLow>
          <img id="Rectangle" src={Rectangle} />
          <QE4.Qe4photobackLow>
            <img id="Rectangle5" src={Rectangle5} />
          </QE4.Qe4photobackLow>
          <QE4.Qe4photoLow>
            <img id="Sun" src={Sun} />
          </QE4.Qe4photoLow>
          <QE4.TextLow>난이도 (하)</QE4.TextLow>
          <QE4.TextCountLow>20 문항</QE4.TextCountLow>
        </QE4.Qe4BackLow>
      </QE4.Qe4Low>
      <Footer />
    </QE4.Container>
  );
};
export default QuestE4;
