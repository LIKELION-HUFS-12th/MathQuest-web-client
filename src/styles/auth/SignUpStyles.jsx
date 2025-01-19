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
    margin-bottom: 30px;
  }

  #ImageLogo {
    width: 150px;
    height: auto;
    margin-top: 70px;
  }

`;


export const Illustration = styled.div`
  width: 100%;
  height: 200px;
  background: url('/path/to/illustration.png') no-repeat center;
  background-size: contain;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-top: 5px;
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: #777;
  margin-bottom: 40px;
`;

export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 80%;
  max-width: 400px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 15px;
  padding-left: 20px; /* 왼쪽 아이콘 여백 */
  padding-right: 90px; /* 오른쪽 버튼/아이콘 여백 */
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 60%;
  max-width: 400px;
  padding: 10px 15px;
  background-color: #000;
  margin-top: 30px;
  color: #fff;
  font-size: 16px;
  border: none;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const CheckButton = styled.button`
  position: absolute;
  right: 10px; /* 인풋박스 내부의 오른쪽 가장자리 */
  top: 50%; /* 수직 가운데 정렬 */
  transform: translateY(-50%);
  background-color: #ddd;
  color: #FF3951;
  font-size: 14px;
  border: 0.5px solid #FF3951;
  border-radius: 10px;
  padding: 5px 10px;
  cursor: pointer;
  background-color: transparent;

  &:hover {
    background-color: #FF3951;
    color: #000000;
  }
`;

export const NameIcon = styled.img`
  position: absolute;
  right: 15px; /* 인풋박스 내부의 왼쪽 가장자리 */
  top: 50%; /* 수직 가운데 정렬 */
  transform: translateY(-50%);
  width: 19px;
  height: 20px;
`;

export const PasswordEyeIcon = styled.img`
  position: absolute;
  right: 10px; /* 인풋박스 내부의 오른쪽 가장자리 */
  top: 50%; /* 수직 가운데 정렬 */
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  cursor: pointer;
`;


export const LinkContainer = styled.div`
  margin-top: 20px;
  text-align: center;
  margin-bottom: 30px;

  a {
    color: #FF3951; /* 링크 색상 */
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #0056b3; /* 호버 시 색상 */
    }
  }
`;

export const Text = styled.span`
  font-size: 14px;
  color: #555;
`;

export const Link = styled.a`
  font-size: 14px;
  color: #FF3951;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px; /* 상단 간격 조정 */
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 16px; /* 크기 조정 */
  height: 16px; /* 크기 조정 */
  margin-right: 8px; /* 텍스트와 간격 추가 */
  cursor: pointer;
  accent-color: #007bff; /* 체크박스 색상 설정 (브라우저 호환) */
`;

export const AgreementText = styled.span`
  font-size: 14px;
  color: #333;

  a {
    color: #FF3951; /* 링크 색상 */
    text-decoration: underline;
    cursor: pointer;

    &:hover {
      color: #0056b3; /* 호버 시 색상 */
    }
  }
`;

export const Message = styled.p`
  font-size: 0.9rem;
  color: ${(props) => (props.error ? 'red' : 'green')};
  margin-top: 0.5rem;
`;