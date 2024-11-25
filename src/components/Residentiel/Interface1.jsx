import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo1 from '../../assets/img.PNG'; // Import du deuxième logo
import '../../styles.css'; // Assurez-vous d'importer les styles
import NavBar from  '../NavBar';
import {calculateNewSpeed} from '../calculateSpeed';

function Interface1({ accumulatedSpeed, setAccumulatedSpeed }) {
  const navigate = useNavigate();

  const goToInterface2 = (value) => {
    const updatedSpeed = calculateNewSpeed(accumulatedSpeed, value);
    setAccumulatedSpeed(updatedSpeed); // Mise à jour du state avec la nouvelle vitesse
    navigate('/Residentiel/Interface2'); 
  };

  return (
    <div className="main-content">
      <div className="header">
        <NavBar  progress={(accumulatedSpeed / 100) * 100} speed={accumulatedSpeed}/>
      </div>
      <div className="survey-content">
        <h1>Combien d'appareils dans votre maison se connectent à Internet?</h1>
        <p className="survey-description">
          (Ordinateurs, smartphones, tablettes, consoles de jeu, téléviseurs intelligents, appareils domestiques intelligents, etc.)
        </p>
        <div className="icons-container">
          <img src={logo1} alt="Connected Devices Icons" className="survey-img" />
        </div>
        <div className="survey-options">
          <button className="survey-btn" onClick={() => goToInterface2(0.5)}>1-3</button>
          <button className="survey-btn" onClick={() => goToInterface2(1)}>4-7</button>
          <button className="survey-btn" onClick={() => goToInterface2(1.5)}>8-10</button>
          <button className="survey-btn" onClick={() => goToInterface2(2)}>10+</button>
        </div>
      </div>
    </div>
  );
}

export default Interface1;
