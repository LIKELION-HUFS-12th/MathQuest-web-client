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

export const Menubar = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px; /* 필요에 따라 높이 설정 */
`;
export const Home = styled.div`
  position: absolute;
  z-index: 1;
  top: 18%;
  left: 13%;
  img {
  width: 28px;
  height: 28px;
  }
  cursor: pointer;
`;

export const HomeText = styled.div`
  color: white;
  font-size: 13px;
  margin-top: 9px;
`;

export const Learn = styled.div`
  position: absolute;
  z-index: 1;
  top: 14%;
  left: 33%;
  img {
  height: 40px;
  width: 35px;
  }
  cursor: pointer;
`;

export const LearnText = styled.div`
  color: white;
  font-size: 13px;
  margin-top: 3px;
`;

export const Pencil = styled.div`
  position: absolute;
  z-index: 1;
  top: 20%;
  left: 56%;
  img {
  height: 24px;
  }
  cursor: pointer;
`;

export const PencilText = styled.div`
  color: white;
  font-size: 13px;
  margin-top: 12px;
`;

export const Profile = styled.div`
  position: absolute;
  z-index: 1;
  top: 17%;
  left: 79%;
  img {
  height: 29px;
  }
  cursor: pointer;
`;

export const ProfileText = styled.div`
  color: white;
  font-size: 13px;
  margin-top: 11px;
`;
