import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css'// Assurez-vous d'importer les styles
import NavBar from  '../NavBar';
import {calculateNewSpeed} from '../calculateSpeed';



function Interface5({ accumulatedSpeed, setAccumulatedSpeed }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Residentiel/Interface4'); // Revenir à la page précédente
  };

  const goToInterface6 = (value) => {
    const updatedSpeed = calculateNewSpeed(accumulatedSpeed, value);
    setAccumulatedSpeed(updatedSpeed);
    navigate('/Residentiel/Interface6');  // Navigue vers l'interface 6
  };

  return (
    <div className="main-content">
      <div className="header">
        <NavBar progress={(accumulatedSpeed / 100) * 100} speed={accumulatedSpeed}/>
      </div>
      <div className="survey-content">
      <div className="go-back-text" onClick={handleBackClick}>❮Retour</div>        <h2 className="survey-title">À quelle fréquence votre famille joue-t-elle à des jeux vidéo en ligne?</h2>
        <p className="survey-description">(Call of Duty, Battlefield, World of Warcraft, League of Legends, etc.)</p>
        <div className="survey-options">
          <button className="survey-btn" onClick={() => goToInterface6(1)}>Rarement</button>
          <button className="survey-btn" onClick={() => goToInterface6(2)}>Hebdomadairement</button>
          <button className="survey-btn" onClick={() => goToInterface6(3)}>Tous les jours</button>
        </div>
      </div>
    </div>
  );
}


export default Interface5;
