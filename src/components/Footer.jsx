import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as F from '../styles/FooterStyles';
import MenuBar from '../assets/images/menubar.png';
import Home1 from '../assets/images/home1.png';
import Calendar from '../assets/images/calendar.png';
import Chart from '../assets/images/chart.png';
import Profile from '../assets/images/profile.png';
import MenuButton from '../assets/images/MenuButton.png';

const Footer = () => {
  return (
    <F.Container>
      <F.MenuButton>
        <img id="MenuButton" src={MenuButton} />
      </F.MenuButton>
      <F.Menubar>
        <img id="MenuBar" src={MenuBar} />
        <F.Home>
          <img id="Home1" src={Home1} />
          <F.HomeText>홈</F.HomeText>
        </F.Home>
        <F.Calendar>
          <img id="Calendar" src={Calendar} />
          <F.CalendarText>출석체크</F.CalendarText>
        </F.Calendar>
        <F.Chart>
          <img id="Chart" src={Chart} />
          <F.ChartText>학습 리포트</F.ChartText>
        </F.Chart>
        <F.Profile>
          <img id="Profile" src={Profile} />
          <F.ProfileText>프로필</F.ProfileText>
        </F.Profile>
      </F.Menubar>
    </F.Container>
  );
};
export default Footer;
