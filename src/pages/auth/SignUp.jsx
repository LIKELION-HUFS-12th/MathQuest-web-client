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
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password1: '',
    password2: '',
    birthdate: '',
    school: '',
    grade: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [agreementChecked, setAgreementChecked] = useState(false);
  const [usernameCheckMessage, setUsernameCheckMessage] = useState('');
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(false);
  const [isTermsChecked, setIsTermsChecked] = useState(false); // 이용약관 동의 상태
  const navigate = useNavigate();

  const handleTermsChange = (e) => {
    setIsTermsChecked(e.target.checked); // 이용약관 동의 체크박스 상태 업데이트
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUsernameCheck = async () => {
    try {
      const response = await axios.post('https://mathquestpro.shop/user/auth/username-check/', {
        username: formData.username,
      });

      console.log(response.data);

      if (response.data.data.is_available) {
        setIsUsernameAvailable(true);
        setUsernameCheckMessage('사용할 수 있는 아이디입니다.');
      } else {
        setIsUsernameAvailable(false);
        setUsernameCheckMessage('이미 사용중인 아이디입니다.');
      }
    } catch (error) {
      console.error(error);
      setUsernameCheckMessage('아이디 확인 중 오류가 발생했습니다.');
    }
  };

  const validateForm = () => {
    const { name, username, password1, password2, birthdate, school, grade } = formData;

    if (!name.trim() || !username.trim()) {
      alert('이름과 아이디를 입력하세요.');
      return false;
    }
    if (password1.length < 8) {
      alert('비밀번호는 8자 이상이어야 합니다.');
      return false;
    }
    if (password1 !== password2) {
      alert('비밀번호가 일치하지 않습니다.');
      return false;
    }
    if (!isTermsChecked) {
      alert('이용약관에 동의해주세요.');
      return false;
    }
    if (step === 2) {
      if (!birthdate.trim()) {
        alert('생년월일을 입력해주세요.');
        return false;
      }
      if (!school.trim()) {
        alert('학교를 입력해주세요.');
        return false;
      }
      if (!grade.trim()) {
        alert('학년을 입력해주세요.');
        return false;
      }
    }
    return true;
  };

  const handleNextStep = () => {
    if (step === 1) {
      if (validateForm() && isUsernameAvailable) {
        setStep(2);
      } else {
        alert('아이디 중복을 확인하고, 모든 필드를 입력하세요.');
      }
    } else {
      handleSignUp();
    }
  };

  const handleSignUp = async () => {
    if (!isUsernameAvailable) {
      alert('아이디 중복을 확인해주세요.');
      return;
    }

    if (!formData.password1 || !formData.password2) {
      alert('비밀번호와 비밀번호 확인을 입력해주세요.');
      return;
    }

    try {
      const response = await axios.post('https://mathquestpro.shop/auth/registration/', {
        name: formData.name,
        username: formData.username,
        password1: formData.password1,
        password2: formData.password2,
        birthdate: formData.birthdate,
        school: formData.school,
        grade: formData.grade,
      });

      console.log(response);

      if (response.status === 201) {
        navigate('/accountcreationcomplete');
      } else {
        console.log("회원가입 응답 상태가 201이 아닙니다.", response.status);
      }
    } catch (error) {
      console.error('회원가입 오류:', error.response?.data || error.message);
      alert('회원가입에 실패했습니다.');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      <img id="ImageLogo" src={ImageLogo} alt="Logo" />
      <Illustration />
      <Title>회원가입</Title>
      <Subtitle>계정 생성 중...</Subtitle>

      {step === 1 ? (
        <>
          <InputContainer>
            <Input
              type="text"
              name="name"
              placeholder="이름"
              value={formData.name}
              onChange={handleInputChange}
            />
            <StyledNameIcon src={NameIcon} alt="Name Icon" />
          </InputContainer>

          <InputContainer>
            <Input
              type="text"
              name="username"
              placeholder="아이디"
              value={formData.username}
              onChange={handleInputChange}
            />
            <CheckButton onClick={handleUsernameCheck} disabled={!formData.username}>
              중복확인
            </CheckButton>
          </InputContainer>
          {usernameCheckMessage && (
            <Message style={{ color: isUsernameAvailable ? 'green' : 'red' }}>
              {usernameCheckMessage}
            </Message>
          )}

          <InputContainer>
            <Input
              type={showPassword ? 'text' : 'password'}
              name="password1"
              placeholder="비밀번호"
              value={formData.password1}
              onChange={handleInputChange}
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
              name="password2"
              placeholder="비밀번호 확인"
              value={formData.password2}
              onChange={handleInputChange}
            />
          </InputContainer>

          <CheckboxContainer>
            <Checkbox
              type="checkbox"
              checked={isTermsChecked}
              onChange={handleTermsChange}
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
              name="birthdate"
              placeholder="생년월일 (EX. 040101)"
              value={formData.birthdate}
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              name="school"
              placeholder="학교 (EX. 초등학교)"
              value={formData.school}
              onChange={handleInputChange}
            />
          </InputContainer>
          <InputContainer>
            <Input
              type="text"
              name="grade"
              placeholder="학년 (EX. 3학년)"
              value={formData.grade}
              onChange={handleInputChange}
            />
          </InputContainer>

          <InputContainer>
            <Input type="text" disabled placeholder="이 단계는 선택 사항입니다." />
          </InputContainer>
        </>
      )}

      <Button onClick={handleNextStep}>{step === 1 ? '다음' : '완료'}</Button>

      <LinkContainer>
        <Text>이미 아이디가 존재합니까? </Text>
        <Link href="/login">로그인</Link>
      </LinkContainer>
    </Container>
  );
};

export default SignUp;
