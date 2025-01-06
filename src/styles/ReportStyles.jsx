import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-color: #f5f5f5;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Title = styled.h1`
    font-size: 24px;
    color: #333;
    margin-bottom: 20px;
`;

export const ChartContainer = styled.div`
    background-color: #f8f8f8;
    border-radius: 10px;
    padding: 15px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    margin-bottom: 20px;
    height: 200px; /* 그래프 높이 조정 */
    width: 250px;
`;

export const FeedbackContainer = styled.div`
    padding: 15px;
    background-color: #f0f0f0;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0,0,0,0.1);
    margin-top: 20px; /* 피드백 영역과 차트 간격 조정 */
    width: 250px;
`;

export const FeedbackTitle = styled.h2`
    font-size: 18px;
    color: #333;
    margin-bottom: 10px;
`;

export const FeedbackText = styled.p`
    font-size: 16px;
    color: #555;

    /* 피드백 메시지를 강조하기 위한 스타일 추가 */
    font-weight: bold;
    padding: 10px;
    border-radius: 5px;
    background-color: #e7f3fe; /* 피드백 배경색 */
    border: 1px solid #b3e0ff; /* 테두리 추가 */
`;
