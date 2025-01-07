import { styled } from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  width: 393px;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
  overflow-y: auto;
  background-color: #f5f5f5;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const MainContent = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const TextLogo = styled.div`
  padding: 0;
  margin-top: 20px;
  margin-left: -180px;
  img {
    width: 135px;
  }
`;

export const Goal = styled.div``;

export const GoalBack = styled.div`
  padding: 0;
  margin-top: 10px;
  img {
    width: 400px;
    height: 200px;
  }
  position: relative;
  display: inline-block;
`;

export const GoalText = styled.div`
  position: absolute;
  color: white;
  z-index: 1;
  top: 20%;
  left: 15%;
  font-size: 1.1rem;
  font-weight: bold;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
`;

export const GoalButton = styled.div`
  padding: 0;
  position: absolute;
  z-index: 2;
  top: 45%;
  left: 15%;
`;

export const GoalButtonBack = styled.div`
  width: 50px;
  img {
    width: 170px;
    height: 40px;
  }
`;

export const GoalButtonText = styled.div`
  position: absolute;
  z-index: 2;
  top: 30%;
  left: 10%;
  width: 250%;
  color: #376aed;
  font-weight: bold;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
`;

export const GoalButtonArrow = styled.div`
  position: absolute;
  z-index: 2;
  top: 15%;
  left: 255%;
  img {
    width: 20px;
    height: 30px;
    transform: scaleX(-1);
    color: #376aed;
  }
`;

export const Process = styled.div`
  background-color: #e9e6e6;
  width: 340px;
  height: 40px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  margin-top: -20px;
  margin-left: 30px;
`;

export const ButtonProcess = styled.div`
  font-weight: bold;
  margin-left: 8%;
  color: #494848;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
`;

export const ProcessTriangle = styled.div`
  margin-left: 48%;
`;

export const ProcessText = styled.div`
  margin-top: 8%;
  font-weight: bold;
  font-size: 1.3rem;
  margin-right: 65%;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
`;

export const Process4 = styled.div`
  margin-top: 5%;
  cursor: pointer;
`;

export const Process4Back = styled.div`
  img {
    width: 400px;
    height: 140px;
  }
  position: relative;
  display: inline-block;
`;

export const Process4Icon = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
  position: absolute;
  z-index: 1;
  top: 22%;
  left: 15%;
`;

export const Process4Icon2 = styled.div`
  img {
    width: 30px;
    height: 30px;
  }
  position: absolute;
  z-index: 2;
  top: 28%;
  left: 17%;
`;

export const Process4Information = styled.div`
  position: absolute;
  z-index: 1;
  top: 21%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const Process4Quest = styled.div`
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const Process5 = styled.div`
  margin-top: -8%;
  cursor: pointer;
`;

export const Process5Back = styled.div`
  img {
    width: 400px;
    height: 140px;
  }
  position: relative;
  display: inline-block;
`;

export const Process5Icon = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
  position: absolute;
  z-index: 1;
  top: 22%;
  left: 15%;
`;

export const Process5Icon2 = styled.div`
  img {
    width: 36px;
    height: 40px;
  }
  position: absolute;
  z-index: 2;
  top: 25%;
  left: 16.5%;
`;

export const Process5Information = styled.div`
  position: absolute;
  z-index: 1;
  top: 21%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const Process5Quest = styled.div`
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const Process6 = styled.div`
  margin-top: -8%;
  cursor: pointer;
`;

export const Process6Back = styled.div`
  img {
    width: 400px;
    height: 140px;
  }
  position: relative;
  display: inline-block;
`;

export const Process6Icon = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
  position: absolute;
  z-index: 1;
  top: 22%;
  left: 15%;
`;

export const Process6Icon2 = styled.div`
  img {
    width: 35px;
    height: 35px;
  }
  position: absolute;
  z-index: 2;
  top: 27%;
  left: 17%;
`;

export const Process6Information = styled.div`
  position: absolute;
  z-index: 1;
  top: 21%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const Process6Quest = styled.div`
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const ProcessM1 = styled.div`
  margin-top: -8%;
  cursor: pointer;
`;

export const ProcessM1Back = styled.div`
  img {
    width: 400px;
    height: 140px;
  }
  position: relative;
  display: inline-block;
`;

export const ProcessM1Icon = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
  position: absolute;
  z-index: 1;
  top: 22%;
  left: 15%;
`;

export const ProcessM1Icon2 = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
  position: absolute;
  z-index: 2;
  top: 25%;
  left: 16%;
`;

export const ProcessM1Information = styled.div`
  position: absolute;
  z-index: 1;
  top: 21%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const ProcessM1Quest = styled.div`
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const ProcessM2 = styled.div`
  margin-top: -8%;
  cursor: pointer;
`;

export const ProcessM2Back = styled.div`
  img {
    width: 400px;
    height: 140px;
  }
  position: relative;
  display: inline-block;
`;

export const ProcessM2Icon = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
  position: absolute;
  z-index: 1;
  top: 22%;
  left: 15%;
`;

export const ProcessM2Icon2 = styled.div`
  img {
    width: 35px;
    height: 35px;
  }
  position: absolute;
  z-index: 2;
  top: 27%;
  left: 17%;
`;

export const ProcessM2Information = styled.div`
  position: absolute;
  z-index: 1;
  top: 21%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const ProcessM2Quest = styled.div`
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const ProcessM3 = styled.div`
  margin-top: -8%;
  margin-bottom: 27%;
  cursor: pointer;
`;

export const ProcessM3Back = styled.div`
  img {
    width: 400px;
    height: 140px;
  }
  position: relative;
  display: inline-block;
`;

export const ProcessM3Icon = styled.div`
  img {
    width: 50px;
    height: 50px;
  }
  position: absolute;
  z-index: 1;
  top: 22%;
  left: 15%;
`;

export const ProcessM3Icon2 = styled.div`
  img {
    width: 40px;
    height: 40px;
  }
  position: absolute;
  z-index: 2;
  top: 25%;
  left: 16%;
`;

export const ProcessM3Information = styled.div`
  position: absolute;
  z-index: 1;
  top: 21%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const ProcessM3Quest = styled.div`
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 32%;
  color: white;
  font-weight: bold;
`;

export const FooterContainer = styled.div``;