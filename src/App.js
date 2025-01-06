import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Main from './pages/Main';
import Landing from './pages/Landing';
import Footer from './components/Footer';
import React from 'react';
import Start from './pages/Start'; // Start 컴포넌트 경로
import Login from './pages/auth/Login'; // 로그인 컴포넌트 경로
import HowToUse from './pages/HowToUse'; // 앱 사용 방법 컴포넌트 경로
import QuestHeader from './components/QuestHeader';
import QuestE4 from './pages/quests/QuestE4';
import SignUp from './pages/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/main" element={<Main />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/start" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/howtouse" element={<HowToUse />} />
        <Route path="/questHeader" element={<QuestHeader />} />
        <Route path="/questE4" element={<QuestE4 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
