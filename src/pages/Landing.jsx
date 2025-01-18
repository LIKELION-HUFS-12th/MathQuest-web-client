import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as L from '../styles/LandingStyles';
import ImageLogo from '../assets/images/logo.png';

const Landing = () => {
  const navigate = useNavigate();

  // 화면을 클릭할 때 호출되는 함수
  const handleScreenClick = () => {
    navigate('/start');  // 'start' 페이지로 이동
  };

  useEffect(() => {
    // 페이지에 로드되었을 때 특정 API를 호출하거나 추가 기능이 필요하면 여기서 처리
  }, []);

  return (
    <L.Container onClick={handleScreenClick}>  {/* 화면 클릭 시 함수 호출 */}
      <L.ImageWrapper>
        <L.ImageLogo id="ImageLogo" src={ImageLogo} alt="Logo" />
      </L.ImageWrapper>
    </L.Container>
  );
};

export default Landing;
