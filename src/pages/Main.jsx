import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as M from '../styles/MainStyles';
import TextLogo from '../assets/images/textlogo.png';
import Rectangle from '../assets/images/rectangle.png';
import Rectangle4 from '../assets/images/rectangle4.png';
import LeftArrow from '../assets/images/leftarrow.png';
import Footer from '../shared/components/Footer';
import HeadPhone from '../assets/images/headphone.png';
import Rectangle5 from '../assets/images/rectangle5.png';
import Book3 from '../assets/images/book3.png';
import Graduation from '../assets/images/graduation.png';
import Figures from '../assets/images/figures.png';
import Learn2 from '../assets/images/learn2.png';
import Note from '../assets/images/note.png';
import Process from '../assets/images/process.png';

const Main = () => {
  const [year, setYear] = useState('');

  const navigate = useNavigate();
  
    const handleLearnAgain = () => {
      navigate(`/learnAgain`)
    };
    const handleQuestE4 = () => {
      navigate('/questE4', {
        state: {level: '초등학교 4학년'}
      }); 
    };
    const handleQuestE5 = () => {
      navigate('/questE5', {
        state: {level: '초등학교 5학년'}
      }); 
    };
    const handleQuestE6 = () => {
      navigate('/questE6', {
        state: {level: '초등학교 6학년'}
      }); 
    };
    const handleQuestM1 = () => {
      navigate('/questM1', {
        state: {level: '중학교 1학년'}
      }); 
    };
    const handleQuestM2 = () => {
      navigate('/questM2', {
        state: {level: '중학교 2학년'}
      }); 
    };
    const handleQuestM3 = () => {
      navigate('/questM3', {
        state: {level: '중학교 3학년'}
      }); 
    }; 

    const handleSelectChange = (event) => {
      const selectedYear = event.target.value;
      setYear(selectedYear);
    
      let route = '';
    
      if (selectedYear === '4학년') route = '/questE4';
      else if (selectedYear === '5학년') route = '/questE5';
      else if (selectedYear === '6학년') route = '/questE6';
      else if (selectedYear === '1학년') route = '/questM1';
      else if (selectedYear === '2학년') route = '/questM2';
      else if (selectedYear === '3학년') route = '/questM3';

      navigate(route, {
        state: { level: selectedYear },
      });
    };

  return (
    <M.Container>
      <M.MainContent>
        <M.TextLogo>
          <img id="TextLogo" src={TextLogo} />
        </M.TextLogo>
        <M.Goal>
          <M.GoalBack>
            <img id="Rectangle" src={Rectangle} />
            <M.GoalText>오늘 다시 도전할 목표</M.GoalText>
            <M.GoalButton>
              <M.GoalButtonBack onClick={handleLearnAgain}>
                <img id="Rectangle4" src={Rectangle4} />
                <M.GoalButtonText>오답 진행하기</M.GoalButtonText>
                <M.GoalButtonArrow>
                  <img id="LeftArrow" src={LeftArrow} />
                </M.GoalButtonArrow>
              </M.GoalButtonBack>
            </M.GoalButton>
          </M.GoalBack>
        </M.Goal>
        <M.Process>
          <M.ProcessContent process={Process}>
            <select
              name="year"
              value={"year"}
              onChange={handleSelectChange}
            >
              <option value="">학습 진행 학년을 선택하세요</option>
              <option value="4학년">초등학교 4학년</option>
              <option value="5학년">초등학교 5학년</option>
              <option value="6학년">초등학교 6학년</option>
              <option value="1학년">중학교 1학년</option>
              <option value="2학년">중학교 2학년</option>
              <option value="3학년">중학교 3학년</option>
            </select>
          </M.ProcessContent>
        </M.Process>
        <M.ProcessText>학습 진행</M.ProcessText>
        <M.Process4 onClick={handleQuestE4}>
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
        <M.Process5 onClick={handleQuestE5}>
          <M.Process5Back>
            <img id="Rectangle" src={Rectangle} />
            <M.Process5Icon>
              <img id="Rectangle5" src={Rectangle5} />
            </M.Process5Icon>
            <M.Process5Icon2>
              <img id="Book3" src={Book3} />
            </M.Process5Icon2>
            <M.Process5Information>초등학교 5학년</M.Process5Information>
            <M.Process5Quest>총 58문항</M.Process5Quest>
          </M.Process5Back>
        </M.Process5>
        <M.Process6 onClick={handleQuestE6}>
          <M.Process6Back>
            <img id="Rectangle" src={Rectangle} />
            <M.Process6Icon>
              <img id="Rectangle5" src={Rectangle5} />
            </M.Process6Icon>
            <M.Process6Icon2>
              <img id="Figures" src={Figures} />
            </M.Process6Icon2>
            <M.Process6Information>초등학교 6학년</M.Process6Information>
            <M.Process6Quest>총 86문항</M.Process6Quest>
          </M.Process6Back>
        </M.Process6>
        <M.ProcessM1 onClick={handleQuestM1}>
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
        <M.ProcessM2 onClick={handleQuestM2}>
          <M.ProcessM2Back>
            <img id="Rectangle" src={Rectangle} />
            <M.ProcessM2Icon>
              <img id="Rectangle5" src={Rectangle5} />
            </M.ProcessM2Icon>
            <M.ProcessM2Icon2>
              <img id="Note" src={Note} />
            </M.ProcessM2Icon2>
            <M.ProcessM2Information>중학교 2학년</M.ProcessM2Information>
            <M.ProcessM2Quest>총 94문항</M.ProcessM2Quest>
          </M.ProcessM2Back>
        </M.ProcessM2>
        <M.ProcessM3 onClick={handleQuestM3}>
          <M.ProcessM3Back>
            <img id="Rectangle" src={Rectangle} />
            <M.ProcessM3Icon>
              <img id="Rectangle5" src={Rectangle5} />
            </M.ProcessM3Icon>
            <M.ProcessM3Icon2>
              <img id="Graduation" src={Graduation} />
            </M.ProcessM3Icon2>
            <M.ProcessM3Information>중학교 3학년</M.ProcessM3Information>
            <M.ProcessM3Quest>총 97문항</M.ProcessM3Quest>
          </M.ProcessM3Back>
        </M.ProcessM3>
      </M.MainContent>
      <Footer />
    </M.Container>
  );
};
export default Main;