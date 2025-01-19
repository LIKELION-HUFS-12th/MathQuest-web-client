import React, { useState, useEffect } from 'react';
import { useNavigate, } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Header,
  Title,
  Icon,
  AppInfo,
  AppIcon,
  AppName,
  Rating,
  RatingStars,
  ReviewInput,
  Recommendation,
  SubmitButton,
} from "../styles/ReviewStyles";
import ImageLogo from '../assets/images/logo.png';

const Review = () => {
    const navigate = useNavigate();

  return (
    <Container>
        <Header>
        <button onClick={() => (navigate("/option"))}>
          &larr;
        </button>
        <h1>리뷰하기</h1>
        </Header>
      <AppInfo>
        <img src="ImageLogo" alt="ImageLogo" />
        <AppName>
          <h2>MATHQUEST</h2>
          <p>평가하기</p>
        </AppName>
        <Rating>
          <RatingStars>
            {[...Array(4)].map((_, index) => (
              <span key={index}>⭐</span>
            ))}
            <span>☆</span>
          </RatingStars>
        </Rating>
      </AppInfo>
      <ReviewInput>
        <label htmlFor="review">리뷰를 작성해주세요!</label>
        <textarea id="review" placeholder="리뷰를 작성해주세요..."></textarea>
      </ReviewInput>
      <Recommendation>
        <p>MATHQUEST를 추천하시겠습니까?</p>
        <label>
          <input type="radio" name="recommend" value="yes" />
          네
        </label>
        <label>
          <input type="radio" name="recommend" value="no" />
          아니요
        </label>
      </Recommendation>
      <SubmitButton>제출하기</SubmitButton>
    </Container>
  );
};

export default Review;
