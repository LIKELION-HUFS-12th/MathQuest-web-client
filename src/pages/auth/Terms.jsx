import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  Header,
  TermsSection,
  TermsItem,
  TermsTitle,
  TermsContent,
  CheckboxContainer,
  SubmitButton,
} from '../../styles/auth/TermsStyles'; 
import TextLogoBlack from '../../assets/images/textlogoblack.png';
import ImageLogo from '../../assets/images/logo.png';

const Terms = () => {
  const navigate = useNavigate();
  const [checkboxes, setCheckboxes] = useState({
    terms1: false,
    terms2: false,
    terms3: false,
  });

  const [isTermsChecked, setIsTermsChecked] = useState(false);

  // 이용약관 체크박스 상태 관리
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setCheckboxes((prev) => {
      const newCheckboxes = { ...prev, [name]: checked };
      // 모든 체크박스가 체크되었을 때 "이용약관에 모두 동의합니다" 체크박스를 활성화
      setIsTermsChecked(Object.values(newCheckboxes).every((val) => val));
      return newCheckboxes;
    });
  };

  const handleSubmit = () => {
    if (isTermsChecked) {
      // 이용약관 동의 여부를 state로 전달하면서 SignUp 페이지로 이동
      navigate('/signup', { state: { isTermsChecked: true } });
    } else {
      alert('이용약관에 동의해주세요.');
    }
  };

  return (
    <Container>
      <img id="ImageLogo" src={ImageLogo} alt="Logo" />
      <img id="TextLogoBlack" src={TextLogoBlack} alt="Text Logo" />
      <Header>서비스 약관</Header>
      <TermsSection>
        {/* 제 1조 */}
        <TermsItem>
          <CheckboxContainer>
            <input
              type="checkbox"
              name="terms1"
              checked={checkboxes.terms1}
              onChange={handleCheckboxChange}
            />
            <TermsTitle>제 1조 (서비스 제공)</TermsTitle>
          </CheckboxContainer>
          <TermsContent>
            본 서비스는 사용자의 편의를 위해 제공되는 것으로, 사용자는 본 서비스를 이용하기 전에 본 약관을 숙지해야 합니다.
          </TermsContent>
        </TermsItem>

        {/* 제 2조 */}
        <TermsItem>
          <CheckboxContainer>
            <input
              type="checkbox"
              name="terms2"
              checked={checkboxes.terms2}
              onChange={handleCheckboxChange}
            />
            <TermsTitle>제 2조 (개인정보 수집 및 이용)</TermsTitle>
          </CheckboxContainer>
          <TermsContent>
            사용자의 개인정보는 서비스 제공을 위해 수집되며, 관련 법률에 따라 보호됩니다.
          </TermsContent>
        </TermsItem>

        {/* 제 3조 */}
        <TermsItem>
          <CheckboxContainer>
            <input
              type="checkbox"
              name="terms3"
              checked={checkboxes.terms3}
              onChange={handleCheckboxChange}
            />
            <TermsTitle>제 3조 (사용자의 의무)</TermsTitle>
          </CheckboxContainer>
          <TermsContent>
            사용자는 본 약관 및 관련 법령을 준수하며, 서비스의 정상적인 운영을 방해하지 않아야 합니다.
          </TermsContent>
        </TermsItem>
      </TermsSection>

      <SubmitButton
        disabled={!isTermsChecked} // 모든 체크박스가 선택되지 않으면 버튼 비활성화
        onClick={handleSubmit}
      >
        확인
      </SubmitButton>
    </Container>
  );
};

export default Terms;
