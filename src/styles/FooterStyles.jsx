import { styled } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 393px;
  z-index: 1000;
  overflow: hidden;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: transparent;  /* 반투명 배경 제거 */
`;

export const MenuButton = styled.div`
  position: fixed;
  bottom: 35px;
  left: 50%;
  transform: translateX(-50%);  /* 메뉴 버튼을 화면 가로 중앙에 배치 */
  cursor: pointer;
  z-index: 1;
`;

export const Menubar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px; /* 필요에 따라 높이 설정 */
`;

export const MenuBarImage = styled.img`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  z-index: 0;
`;

export const Home = styled.div`
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 9%;
  cursor: pointer;
`;

export const HomeText = styled.div`
  color: white;
  
  font-size: 13px;
  margin-top: 5px;
`;

export const Calendar = styled.div`
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 24%;
  cursor: pointer;
`;

export const CalendarText = styled.div`
  color: white;
  
  font-size: 13px;
  margin-top: 5px;
`;

export const Chart = styled.div`
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 62%;
  cursor: pointer;
`;

export const ChartText = styled.div`
  color: white;
  
  font-size: 13px;
  margin-top: 5px;
`;

export const Profile = styled.div`
  position: absolute;
  z-index: 1;
  top: 30%;
  left: 84%;
  cursor: pointer;
`;

export const ProfileText = styled.div`
  color: white;
  font-size: 13px;
  margin-top: 5px;
`;
