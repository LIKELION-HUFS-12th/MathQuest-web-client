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
`;

export const MenuButton = styled.div`
  position: absolute;
  top: 13px;
  cursor: pointer;
  z-index: 1;
`;

export const Menubar = styled.div`
  padding: 0;
  position: relative;
  display: inline-block;
`;

export const Home = styled.div`
  position: absolute;
  z-index: 1;
  top: 39%;
  left: 10%;
  cursor: pointer;
`;

export const HomeText = styled.div`
  color: white;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
`;

export const Calendar = styled.div`
  position: absolute;
  z-index: 1;
  top: 39%;
  left: 25%;
  cursor: pointer;
`;

export const CalendarText = styled.div`
  color: white;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
`;

export const Chart = styled.div`
  position: absolute;
  z-index: 1;
  top: 39%;
  left: 59%;
  cursor: pointer;
`;

export const ChartText = styled.div`
  color: white;
  margin-top: 1px;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
`;

export const Profile = styled.div`
  position: absolute;
  z-index: 1;
  top: 39%;
  left: 82%;
  cursor: pointer;
`;

export const ProfileText = styled.div`
  color: white;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
`;
