import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as F from '../../styles/FooterStyles';
import MenuBar from '../../assets/images/menubar3.png';
import Home1 from '../../assets/images/home1.png';
import Calendar from '../../assets/images/calendar.png';
import Chart from '../../assets/images/chart.png';
import Profile from '../../assets/images/profile.png';
import MenuButton from '../../assets/images/MenuButton.png';

const Footer = () => {
  const navigate = useNavigate();

  const handleMenu = () => navigate('/option');
  const handleMain = () => navigate('/Main');
  const handleAttendance = () => navigate('/attendance');
  const handleReport = () => navigate('/learningreport');
  const handleProfile = () => navigate('/profile');

  return (
    <F.Container>
      <F.MenuButton onClick={handleMenu}>
        <img id="MenuButton" src={MenuButton} alt="Menu Button" />
      </F.MenuButton>
      <F.Menubar>
        <img id="MenuBar" src={MenuBar} alt="Menu Bar" />
        <F.Home onClick={handleMain}>
          <img id="Home1" src={Home1} alt="Home" />
          <F.HomeText>홈</F.HomeText>
        </F.Home>
        <F.Calendar onClick={handleAttendance}>
          <img id="Calendar" src={Calendar} alt="Calendar" />
          <F.CalendarText>출석체크</F.CalendarText>
        </F.Calendar>
        <F.Chart onClick={handleReport}>
          <img id="Chart" src={Chart} alt="Chart" />
          <F.ChartText>학습 리포트</F.ChartText>
        </F.Chart>
        <F.Profile onClick={handleProfile}>
          <img id="Profile" src={Profile} alt="Profile" />
          <F.ProfileText>프로필</F.ProfileText>
        </F.Profile>
      </F.Menubar>
    </F.Container>
  );
};

export default Footer;
