import styled from 'styled-components';

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



  img {
    max-width: 150px;
    margin-bottom: 20px;
  }

  #ImageLogo {
    width: 100px;
  }

  #TextLogoBlack {
    width: 180px;
  }

  h1 {
    font-size: 1.5em;
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    width: 100%;
  }
`;

export const Term = styled.div`
  margin-bottom: 15px;

  label {
    display: flex;
    align-items: center;
    font-size: 0.9em;
    line-height: 1.4;
  }

  input[type='checkbox'] {
    margin-right: 10px;
  }
`;

export const SubmitButton = styled.button`
  display: block;
  width: 100%;
  padding: 10px 20px;
  font-size: 1em;
  color: #fff;
  background-color: ${(props) => (props.disabled ? '#aaa' : '#007bff')};
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  margin-top: 20px;
`;
