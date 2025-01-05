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
import Book1 from '../assets/images/book1.png';
import Graduation from '../assets/images/graduation.png';
import Learn2 from '../assets/images/learn2.png';
import Process from '../assets/images/process.png';

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
        <M.ProcessTriangle>
          <img id="Process" src={Process} />
        </M.ProcessTriangle>
      </M.Process>
      <M.ProcessText>학습 진행</M.ProcessText>
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
      <M.Process5>
        <M.Process5Back>
          <img id="Rectangle" src={Rectangle} />
          <M.Process5Icon>
            <img id="Rectangle5" src={Rectangle5} />
          </M.Process5Icon>
          <M.Process5Icon2>
            <img id="Book1" src={Book1} />
          </M.Process5Icon2>
          <M.Process5Information>초등학교 5학년</M.Process5Information>
          <M.Process5Quest>총 58문항</M.Process5Quest>
        </M.Process5Back>
      </M.Process5>
      <M.Process6>
        <M.Process6Back>
          <img id="Rectangle" src={Rectangle} />
          <M.Process6Icon>
            <img id="Rectangle5" src={Rectangle5} />
          </M.Process6Icon>
          <M.Process6Icon2>
            <img id="Graduation" src={Graduation} />
          </M.Process6Icon2>
          <M.Process6Information>초등학교 6학년</M.Process6Information>
          <M.Process6Quest>총 86문항</M.Process6Quest>
        </M.Process6Back>
      </M.Process6>
      <M.ProcessM1>
        <M.ProcessM1Back>
          <img id="Rectangle" src={Rectangle} />
          <M.ProcessM1Icon>
            <img id="Rectangle5" src={Rectangle5} />
          </M.ProcessM1Icon>
          <M.ProcessM1Icon2>
            <img id="Learn2" src={Learn2} />
          </M.ProcessM1Icon2>
          <M.ProcessM1Information>중학교 1학년</M.ProcessM1Information>
          <M.ProcessM1Quest>총 93문항</M.ProcessM1Quest>
        </M.ProcessM1Back>
      </M.ProcessM1>
      <Footer />
    </M.Container>
  );
};
export default Main;
