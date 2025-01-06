import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as A from "../styles/AttendanceStyles";
import {
    Container,
    Header,
    Calendar,
    SelectedDate,
    Stats,
    Footer,
    Button,
  } from '../styles/AttendanceStyles';
  
  const Attendance = () => {
    return (
      <Container>
        <Header>
          <span>January 2022</span>
          <div>
            <Button>&lt;</Button>
            <Button>&gt;</Button>
          </div>
        </Header>
        <Calendar>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
          {/* Calendar Days */}
          {[...Array(31)].map((_, index) => (
            <div key={index} className={index === 13 || index === 14 ? 'selected' : ''}>
              {index + 1}
            </div>
          ))}
        </Calendar>
        <SelectedDate>2022년 1월 15일</SelectedDate>
        <Stats>
          <div>맞힌 문제 수 : 5</div>
          <div>오답한 문제 수 : 7</div>
        </Stats>
        <Footer>
          <Button>홈</Button>
          <Button>출석체크</Button>
          <Button>학습 리포트</Button>
          <Button>프로필</Button>
        </Footer>
      </Container>
    );
  };
  
  export default Attendance;
  