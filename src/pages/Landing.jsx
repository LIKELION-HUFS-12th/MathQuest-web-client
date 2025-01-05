import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as L from '../styles/LandingStyles';
import ImageLogo from '../assets/images/logo.png';

const Landing = () => {
  return (
    <L.Container>
      <L.img id="ImageLogo" src={ImageLogo} />
    </L.Container>
  );
};

export default Landing;
