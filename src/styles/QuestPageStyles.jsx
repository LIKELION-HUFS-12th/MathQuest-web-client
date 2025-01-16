import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F2F6FC;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const Content = styled.div``;

export const Quest = styled.div`
    margin-top: -25%;
    img {
    height: 200px;
    width: 345px;
    }
    display: flex;
`;

export const QuestBack = styled.div`
    img {
    height: 200px;
    width: 345px;
    }
    position: relative;
`;

export const QuestText = styled.div`
    z-index: 1;
    position: absolute;
    display: flex;
    textalign-content: center;
    justify-content: center;
    align-items: center;
    top: 27%;
    left: 45%;
`;

export const Options = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 20px; 
    margin-top: 70px; 
    width: 100%; 
    align-items: center; 
`;

export const Option = styled.div`
    padding: 10px 20px; 
    color: #000; 
    border-radius: 5px; 
    cursor: pointer; 
    text-align: center; 
    width: 80%; 
    transition: all 0.3s ease;
    &:hover {
        color: #0051FF;
    }
`;

export const AnswerButton = styled.div`
    margin-bottom: -120px;
    margin-top: 80px;
    color: #0051FF;
    background-color: #E0E6F3;
    padding: 20px 20px;
    margin-left: 15px;
    width: 280px;
    text-align: center;
    border-radius: 18px;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #0051FF;
    box-shadow: 0 5px 0px rgba(75, 74, 74, 0.1);
    &:hover {
        background-color:rgb(193, 205, 232);
        border-color:rgb(0, 69, 217);
    }
`;