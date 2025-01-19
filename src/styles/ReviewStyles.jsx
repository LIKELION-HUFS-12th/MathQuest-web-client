import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F5F5F5;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; /* 위로 올리기 위해 flex-start로 변경 */
  text-align: center;
`;        

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 왼쪽 정렬 */
  margin-bottom: 50px;
  position: relative; /* 위치 지정 */
  width: 100%;

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    position: absolute; /* 왼쪽 상단 고정 */
    left: 4%;
    top: 40%;
    transform: translateY(-50%);
    padding: 0 10px;
  }

  h1 {
    font-size: 1.5rem;
    color: #333;
    margin: 0 auto; /* 중앙 정렬 */
  }
`;

export const Icon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
`;

export const AppInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

export const AppIcon = styled.img`
  width: 64px;
  height: 64px;
  margin-bottom: 8px;
`;

export const AppName = styled.div`
  text-align: center;
  h2 {
    margin: 0;
    font-size: 20px;
  }
  p {
    margin: 0;
    font-size: 16px;
    color: gray;
  }
`;

export const Rating = styled.div`
  margin-top: 12px;
`;

export const RatingStars = styled.div`
  font-size: 20px;
  span {
    margin: 0 2px;
  }
`;

export const ReviewInput = styled.div`
  margin-bottom: 24px;
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
  }
  textarea {
    width: 100%;
    height: 80px;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    resize: none;
  }
`;

export const Recommendation = styled.div`
  margin-bottom: 24px;
  p {
    margin-bottom: 8px;
  }
  label {
    margin-right: 16px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #0066ff;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #0056e0;
  }
`;
