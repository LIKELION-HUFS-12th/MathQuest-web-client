import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as QM3 from '../../styles/quests/QuestM3Styles';
import QuestHeader from '../../shared/components/QuestHeader';
import Rectangle5 from '../../assets/images/rectangle5.png';
import Maths from '../../assets/images/maths.png';
import Footer from '../../shared/components/Footer';
import Rectangle from '../../assets/images/rectangle.png';
import Fire from '../../assets/images/fire.png';
import Hill from '../../assets/images/hill.png';
import Sun from '../../assets/images/sun.png';

const QuestM3 = () => {
  return (
    <QM3.Container>
      <QuestHeader />
      <QM3.Profile>
        <QM3.PhotoBack>
          <img id="Rectangle5" src={Rectangle5} />
        </QM3.PhotoBack>
        <QM3.Photo>
          <img id="Maths" src={Maths} />
        </QM3.Photo>
        <QM3.Text>중등 3학년</QM3.Text>
      </QM3.Profile>
      <QM3.QuestList>퀘스트 목록</QM3.QuestList>
      <QM3.Qe4Hard>
        <QM3.Qe4Back>
          <img id="Rectangle" src={Rectangle} />
          <QM3.Qe4photoback>
            <img id="Rectangle5" src={Rectangle5} />
          </QM3.Qe4photoback>
          <QM3.Qe4photo>
            <img id="Fire" src={Fire} />
          </QM3.Qe4photo>
          <QM3.TextHard>난이도 (상)</QM3.TextHard>
          <QM3.TextCount>20 문항</QM3.TextCount>
        </QM3.Qe4Back>
      </QM3.Qe4Hard>
      <QM3.Qe4Middle>
        <QM3.Qe4BackMiddle>
          <img id="Rectangle" src={Rectangle} />
          <QM3.Qe4photobackMiddle>
            <img id="Rectangle5" src={Rectangle5} />
          </QM3.Qe4photobackMiddle>
          <QM3.Qe4photoMiddle>
            <img id="Hill" src={Hill} />
          </QM3.Qe4photoMiddle>
          <QM3.TextMiddle>난이도 (중)</QM3.TextMiddle>
          <QM3.TextCountMiddle>20 문항</QM3.TextCountMiddle>
        </QM3.Qe4BackMiddle>
      </QM3.Qe4Middle>
      <QM3.Qe4Low>
        <QM3.Qe4BackLow>
          <img id="Rectangle" src={Rectangle} />
          <QM3.Qe4photobackLow>
            <img id="Rectangle5" src={Rectangle5} />
          </QM3.Qe4photobackLow>
          <QM3.Qe4photoLow>
            <img id="Sun" src={Sun} />
          </QM3.Qe4photoLow>
          <QM3.TextLow>난이도 (하)</QM3.TextLow>
          <QM3.TextCountLow>20 문항</QM3.TextCountLow>
        </QM3.Qe4BackLow>
      </QM3.Qe4Low>
      <Footer />
    </QM3.Container>
  );
};
export default QuestM3;