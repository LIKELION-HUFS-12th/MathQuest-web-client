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
  font-size: 36px;
  color: #2c3e50;
  font-weight: 700;
  margin: 20px 0;
  text-align: left;
`;

export const Message = styled.p`
  font-size: 18px;
  color: #7f8c8d;
  text-align: left;
  margin: 10px 0;
`;

export const Button = styled.button`
  background-color: #3498db;
  color: white;
  border: none;
  padding: 12px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  &:hover {
    background-color: #2980b9;
  }
`;

