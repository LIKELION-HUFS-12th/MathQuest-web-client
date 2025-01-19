
import styled from "styled-components";

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

export const HeaderWrapper = styled.div`
  position: fixed;
  top: 15px;
  
  width: 100%;
  max-width: 393px;
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  z-index: 1000; /* 고정 요소가 다른 요소보다 위에 오도록 설정 */
  border-bottom: 1px solid #ddd;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center; /* 왼쪽 정렬 */
  margin-bottom: 50px;
  position: relative; /* 위치 지정 */
  width: 100%;

  button {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    position: absolute; /* 왼쪽 상단 고정 */
    left: 4%;
    top: 40%;
    transform: translateY(-50%);
    padding: 0 10px;
  }

  h1 {
    font-size: 1.5rem;
    color: #333;
    margin: 0 auto; /* 중앙 정렬 */
  }
`;


export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  
  button {
    background: none;
    border: none;
    font-size: 1.5rem;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
`;

export const Categories = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  width: 350px;
  height:50px;
  padding:10px;

`;

export const CategoryButton = styled.button`
  flex: 1;
  background-color: ${(props) => props.color};
  border: none;
  padding: 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 0.9rem;
  font-weight: bold;
  cursor: pointer;
`;

export const FAQSection = styled.div`
  background-color: #fff;
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 330px;
`;

export const Question = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  border-bottom: 1px solid #eee;

  span {
    font-size: 1.2rem;
    color: #999;
  }
`;

export const Answer = styled.div`
  padding: 10px 0;
  font-size: 0.9rem;
  color: #666;
`;
