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
  padding: 0;
  position: relative;
  display: inline-block;
`;

export const Home = styled.div`
  position: absolute;
  z-index: 1;
  top: 18%;
  left: 14%;
  img {
  width: 32px;
  height: 30px;
  }
  cursor: pointer;
`;

export const HomeText = styled.div`
  color: white;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
  margin-top: 9px;
`;

export const Learn = styled.div`
  position: absolute;
  z-index: 1;
  top: 14%;
  left: 32%;
  img {
  height: 40px;
  width: 35px;
  }
  cursor: pointer;
`;

export const LearnText = styled.div`
  color: white;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
  margin-top: 3px;
`;

export const Pencil = styled.div`
  position: absolute;
  z-index: 1;
  top: 20%;
  left: 54%;
  img {
  height: 24px;
  }
  cursor: pointer;
`;

export const PencilText = styled.div`
  color: white;
  margin-top: -5px;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
  margin-top: 12px;
`;

export const Profile = styled.div`
  position: absolute;
  z-index: 1;
  top: 17%;
  left: 77%;
  img {
  height: 29px;
  }
  cursor: pointer;
`;

export const ProfileText = styled.div`
  color: white;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
  margin-top: 11px;
`;
