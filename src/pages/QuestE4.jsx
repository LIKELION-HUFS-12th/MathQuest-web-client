import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as QE4 from '../styles/QuestE4Styles';
import QuestHeader from '../components/QuestHeader';
import Rectangle5 from '../assets/images/rectangle5.png';
import HeadPhone from '../assets/images/headphone.png';

const QuestE4 = () => {
  return (
    <QE4.Container>
      <QuestHeader />
      <QE4.Profile>
        <QE4.Photo></QE4.Photo>
      </QE4.Profile>
    </QE4.Container>
  );
};
export default QuestE4;
