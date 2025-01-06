import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as QH from '../../styles/quests/QuestHeaderStyles';
import LeftArrow from '../../assets/images/leftarrow.png';

const QuestHeader = () => {
  const navigate = useNavigate();

  const handleMain = () => {
    navigate('/main');
  };

  return (
    <QH.Container>
      <QH.LeftArrow onClick={handleMain}>
        <img id="LeftArrow" src={LeftArrow} />
      </QH.LeftArrow>
    </QH.Container>
  );
};
export default QuestHeader;
