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
  CheckboxContainer,
  Checkbox,
  AgreementText,
  PasswordEyeIcon,
  NameIcon as StyledNameIcon,
  Message,
} from '../../styles/auth/SignUpStyles';
import ImageLogo from '../../assets/images/logo.png';
import EyeOff from '../../assets/images/eyeoff.png';
import EyeOn from '../../assets/images/eyeon.png';
import NameIcon from '../../assets/images/name.png';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password1, setPassword] = useState('');
  const [password2, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [school, setSchool] = useState('');
  const [grade, setGrade] = useState('');
  const [desiredLevel, setDesiredLevel] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [usernameCheckMessage, setUsernameCheckMessage] = useState('');
  const navigate = useNavigate();

  const handleUsernameCheck = async () => {
    try {
      const response = await axios.post('auth/username-check/', { username });
      if (response.data.available) {
        setUsernameCheckMessage('사용할 수 있는 아이디입니다.');
      } else {
        setUsernameCheckMessage('사용할 수 없는 아이디입니다.');
      }
    } catch (error) {
      console.error(error);
      setUsernameCheckMessage('아이디 확인 중 오류가 발생했습니다.');
    }
  };

  const handleNextStep = () => {
    if (!agreementChecked) {
      alert('이용약관에 동의해주세요.');
      return;
    }

    if (step === 1) {
      setStep(2);
    } else {
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    if (password1 !== password2) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    try {
      const response = await axios.post('auth/registration/', {
        name,
        username,
        password1,
        password2,
        birthdate,
        school,
        grade,
      });
      if (response.status === 200) {
        navigate('/main');
      }
    } catch (error) {
      console.error(error);
      alert('회원가입에 실패했습니다.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <img id="ImageLogo" src={ImageLogo} alt="Logo"/>
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
            <StyledNameIcon src={NameIcon} alt="Name Icon" />
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
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호"
              value={password1}
              onChange={(e) => setPassword(e.target.value)}
            />
            <PasswordEyeIcon
              src={showPassword ? EyeOn : EyeOff}
              alt="Toggle Password Visibility"
              onClick={togglePasswordVisibility}
            />
          </InputContainer>

          <InputContainer>
            <Input
              type="password"
              placeholder="비밀번호 확인"
              value={password2}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputContainer>

          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={agreementChecked}
              onChange={(e) => setAgreementChecked(e.target.checked)}
            />
            <AgreementText>
              <Link href="/terms">이용약관</Link> 에 모두 동의합니다.
            </AgreementText>
          </CheckboxContainer>
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
              placeholder="학교 (EX. 수학초등학교)"
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
        <Link> 로그인하기</Link>
      </LinkContainer>
    </Container>
  );
};

export default SignUp;
