import React from 'react';
import '../css/login.css'
import kommunemail from '../images/kommunemail.jpg'
import ungsys from '../images/ungsyslogo.png'
import aula from '../images/aula.png'

function login() {
  return (
    <div className="login" aria-label="Login-side">
      <h2 className='page-title'>Vælg portal</h2>
      <div className='login-content' aria-label="Login-indholdssektion">
        <div className='login-item' aria-label="Kommunal email">
          <div className='login-img-container'>
            <img className="kommune" src={kommunemail} alt="Kommunal email billede"/>
          </div>
          <h5>Kommunal email</h5>
        </div>
        <div className='login-item' aria-label="UNGSYS">
          <div className='login-img-container'>
            <img className="ungsys" src={ungsys} alt="UNGSYS billede"/>
          </div>
          <h5>UNGSYS</h5>
        </div>
        <div className='login-item' aria-label="AULA">
          <div className='login-img-container'>
            <img className="aula" src={aula} alt="AULA billede"/>
          </div>
          <h5>AULA</h5>
        </div>
      </div>
    </div>
  );
}

export default login;
