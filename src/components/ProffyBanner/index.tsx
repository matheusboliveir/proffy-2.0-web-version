import React from 'react';

import logoImg from '../../assets/images/logo.svg';

import './styles.css';

function ProffyBanner() {

  return (
    <div className="bannerContainer">
      <div className="containerText">
        <img src={logoImg} alt="Proffy" />
        <h1>Sua plataforma de estudos online.</h1>
      </div>
    </div>
  );

}

export default ProffyBanner;
