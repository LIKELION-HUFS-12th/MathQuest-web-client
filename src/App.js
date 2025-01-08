import './App.css';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Main from './pages/Main';
import Landing from './pages/Landing';
import Footer from './shared/components/Footer';
import React from 'react';
import Start from './pages/Start'; // Start 컴포넌트 경로
import Login from './pages/auth/Login'; // 로그인 컴포넌트 경로
import HowToUse from './pages/HowToUse'; // 앱 사용 방법 컴포넌트 경로
import QuestHeader from './shared/components/QuestHeader';
import QuestE4 from './pages/quests/QuestE4';
import SignUp from './pages/auth/SignUp';
import Report from './pages/Report';
import Attendance from './pages/Attendance';
import QuestE5 from './pages/quests/QuestE5';
import QuestE6 from './pages/quests/QuestE6';
import QuestM1 from './pages/quests/QuestM1';
import QuestM2 from './pages/quests/QuestM2';
import QuestM3 from './pages/quests/QuestM3';
import QuestE4H from './pages/questsHard/QuestE4H';
import Profile from './pages/auth/Profile';

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
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/howtouse" element={<HowToUse />} />
        <Route path="/questHeader" element={<QuestHeader />} />
        <Route path="/questE4" element={<QuestE4 />} />
        <Route path="/questE5" element={<QuestE5/>}/>
        <Route path="/questE6" element={<QuestE6/>}/>
        <Route path="/questM1" element={<QuestM1/>}/>
        <Route path="/questM2" element={<QuestM2/>}/>
        <Route path="/questM3" element={<QuestM3/>}/>
        <Route path="/questE4H" element={<QuestE4H/>}/>
        <Route path="/report" element={<Report />} />
        <Route path="/attendance" element={<Attendance />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
