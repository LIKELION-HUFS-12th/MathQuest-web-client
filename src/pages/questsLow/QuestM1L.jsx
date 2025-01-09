//커밋용 코드들

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as QM1 from '../../styles/quests/QuestM1Styles';
import QuestHeader from '../../shared/components/QuestHeader';
import Rectangle5 from '../../assets/images/rectangle5.png';
import Learn2 from '../../assets/images/learn2.png';
import Footer from '../../shared/components/Footer';
import Rectangle from '../../assets/images/rectangle.png';
import Fire from '../../assets/images/fire.png';
import Hill from '../../assets/images/hill.png';
import Sun from '../../assets/images/sun.png';

const QuestM1 = () => {
  return (
    <QM1.Container>
      <QuestHeader />
      <QM1.Profile>
        <QM1.PhotoBack>
          <img id="Rectangle5" src={Rectangle5} />
        </QM1.PhotoBack>
        <QM1.Photo>
          <img id="Learn2" src={Learn2} />
        </QM1.Photo>
        <QM1.Text>중등 1학년</QM1.Text>
      </QM1.Profile>
      <QM1.QuestList>퀘스트 목록</QM1.QuestList>
      <QM1.Qe4Hard>
        <QM1.Qe4Back>
          <img id="Rectangle" src={Rectangle} />
          <QM1.Qe4photoback>
            <img id="Rectangle5" src={Rectangle5} />
          </QM1.Qe4photoback>
          <QM1.Qe4photo>
            <img id="Fire" src={Fire} />
          </QM1.Qe4photo>
          <QM1.TextHard>난이도 (상)</QM1.TextHard>
          <QM1.TextCount>20 문항</QM1.TextCount>
        </QM1.Qe4Back>
      </QM1.Qe4Hard>
      <QM1.Qe4Middle>
        <QM1.Qe4BackMiddle>
          <img id="Rectangle" src={Rectangle} />
          <QM1.Qe4photobackMiddle>
            <img id="Rectangle5" src={Rectangle5} />
          </QM1.Qe4photobackMiddle>
          <QM1.Qe4photoMiddle>
            <img id="Hill" src={Hill} />
          </QM1.Qe4photoMiddle>
          <QM1.TextMiddle>난이도 (중)</QM1.TextMiddle>
          <QM1.TextCountMiddle>20 문항</QM1.TextCountMiddle>
        </QM1.Qe4BackMiddle>
      </QM1.Qe4Middle>
      <QM1.Qe4Low>
        <QM1.Qe4BackLow>
          <img id="Rectangle" src={Rectangle} />
          <QM1.Qe4photobackLow>
            <img id="Rectangle5" src={Rectangle5} />
          </QM1.Qe4photobackLow>
          <QM1.Qe4photoLow>
            <img id="Sun" src={Sun} />
          </QM1.Qe4photoLow>
          <QM1.TextLow>난이도 (하)</QM1.TextLow>
          <QM1.TextCountLow>20 문항</QM1.TextCountLow>
        </QM1.Qe4BackLow>
      </QM1.Qe4Low>
      <Footer />
    </QM1.Container>
  );
};
export default QuestM1;