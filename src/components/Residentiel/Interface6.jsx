import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css'// Assurez-vous d'importer les styles
import NavBar from  '../NavBar';
import {calculateNewSpeed} from '../calculateSpeed';



const Interface6 = ({ accumulatedSpeed, setAccumulatedSpeed }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Residentiel/Interface5'); // Revenir à la page précédente
  };

  const goToInterface7 = (value) => {
    const updatedSpeed = calculateNewSpeed(accumulatedSpeed, value);
    setAccumulatedSpeed(updatedSpeed);
    navigate('/Residentiel/Interface7');  // Navigue vers l'interface 7
  };

  return (
    <div className="main-content">
      <div className="header">
        <NavBar progress={(accumulatedSpeed / 100) * 100} speed={accumulatedSpeed}/>
      </div>
      <div className="survey-content">
      <div className="go-back-text" onClick={handleBackClick}>❮Retour</div> 
        <h2 className="survey-title">À quelle fréquence votre famille regarde-t-elle la télévision ou des films en ligne?</h2>
        <p className="survey-description">(Netflix, Hulu, Amazon Prime, Roku, etc.)</p>
        <div className="survey-options">
          <button className="survey-btn" onClick={() => goToInterface7(1)}>Rarement</button>
          <button className="survey-btn" onClick={() => goToInterface7(2)}>Hebdomadairement</button>
          <button className="survey-btn" onClick={() => goToInterface7(3)}>Tous les jours</button>
        </div>
      </div>
    </div>
  );
}



export default Interface6;
