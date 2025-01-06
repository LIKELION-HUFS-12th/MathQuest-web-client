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
  font-weight: bold;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputContainer = styled.div`
  width: 80%;
  margin-bottom: 15px;
  display: flex;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  
`;

export const Button = styled.button`
  width: 80%;
  padding: 15px;
  background-color: #000;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-top: 10px;
  

  &:hover {
    background-color: #444;
  }
`;

export const Link = styled.a`
  margin-top: 10px;
  font-size: 14px;
  color: red;
`;
