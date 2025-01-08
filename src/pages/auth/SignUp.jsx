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
  CheckButton,
  Link,
  Text,
  LinkContainer,
} from '../../styles/auth/SignUpStyles';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [desiredLevel, setDesiredLevel] = useState('');
  const navigate = useNavigate();

  const handleUsernameCheck = () => {
    alert('중복확인 버튼이 클릭되었습니다.');
  };

  const handleNextStep = () => {
    if (step === 1) {
      setStep(2);
    } else {
      handleSignUp();
    }
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
        birthdate,
        school,
        grade,
        desiredLevel,
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
      {step === 1 ? (
        <>
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
        </>
      ) : (
        <>
          <InputContainer>
            <Input
              type="text"
              placeholder="생년월일 (EX. 2004.01.01)"
              value={birthdate}
              onChange={(e) => setBirthdate(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              placeholder="재학 중인 학교 (EX. 수학초등학교)"
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              placeholder="학년 선택"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              placeholder="학습 희망 단계 선택"
              value={desiredLevel}
              onChange={(e) => setDesiredLevel(e.target.value)}
            />
          </InputContainer>
        </>
      )}
      <Button onClick={handleNextStep}>{step === 1 ? '다음' : '완료'}</Button>
      <LinkContainer>
        <Text>이미 아이디가 존재합니까?</Text>
        <Link>로그인하기</Link>
      </LinkContainer>
    </Container>
  );
};

export default SignUp;
