import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css'// Assurez-vous d'importer les styles
import NavBar from  '../NavBar';
import {calculateNewSpeed} from '../calculateSpeed';



const Interface7 = ({ accumulatedSpeed, setAccumulatedSpeed }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Residentiel/Interface6'); // Revenir à la page précédente
  };

  const goToInterface8 = (value) => {
    const updatedSpeed = calculateNewSpeed(accumulatedSpeed, value);
    setAccumulatedSpeed(updatedSpeed);
    navigate('/Residentiel/Interface8');  // Navigue vers l'interface 8
  };

  return (
    <div className="main-content">
      <div className="header">
        <NavBar progress={(accumulatedSpeed / 100) * 100} speed={accumulatedSpeed}/>
      </div>
      <div className="survey-content">
        <div className="go-back-text" onClick={handleBackClick}>❮Retour</div>
        <h2 className="survey-title">À quelle fréquence votre famille télécharge-t-elle des fichiers volumineux?</h2>
        <p className="survey-description">(Torrents, databases, etc.)</p>
        <div className="survey-options">
          <button className="survey-btn" onClick={() => goToInterface8(1)}>Rarement</button>
          <button className="survey-btn" onClick={() => goToInterface8(2)}>Hebdomadairement</button>
          <button className="survey-btn" onClick={() => goToInterface8(3)}>Tous les jours</button>
        </div>
      </div>
    </div>
  );
}



export default Interface7;
