import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Title,
  InputContainer,
  Input,
  Button,
  Link,
} from './../styles/SignUpStyles';

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

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
      // 성공적으로 회원가입된 후 이동
      if (response.status === 200) {
        navigate('/welcome'); // 원하는 경로로 변경
      }
    } catch (error) {
      console.error(error);
      alert('회원가입에 실패했습니다.');
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
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
        <Link>중복확인</Link>
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
      <Link>이미 아이디가 존재하신가요? 로그인하기</Link>
    </Container>
  );
};

export default SignUp;
