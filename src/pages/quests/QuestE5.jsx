import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as QE5 from '../../styles/quests/QuestE5Styles';
import QuestHeader from '../../shared/components/QuestHeader';
import Rectangle5 from '../../assets/images/rectangle5.png';
import Book3 from '../../assets/images/book3.png';
import Footer from '../../shared/components/Footer';
import Rectangle from '../../assets/images/rectangle.png';
import Fire from '../../assets/images/fire.png';
import Hill from '../../assets/images/hill.png';
import Sun from '../../assets/images/sun.png';

const QuestE5 = () => {
  const navigate = useNavigate();

  const handleQuestE5H = () => {
    navigate('/questE5H')
  };
  const handleQuestE5M = () => {
    navigate('/questE5M')
  };
  const handleQuestE5L = () => {
    navigate('/questE5L')
  };

  return (
    <QE5.Container>
      <QuestHeader />
      <QE5.Profile>
        <QE5.PhotoBack>
          <img id="Rectangle5" src={Rectangle5} />
        </QE5.PhotoBack>
        <QE5.Photo>
          <img id="Book3" src={Book3} />
        </QE5.Photo>
        <QE5.Text>초등 5학년</QE5.Text>
      </QE5.Profile>
      <QE5.QuestList>퀘스트 목록</QE5.QuestList>
      <QE5.Qe4Hard onClick={handleQuestE5H}>
        <QE5.Qe4Back>
          <img id="Rectangle" src={Rectangle} />
          <QE5.Qe4photoback>
            <img id="Rectangle5" src={Rectangle5} />
          </QE5.Qe4photoback>
          <QE5.Qe4photo>
            <img id="Fire" src={Fire} />
          </QE5.Qe4photo>
          <QE5.TextHard>난이도 (상)</QE5.TextHard>
          <QE5.TextCount>20 문항</QE5.TextCount>
        </QE5.Qe4Back>
      </QE5.Qe4Hard>
      <QE5.Qe4Middle onClick={handleQuestE5M}>
        <QE5.Qe4BackMiddle>
          <img id="Rectangle" src={Rectangle} />
          <QE5.Qe4photobackMiddle>
            <img id="Rectangle5" src={Rectangle5} />
          </QE5.Qe4photobackMiddle>
          <QE5.Qe4photoMiddle>
            <img id="Hill" src={Hill} />
          </QE5.Qe4photoMiddle>
          <QE5.TextMiddle>난이도 (중)</QE5.TextMiddle>
          <QE5.TextCountMiddle>20 문항</QE5.TextCountMiddle>
        </QE5.Qe4BackMiddle>
      </QE5.Qe4Middle>
      <QE5.Qe4Low onClick={handleQuestE5L}>
        <QE5.Qe4BackLow>
          <img id="Rectangle" src={Rectangle} />
          <QE5.Qe4photobackLow>
            <img id="Rectangle5" src={Rectangle5} />
          </QE5.Qe4photobackLow>
          <QE5.Qe4photoLow>
            <img id="Sun" src={Sun} />
          </QE5.Qe4photoLow>
          <QE5.TextLow>난이도 (하)</QE5.TextLow>
          <QE5.TextCountLow>20 문항</QE5.TextCountLow>
        </QE5.Qe4BackLow>
      </QE5.Qe4Low>
      <Footer />
    </QE5.Container>
  );
};
export default QuestE5;
