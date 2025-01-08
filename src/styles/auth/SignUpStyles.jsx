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
  background-image: url('/path/to/illustration.png');
  background-size: cover;
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  font-weight: 300;
  color: #666;
  margin-bottom: 30px;
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin-bottom: 15px;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box;
`;

export const CheckButton = styled.button`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  padding: 5px 10px;
  font-size: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Button = styled.button`
  width: 100%;
  max-width: 400px;
  padding: 10px;
  font-size: 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #218838;
  }
`;

export const LinkContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Text = styled.span`
  font-size: 14px;
  color: #333;
`;

export const Link = styled.a`
  font-size: 14px;
  color: #007bff;
  margin-left: 5px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
