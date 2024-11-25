import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css'// Assurez-vous d'importer les styles
import NavBar from  '../NavBar';
import {calculateNewSpeed} from '../calculateSpeed';



function Interface4({ accumulatedSpeed, setAccumulatedSpeed }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Residentiel/Interface3'); // Revenir à la page précédente
  };

  const goToInterface5 = (value) => {
    const updatedSpeed = calculateNewSpeed(accumulatedSpeed, value);
    setAccumulatedSpeed(updatedSpeed);
    navigate('/Residentiel/Interface5');  // Navigue vers l'interface 5
  };

  return (
    <div className="main-content">
      <div className="header">
        <NavBar progress={(accumulatedSpeed / 100) * 100} speed={accumulatedSpeed}/>
      </div>
      <div className="survey-content">
        <div className="go-back-text" onClick={handleBackClick}>❮Retour</div>
        <h2 className="survey-title">À quelle fréquence votre famille diffuse-t-elle de l'audio?</h2>
        <p className="survey-description">(Spotify, Pandora, Amazon Echo or Alexa, Google Home, etc.)</p>
        <div className="survey-options">
          <button className="survey-btn" onClick={() => goToInterface5(1)}>Rarement</button>
          <button className="survey-btn" onClick={() => goToInterface5(2)}>Hebdomadairement</button>
          <button className="survey-btn" onClick={() => goToInterface5(3)}>Tous les jours</button>
        </div>
      </div>
    </div>
  );
}



export default Interface4;
