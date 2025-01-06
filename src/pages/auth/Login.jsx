import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as L from '../styles/LoginStyles';
import TextLogoBlack from '../assets/images/textlogoblack.png';
import ImageLogo from '../assets/images/logo.png';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        // 로그인 요청 (가정)
        try {
            const response = await axios.post('/api/login', { username, password });
            // 로그인 성공 시 처리
            console.log(response.data);
            navigate('/main'); // 메인페이지로 이동
        } catch (error) {
            console.error('로그인 실패:', error);
            // 에러 처리
        }
    };

    return (
        <L.Container>
            <L.img1 id="ImageLogo" src={ImageLogo} alt="Logo" />
            <L.img2 id="TextLogoBlack" src={TextLogoBlack} alt="Text Logo" />
            <L.Form onSubmit={handleLogin}>
                <L.InputLabel htmlFor="username">아이디</L.InputLabel>
                <L.Input 
                    type="text" 
                    id="username" 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    placeholder="아이디 입력" 
                />
                
                <L.InputLabel htmlFor="password">비밀번호</L.InputLabel>
                <L.Input 
                    type="password" 
                    id="password" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    placeholder="비밀번호 입력" 
                />
                
                <L.LoginButton type="submit">Login</L.LoginButton>
                <L.ForgotPassword>비밀번호를 잊어버리셨나요?</L.ForgotPassword>
            </L.Form>
        </L.Container>
    );
};

export default Login;
