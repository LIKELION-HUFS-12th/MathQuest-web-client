import styled from "styled-components";

// 전체 컨테이너
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
  justify-content: center;
  text-align: center;
`;
// 헤더 제목
export const Header = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 20px;
`;

// 그래프 영역
export const ChartWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;

  canvas {
    max-width: 100%;
  }
`;

// 코멘트 영역
export const CommentSection = styled.div`
  width: 100%;
  padding: 15px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

// 코멘트 제목
export const CommentTitle = styled.h4`
  font-size: 1.2rem;
  font-weight: bold;
  color: #5f4b8b;
  margin-bottom: 10px;
`;

// 코멘트 텍스트
export const CommentText = styled.p`
  font-size: 1rem;
  color: #555;
`;

