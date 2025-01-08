import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as P from '../../styles/auth/ProfileStyles';
import CharacterLogo from '../../assets/images/characterLogo.png';
import Footer from '../../shared/components/Footer';
import Process from '../../assets/images/process.png';

const Profile = () => {
    const [profileData, setProfileData] = useState({
        name: '김멋사',
        email: 'hello@gmail.com',
        password: 'Hello1234!',
        school: '초등학교',
        year: '',
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setProfileData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
    <P.Container>
        <P.Header>
            <P.HeaderTitle>프로필 수정</P.HeaderTitle>
            <P.HeaderButton onClick={() => alert('프로필 수정 완료')}>완료</P.HeaderButton>
        </P.Header>
        <P.Logo>
            <img id="CharacterLogo" src={CharacterLogo}/>
        </P.Logo>
        <P.Content>
            <P.Name>
                <P.NameTitle>이름</P.NameTitle>
                <P.NameContent>
                    <input
                        name="name"
                        type="text"
                        value={profileData.name}
                        onChange={handleChange}
                    />
                </P.NameContent>
            </P.Name>
            <P.Email>
                <P.EmailTitle>이메일</P.EmailTitle>
                <P.EmailContent>
                    <input
                        name="email"
                        type="email"
                        value={profileData.email}
                        onChange={handleChange}
                    />
                </P.EmailContent>
            </P.Email>
            <P.Password>
                <P.PasswordTitle>비밀번호</P.PasswordTitle>
                <P.PasswordContent>
                    <input
                        name="password"
                        type="password"
                        value="{profileData.password"
                        onChange={handleChange}
                    />
                </P.PasswordContent>
            </P.Password>
            <P.School>
                <P.SchoolTitle>학교</P.SchoolTitle>
                <P.SchoolContent>
                    <input
                        name="school"
                        type="text"
                        value={profileData.school}
                        onChange={handleChange}
                    />
                </P.SchoolContent>
            </P.School>
            <P.Year>
                <P.YearTitle>학년 선택</P.YearTitle>
                <P.YearContent process={Process}>
                    <select
                        name="year"
                        value={profileData.year}
                        onChange={handleChange}
                    >
                        <option value="">학년을 선택하세요</option>
                        <option value="1학년">1학년</option>
                        <option value="2학년">2학년</option>
                        <option value="3학년">3학년</option>
                        <option value="4학년">4학년</option>
                        <option value="5학년">5학년</option>
                        <option value="6학년">6학년</option>
                    </select>
                </P.YearContent>
            </P.Year>
        </P.Content>
        <P.ResetButton onClick={() => alert('학습 진도 초기화 완료')}>학습 진도 초기화</P.ResetButton>
        <Footer/>
    </P.Container>
    );
};
export default Profile;
