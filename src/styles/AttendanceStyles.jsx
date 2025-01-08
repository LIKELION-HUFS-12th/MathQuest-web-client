import styled from "styled-components";

export const CalendarContainer = styled.div`
  background-color: #fef9c3; /* 밝은 노란색 배경 */
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;


export const DateDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  button {
    background-color: #38bdf8; /* 하늘색 */
    color: white;
    border: none;
    padding: 8px 12px;
    border-radius: 10px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: background-color 0.3s;

    &:hover {
      background-color: #0ea5e9;
    }
  }

  span {
    font-size: 20px;
    font-weight: bold;
    color: #1e293b; /* 짙은 네이비 */
  }
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  width: 100%;

  button {
    width: 100%;
    aspect-ratio: 1 / 1; /* 정사각형 */
    border: 2px solid #d1d5db;
    border-radius: 10px;
    background-color: white;
    cursor: pointer;
    font-size: 14px;
    color: #111827;
    font-weight: bold;

    &:hover {
      background-color: #fef08a; /* 연한 노란색 */
    }

    &.today {
      background-color: #86efac; /* 연한 초록색 */
      color: white;
      font-weight: bold;
    }

    &.selected {
      border: 2px solid #f87171; /* 연한 빨간색 */
      background-color: #fca5a5; /* 밝은 빨간색 */
      color: white;
    }
  }
`;

export const StatsContainer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  gap: 20px;

  .stat-box {
    padding: 10px 15px;
    border-radius: 10px;
    background-color: white;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin: 0;
    }

    p {
      font-size: 16px;
      color: #1e293b;
      margin: 5px 0 0;
    }

    &.correct {
      border: 2px solid #4ade80; /* 초록색 */
    }

    &.incorrect {
      border: 2px solid #f87171; /* 빨간색 */
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
`;

export const NavButton = styled.button`
  background-color: #3b82f6; /* 파란색 */
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #2563eb;
  }
`;
