import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  Logo,
  ContactSection,
  ContactInfo,
  DeveloperList,
  DeveloperItem,
  DeveloperImage,
  DeveloperRole,
  DeveloperName,
} from '../styles/IntroduceStyles';
import LeeYouJin from '../assets/images/leeyoujin.png';
import ParkEunjin from '../assets/images/parkeunjin.png';
import KimJinSeon from '../assets/images/kimjinseon.png';
import Kimdooyoung from '../assets/images/kimdooyoung.png';
import ImageLogo from '../assets/images/logo.png';
import TextLogoBlack from '../assets/images/textlogoblack.png';

const Introduce = () => {
    const developers = [
      { role: 'Frontend Developer', name: 'Lee Youjin', img: LeeYouJin },
      { role: 'Frontend Developer', name: 'Kim Jinseon', img: KimJinSeon },
      { role: 'Backend Developer', name: 'Kim Dooyoung', img: Kimdooyoung },
      { role: 'Backend Developer', name: 'Park Eunjin', img: ParkEunjin },
    ];
  
    return (
      <Container>
        <Logo src={ImageLogo} alt="MathQuest Logo" />
        <ContactSection>
          <ContactInfo>Contact: mathquest@gmail.com</ContactInfo>
        </ContactSection>
        <DeveloperList>
          {developers.map((dev, index) => (
            <DeveloperItem key={index}>
              <DeveloperImage src={dev.img} alt={dev.name} />
              <DeveloperRole>{dev.role}</DeveloperRole>
              <DeveloperName>{dev.name}</DeveloperName>
            </DeveloperItem>
          ))}
        </DeveloperList>
      </Container>
    );
  };
  
  export default Introduce;