import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as QPH from '../../styles/QuestPageHeaderStyles';
import Close from '../../assets/images/close.png';

const QuestPageHeader = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  return (
    <QPH.Container>
      <QPH.Close onClick={handleClose}>
        <img id="Close" src={Close} />
      </QPH.Close>
    </QPH.Container>
  );
};
export default QuestPageHeader;
