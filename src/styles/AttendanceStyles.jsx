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

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  margin-bottom: 20px;

  div {
    display: flex;
    gap: 10px;
  }
`;

export const Calendar = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  margin-bottom: 20px;
  
  


  div {
    text-align: center;
    padding: 10px;
    border-radius: 8px;
    background-color: #f0f0f0;
  }

  .selected {
    background-color: #ff6b6b;
    color: white;
  }
`;

export const SelectedDate = styled.div`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Stats = styled.div`
  font-size: 16px;
  margin-bottom: 20px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background-color: #3f51b5;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #303f9f;
  }
`;
