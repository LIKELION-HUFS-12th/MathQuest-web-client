import styled from "styled-components";

// 달력 컨테이너
export const CalendarContainer = styled.div`
  background-color: #fef9c3;
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

// 날짜 표시 부분
export const DateDisplay = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;

  button {
    background-color: #38bdf8;
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
    color: #1e293b;
  }
`;

// 달력을 감싸는 박스 추가
export const CalendarBox = styled.div`
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 16px;
  padding: 20px;
  width: 100%;
  max-width: 380px;
  margin-top: 20px;
`;

// 달력을 감싸는 박스
export const CalendarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 380px;
`;

// 요일 행
export const WeekdayRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  width: 100%;
  background-color: #d1d5db;
  border-radius: 10px;
  margin-bottom: 8px;
  text-align: center;
  font-weight: bold;
  color: #111827;
`;

// 요일 셀
export const WeekdayCell = styled.div`
  padding: 8px 0;
  background-color: #e5e7eb;
`;

// 달력 그리드
export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
  width: 100%;
  margin-top: 10px;
`;

// 각 날짜 버튼
export const DateCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

// 날짜 버튼 스타일
export const DateButton = styled.button`
  width: 100%;
  aspect-ratio: 1 / 1;
  border: 2px solid #d1d5db;
  border-radius: 10px;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  color: #111827;
  font-weight: bold;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fef08a;
  }

  &.today {
    background-color: #86efac;
    color: white;
  }

  &.attended {
    background-color: #c7e8c3; // 출석한 날에 대한 배경색
    color: white;
  }
`;

// 출석 마크 (도장)
export const AttendanceMark = styled.img`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 20px;
  height: 20px;
`;
