import './App.css';
import React from 'react';
import { BrowserRouter, Router, Route, Routes} from 'react-router-dom';
import Main from './pages/Main';
import Landing from './pages/Landing';
import Start from './pages/Start'; // Start 컴포넌트 경로
import Login from './pages/Login'; // 로그인 컴포넌트 경로
import HowToUse from './pages/HowToUse'; // 앱 사용 방법 컴포넌트 경로

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = "/" element={<Landing />} />
        <Route path = "/main" element={<Main />} />
        <Route path = "/start" element={<Start />} />
        <Route path="/login" element={<Login />} />
        <Route path="/howtouse" element={<HowToUse />} />
        {/* 추가적인 라우트가 필요하면 여기에 작성 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

