import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as S from "../styles/StartStyles";
import TextLogoBlack from '../assets/images/textlogoblack.png';
import ImageLogo from '../assets/images/logo.png';
import { Container, ImageWrapper, img1, img2 } from '../styles/StartStyles';

const Start = () => {
    const navigate = useNavigate();
    const [data, setData] = useState(null);

    useEffect(() => {
        // API 호출 예시 (필요한 경우)
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api.example.com/data');
                setData(response.data);
            } catch (error) {
                console.error("데이터를 가져오는 데 오류가 발생했습니다.", error);
            }
        };
        fetchData();
    }, []);

    const handleLogin = () => {
        // 로그인 버튼 클릭 시 처리
        navigate('/login'); // 로그인 페이지로 이동
    };

    const handleSignUp = () => {
        // 회원가입 버튼 클릭 시 처리
        navigate('/signup'); // 회원가입 페이지로 이동
    };

    return (
        <S.Container>
            <ImageWrapper><S.img1 id="ImageLogo" src={ImageLogo} /></ImageWrapper>
            
            <S.img2 id="TextLogoBlack" src={TextLogoBlack} />
            <S.Button onClick={handleLogin}>MATHQUEST 로그인</S.Button>
            <S.Button onClick={handleSignUp}>회원가입</S.Button>
            {data && <p>{JSON.stringify(data)}</p>} {/* 데이터가 있을 경우 표시 */}
        </S.Container>
    );
};

export default Start;
