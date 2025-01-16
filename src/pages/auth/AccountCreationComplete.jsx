import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container, Title } from '../../styles/auth/AccountCreationCompleteStyles'; // 스타일을 추가하세요

const AccountCreationComplete = () => {
  return (
    <Container>
      <Title>계정 생성 완료!</Title>
      <p>회원가입이 완료되었습니다. 이제 로그인할 수 있습니다.</p>
    </Container>
  );
};

export default AccountCreationComplete;
