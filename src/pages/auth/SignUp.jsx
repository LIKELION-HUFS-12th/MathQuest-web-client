import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Illustration,
  Title,
  Subtitle,
  InputContainer,
  Input,
  Button,
  CheckButton, // 새로 추가된 CheckButton
  Link,
  Text,
  LinkContainer,
} from '../../styles/auth/SignUpStyles';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleUsernameCheck = () => {
    // 중복확인 로직 추가
    alert('중복확인 버튼이 클릭되었습니다.');
  };
  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.post('/api/signup', {
        name,
        username,
        password,
      });
      if (response.status === 200) {
        navigate('/welcome');
      }
    } catch (error) {
      console.error(error);
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <Container>
      <Illustration />
      <Title>회원가입</Title>
      <Subtitle>계정 생성 중...</Subtitle>
      <InputContainer>
        <Input
          type="text"
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <CheckButton onClick={handleUsernameCheck}>중복확인</CheckButton>
      </InputContainer>
      <InputContainer>
        <Input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </InputContainer>
      <InputContainer>
        <Input
          type="password"
          placeholder="비밀번호 확인"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </InputContainer>
      <Button onClick={handleSignUp}>다음</Button>
      <LinkContainer>
        <Text>이미 아이디가 존재합니까?</Text>
        <Link>로그인하기</Link>
      </LinkContainer>
    </Container>
    
  );
};

export default SignUp;


