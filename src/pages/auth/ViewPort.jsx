//이용약관 페이지
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
  } from '../../styles/auth/ViewPortStyles.jsx';
import ImageLogo from '../../assets/images/logo.png';
import TextLogoBlack from '../../assets/images/textlogoblack.png';
import Footer from '../../shared/components/Footer';

const Viewport = () => {
  const [agreements, setAgreements] = useState({
    agree1: false,
    agree2: false,
    agree3: false,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setAgreements((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };

  const allChecked = Object.values(agreements).every((value) => value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (allChecked) {
      alert('모든 약관에 동의하셨습니다. 서비스 이용을 시작합니다!');
    }
  };

  return (
    <Container>
    <img id="ImageLogo" src={ImageLogo} alt="Logo" />
    <img id="TextLogoBlack" src={TextLogoBlack} alt="Text Logo" />
      <h1>매쓰퀘스트 이용약관</h1>
      <form onSubmit={handleSubmit}>
        <div className="term">
          <label>
            <input
              type="checkbox"
              className="checkbox"
              name="agree1"
              checked={agreements.agree1}
              onChange={handleCheckboxChange}
            />
            서비스 이용 규정에 동의합니다. (본 서비스는 개인 학습 및 교육 목적으로만 사용 가능합니다.)
          </label>
        </div>
        <div className="term">
          <label>
            <input
              type="checkbox"
              className="checkbox"
              name="agree2"
              checked={agreements.agree2}
              onChange={handleCheckboxChange}
            />
            개인정보 처리 방침에 동의합니다. (개인정보는 관련 법령에 따라 처리됩니다.)
          </label>
        </div>
        <div className="term">
          <label>
            <input
              type="checkbox"
              className="checkbox"
              name="agree3"
              checked={agreements.agree3}
              onChange={handleCheckboxChange}
            />
            콘텐츠 이용 및 저작권에 동의합니다. (무단 복제, 배포, 상업적 이용을 금합니다.)
          </label>
        </div>
        <button type="submit" className="submit-btn" disabled={!allChecked}>
          동의하고 시작하기
        </button>
      </form>
    </Container>
  );
};

export default Viewport;
