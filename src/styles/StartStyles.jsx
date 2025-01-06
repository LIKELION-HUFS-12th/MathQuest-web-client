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
`;          


export const img1 = styled.img`
    max-width: 80%; /* 최대 너비 지정 */
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;
`;

export const img2 = styled.img`
    max-width: 55%; /* 최대 너비 지정 */
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    margin-bottom: 70px;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: #DAE0ED; 
  padding: 50px;
  border-bottom-right-radius: 30px;
  border-bottom-left-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
`;

export const Button = styled.button`
  padding: 15px;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  max-width: 280px;
  margin: 5px;
  background-color: #376AED;
  border-color: #376AED;

  &:first-child {
    background-color: #FAFAFC;
    color: white;
    transition: background-color 0.3s ease, transform 0.2s;

    &:hover {
      background-color: #ff0000;
      transform: scale(1.05);
    }
  }

  &:last-child {
    background-color: #FAFAFC;
    color: #333;

    &:hover {
      background-color: #ff0000;
      transform: scale(1.05);
    }
  }
`;
