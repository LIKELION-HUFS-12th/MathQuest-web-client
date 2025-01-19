import styled from 'styled-components';

export const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: #f5f5f5;
  padding: 20px;
  box-sizing: border-box;
  text-align: center;
`;

export const Image = styled.img`
  width: 60%;
  max-width: 300px;
  margin-top: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin: 20px 0 10px;
`;

export const Description = styled.p`
  font-size: 1rem;
  color: #666;
  margin: 0 0 20px;
`;

export const Indicator = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

export const Circle = styled.span`
  width: 10px;
  height: 10px;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? '#376AED' : '#ccc')};
  border-radius: 50%;
  transition: background-color 0.3s;
`;

export const Button = styled.button`
  background-color: ${(props) => (props.primary ? '#376AED' : '#fff')};
  color: ${(props) => (props.primary ? '#fff' : '#376AED')};
  padding: 15px 20px;
  border: ${(props) => (props.primary ? 'none' : '1px solid #376AED')};
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  width: 150px;
  margin: 10px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => (props.primary ? '#2e56b8' : '#f0f0f0')};
  }
`;

export const ArrowButton = styled(Button)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
