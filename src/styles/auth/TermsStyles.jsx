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

    #TextLogoBlack {
      width: 200px;
      margin-top: 2px;
    }
  
    #ImageLogo {
      width: 120px;
      height: auto;
      margin-top: 30px;
      margin-bottom: 30px;
    }
`;

export const Header = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  f
`;

export const TermsSection = styled.div`
  margin-bottom: 20px;
`;

export const TermsItem = styled.div`
  margin-bottom: 15px;
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;

  input[type="checkbox"] {
    border-radius: 100%; /* 체크박스를 동그랗게 만듭니다 */
    margin-right: 10px;
  }
`;

export const TermsTitle = styled.h3`
  margin-left: 10px;
  font-size: 16px; /* 글씨 크기 줄임 */
`;


export const TermsContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  font-size: 12px; /* 글씨 크기 줄임 */
  color: #555;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 10px;
  background-color: #f9f9f9;
  width: 250px; /* 박스의 너비 줄임 */
  word-wrap: break-word;
`;

export const SubmitButton = styled.button`
  display: block;
  width: 270px; /* 버튼의 너비를 내용에 맞게 조정 */
  padding: 10px;
  background-color: ${(props) => (props.disabled ? '#ccc' : '#007bff')};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${(props) => (props.disabled ? '#ccc' : '#0056b3')};
  }
`;
