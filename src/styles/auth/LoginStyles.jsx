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


export const img1 = styled.img`
    max-width: 150px; /* 최대 너비 지정 */
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 30px;

`;

export const img2 = styled.img`
    max-width: 200px; /* 최대 너비 지정 */
    height: auto;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    margin-bottom: 70px;
`;

export const Form = styled.form`
    background-color: #007bff;
    border-radius: 10px;
    padding: 20px;
    width: 300px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const InputLabel = styled.label`
    color: white;
    margin-bottom: 10px;
    margin-left: 5px;
    display: flex;
`;

export const Input = styled.input`
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 5px;
    border: none;
    margin-bottom: 15px;
    display: flex;
`;

export const LoginButton = styled.button`
    width: 100%;
    padding: 10px;
    background-color: #0056b3;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    &:hover {
        background-color: #004494;
    }
`;

export const ForgotPassword = styled.p`
    color: white;
    text-align: flex-start;
    margin-top: 20px;
    margin-left: 5px;
    display: flex;
`;
