import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as M from '../styles/MainStyles';
import TextLogo from '../assets/images/textlogo.png';
import Rectangle from '../assets/images/rectangle.png';
import Rectangle4 from '../assets/images/rectangle4.png';
import LeftArrow from '../assets/images/leftarrow.png';
import Footer from '../components/Footer';
import HeadPhone from '../assets/images/headphone.png';
import Rectangle5 from '../assets/images/rectangle5.png';

const Main = () => {
  return (
    <M.Container>
      <M.TextLogo>
        <img id="TextLogo" src={TextLogo} />
      </M.TextLogo>
      <M.Goal>
        <M.GoalBack>
          <img id="Rectangle" src={Rectangle} />
          <M.GoalText>오늘 학습해야 할 목표</M.GoalText>
          <M.GoalButton>
            <M.GoalButtonBack>
              <img id="Rectangle4" src={Rectangle4} />
              <M.GoalButtonText>퀘스트 진행하기</M.GoalButtonText>
              <M.GoalButtonArrow>
                <img id="LeftArrow" src={LeftArrow} />
              </M.GoalButtonArrow>
            </M.GoalButtonBack>
          </M.GoalButton>
        </M.GoalBack>
      </M.Goal>
      <M.Process>
        <M.ButtonProcess>학습 진행 과정 선택</M.ButtonProcess>
      </M.Process>
      <M.ProcessText>학습 진행 과정</M.ProcessText>
      <M.Process4>
        <M.Process4Back>
          <img id="Rectangle" src={Rectangle} />
          <M.Process4Icon>
            <img id="Rectangle5" src={Rectangle5} />
          </M.Process4Icon>
          <M.Process4Icon2>
            <img id="HeadPhone" src={HeadPhone} />
          </M.Process4Icon2>
          <M.Process4Information>초등학교 4학년</M.Process4Information>
          <M.Process4Quest>총 60문항</M.Process4Quest>
        </M.Process4Back>
      </M.Process4>
      <Footer />
    </M.Container>
  );
};
export default Main;
