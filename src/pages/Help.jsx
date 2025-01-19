import React from "react";
import { useNavigate } from "react-router-dom";
import { 
  Container, 
  HeaderWrapper,
  Header, 
  SearchBar, 
  SearchInput, 
  Categories, 
  CategoryButton, 
  FAQSection, 
  Question, 
  Answer 
} from "../styles/HelpStyles";

const Help = () => {
  const navigate = useNavigate(); // useNavigate 초기화

  const faqs = [
    {
      question: "계정을 어떻게 생성하나요?",
      answer: "MATHQUEST 앱을 열고 안내를 따라 계정을 생성하세요. 계정 생성 및 유지에는 비용이 들지 않습니다.",
      isOpen: true,
    },
    {
      question: "로그아웃을 하면 기록이 사라지나요?",
      answer: "설정에서 결제 옵션을 선택하고, 계정을 연결하기 위한 지침을 따르세요.",
      isOpen: false,
    },
    {
      question: "오답 문제를 다시 풀고 싶어요.",
      answer: "주식 시장은 평일 오전 9시 30분(EST)에 개장합니다.",
      isOpen: false,
    },
    {
      question: "회원탈퇴를 진행하고 싶어요.",
      answer: "아니요, 주식 시장은 주말에 열리지 않습니다.",
      isOpen: false,
    },
  ];

  const [faqData, setFaqData] = React.useState(faqs);

  const toggleAnswer = (index) => {
    setFaqData((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : { ...faq, isOpen: false }
      )
    );
  };

  return (
    <Container>
    <HeaderWrapper>
      <Header>
        <button onClick={() => (navigate("/option"))}>
          &larr;
        </button>
        <h1>도움말</h1>
      </Header>
      <SearchBar>
        <SearchInput type="text" placeholder="키워드를 입력하세요" />
        <button>🔍</button>
      </SearchBar>
      <Categories>
        <CategoryButton color="#cce5ff">시작 방법</CategoryButton>
        <CategoryButton color="#e6ffcc">출석체크</CategoryButton>
        <CategoryButton color="#ffcccc">오답하기</CategoryButton>
      </Categories>
    </HeaderWrapper>
      <FAQSection>
        {faqData.map((faq, index) => (
          <div key={index}>
            <Question onClick={() => toggleAnswer(index)}>
              {faq.question}
              <span>{faq.isOpen ? "-" : "+"}</span>
            </Question>
            {faq.isOpen && <Answer>{faq.answer}</Answer>}
          </div>
        ))}
      </FAQSection>
    </Container>
  );
};

export default Help;
