import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css'// Assurez-vous d'importer les styles
import NavBar from  '../NavBar';
import {calculateNewSpeed} from '../calculateSpeed';



function Interface3({ accumulatedSpeed, setAccumulatedSpeed }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Residentiel/Interface2'); // Revenir à la page précédente
  };

  const goToInterface4 = (value) => {
    const updatedSpeed = calculateNewSpeed(accumulatedSpeed, value);
    setAccumulatedSpeed(updatedSpeed);
    navigate('/Residentiel/Interface4');  // Navigue vers l'interface 4
  };

  return (
    <div className="main-content">
      <div className="header">
        <NavBar progress={(accumulatedSpeed / 100) * 100} speed={accumulatedSpeed} />
      </div>
      <div className="survey-content">
        <div className="go-back-text" onClick={handleBackClick}>❮Retour</div>
        <h2 className="survey-title">À quelle fréquence votre famille utilise-t-elle le chat vidéo ou fait-elle des appels téléphoniques sur Internet?</h2>
        <p className="survey-description">(Skype, Messenger, Google Hangouts, FaceTime, etc.)</p>
        <div className="survey-options">
          <button className="survey-btn" onClick={() => goToInterface4(1)}>Rarement</button>
          <button className="survey-btn" onClick={() => goToInterface4(2)}>Hebdomadairement</button>
          <button className="survey-btn" onClick={() => goToInterface4(3)}>Tous les jours</button>
        </div>
      </div>
    </div>
  );
}



export default Interface3;
