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

 

export const Logo = styled.img`
  width: 100px;
  margin-bottom: 20px;
`;

export const ContactSection = styled.div`
  margin-bottom: 20px;
`;

export const ContactInfo = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

export const DeveloperList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DeveloperItem = styled.div`
  margin: 10px 0;
  text-align: center;
`;

export const DeveloperImage = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  margin-bottom: 10px;
`;


export const DeveloperRole = styled.p`
  font-size: 14px;
  color: #ff69b4;
  margin: 0;
`;

export const DeveloperName = styled.p`
  font-size: 16px;
  margin: 0;
`;



