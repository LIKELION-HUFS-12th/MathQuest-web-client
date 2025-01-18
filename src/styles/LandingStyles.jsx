import styled from 'styled-components';

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
  cursor: pointer;  /* 클릭 가능하게 변경 */
`;

export const img = styled.img`
  width:200px;
  height: auto;
  margin: 0 auto;
`;

export const ImageWrapper = styled.div`
  margin-bottom: 20px;
`;

export const ImageLogo = styled.img`
  width: 200px;
  height: auto;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-top: 20px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #777;
  margin-top: 10px;
`;
