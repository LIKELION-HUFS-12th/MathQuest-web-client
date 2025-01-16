import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Title } from '../../styles/auth/AccountCreationCompleteStyles'; 
import Welcome from '../../assets/images/welcome.png';

const AccountCreationComplete = () => {
  const navigate = useNavigate(); // useNavigate 훅 사용

  // 화면 클릭 시 로그인 페이지로 이동
  const handleScreenClick = () => {
    navigate('/login'); // 로그인 페이지로 리디렉션
  };

  return (
    <Container onClick={handleScreenClick}>
      <Title>계정 생성 완료!</Title>
      <img id="Welcome" src={Welcome} alt="Welcome" />
    </Container>
  );
};

export default AccountCreationComplete;
