import { styled } from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  margin-top: 40px;
  width: 393px;
  height: auto;
  overflow: hidden;
  padding: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1000;
`;

export const Close = styled.div`
  margin-right: 75%;
  cursor: pointer;
`;
