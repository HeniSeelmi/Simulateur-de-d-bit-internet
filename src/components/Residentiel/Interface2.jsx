import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css'// Assurez-vous d'importer les styles
import NavBar from  '../NavBar';
import {calculateNewSpeed} from '../calculateSpeed';



function Interface2({ accumulatedSpeed, setAccumulatedSpeed }) {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/Residentiel/Interface1'); 
  };

  const goToInterface3 = (value) => {  // Navigue vers l'interface 3
    const updatedSpeed = calculateNewSpeed(accumulatedSpeed, value);
    setAccumulatedSpeed(updatedSpeed);
    navigate('/Residentiel/Interface3');
  };

  return (
    <div className="main-content">  {/* Utilise les mêmes classes que Interface1 */}
      <div className="header">
        <NavBar progress={(accumulatedSpeed / 100) * 100} speed={accumulatedSpeed}/>
      </div>
      <div className="survey-content">
        <div className="go-back-text" onClick={handleBackClick}>❮ Retour</div> {/* Lien pour revenir en arrière */}
        <h2>Combien de personnes utilisent Internet chez vous?</h2>
        <div className="survey-options">
          <button className="survey-btn" onClick={() => goToInterface3(1)}>1-2</button>
          <button className="survey-btn" onClick={() => goToInterface3(2)}>3-4</button>
          <button className="survey-btn" onClick={() => goToInterface3(3)}>4+</button>
        </div>
      </div>
    </div>
  );
}



export default Interface2;
