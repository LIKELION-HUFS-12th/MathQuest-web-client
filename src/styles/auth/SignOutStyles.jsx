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
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
  margin-top: 180px;
`;


export const Subtitle = styled.p`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Input = styled.input`
  width: 80%;
  max-width: 400px;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export const Button = styled.button`
width: 60%;
max-width: 400px;
padding: 10px 15px;
background-color: #000;
margin-top: 50px;
color: #fff;
font-size: 16px;
border: none;
border-radius: 20px;
cursor: pointer;

&:hover {
  background-color: #333;
}
`;


export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const CheckboxLabel = styled.label`
  margin-left: 5px;
  font-size: 14px;
`;

export const Checkbox = styled.input`
  width: 16px;
  height: 16px;
`;

export const IconWrapper = styled.div`
  margin-bottom: 20px;
`;

export const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
