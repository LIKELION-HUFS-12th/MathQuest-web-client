import { styled } from 'styled-components';

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

export const TextLogo = styled.div`
  padding: 0;
  margin-top: -300px;
  margin-left: -180px;
  img {
    width: 135px;
  }
`;

export const Goal = styled.div``;

export const GoalBack = styled.div`
  padding: 0;
  margin-top: 30px;
  img {
    width: 400px;
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
`;

export const ButtonProcess = styled.div`
  font-weight: bold;
  margin-left: 8%;
  color: #494848;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
`;

export const ProcessText = styled.div`
  margin-top: 15%;
  font-weight: bold;
  font-size: 1.3rem;
  margin-right: 50%;
  font-family: 'HakgyoansimGeurimilgiTTF-R';
`;

export const Process4 = styled.div`
  margin-top: 5%;
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
`;

export const Process4Quest = styled.div`
  position: absolute;
  z-index: 1;
  top: 40%;
  left: 32%;
  color: white;
`;
