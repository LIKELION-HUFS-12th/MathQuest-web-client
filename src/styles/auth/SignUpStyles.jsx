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


export const Illustration = styled.div`
  width: 150px;
  height: 150px;
  background-color: #f0f0f0;
  border-radius: 50%;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;

  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 20px;
  color: #666;

`;

export const InputContainer = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px 0 0 5px;
`;

export const CheckButton = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0 5px 5px 0;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Button = styled.button`
  width: 50%;
  padding: 10px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;


export const Text = styled.h5`
  margin-right: 5px;
  color: #666;
`;

export const Link = styled.a`
  margin-top: 20px;
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
