import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Title,
  Subtitle,
  Input,
  Button,
  CheckboxContainer,
  CheckboxLabel,
  Checkbox,
  IconWrapper,
  Icon
} from '../../styles/auth/SignOutStyles';

const SignOut = () => {
  return (
    <Container>
      <IconWrapper>
        <Icon src="your-icon-url-here" alt="Icon" />
      </IconWrapper>
      <Title>회원탈퇴</Title>
      <Subtitle>계정을 삭제합니다...</Subtitle>
      <Input type="text" placeholder="아이디" />
      <Input type="password" placeholder="비밀번호" />
      <Input type="password" placeholder="비밀번호 확인" />
      <CheckboxContainer>
        <Checkbox type="checkbox" id="confirm" />
        <CheckboxLabel htmlFor="confirm">회원탈퇴를 계속 진행합니다</CheckboxLabel>
      </CheckboxContainer>
      <Button>완료</Button>
    </Container>
  );
};

export default SignOut;
