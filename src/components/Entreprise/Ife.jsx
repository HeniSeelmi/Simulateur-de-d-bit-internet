import React , {useContext,useState} from 'react'
import { useNavigate } from 'react-router-dom';
import emp from '../../assets/emp.PNG'
import '../../styles.css';  // Assurez-vous d'importer les styles
import NavBar from  '../NavBar';
import { EmployeeContext } from '../EmployeeContext';  // Importe le contexte


const Ife = () => {
  const navigate = useNavigate();
  const { employeeCount, setEmployeeCount } = useContext(EmployeeContext);  // Utilise le contexte
  const [localEmployeeCount, setLocalEmployeeCount] = useState(employeeCount);  // Local pour les boutons

  const goToInterface2 = () => {
    setEmployeeCount(localEmployeeCount);  // Fixe la valeur dans le contexte avant de naviguer
      navigate('/Entreprise/Ife2');  // Navigue vers l'interface 2
  };

  const incrementCount = () => {
      setLocalEmployeeCount(localEmployeeCount + 1);
  };

  const decrementCount = () => {
      if (localEmployeeCount > 0) {
          setLocalEmployeeCount(localEmployeeCount - 1);
      }
  };

  return (
    <div className="main-content">
      <div className="header">
        <NavBar progress={10} speed={0}/>
      </div>
      {/* Intégration du composant InfoTooltip sous la NavBar */}
     
      <div className="survey-content">
      <div className="info-tooltip-section">
        <InfoTooltip />
      </div>
        <h2 className="survey-title">Combien de vos employés peuvent être sur Internet en même temps pendant les heures d'utilisation maximale d'Internet?</h2>
        <p className="survey-description">Employés utilisant des périphériques tels que des ordinateurs de bureau, des ordinateurs portables, des tablettes / smartphones et des téléviseurs</p>
        <div className="employees-container">
            <img src={emp} alt="" />
        </div>
        <div className="employee-counter">
          <button className="counter-btn" onClick={decrementCount}>-</button>
          <span className="employee-count">{localEmployeeCount}</span>
          <button className="counter-btn" onClick={incrementCount}>+</button>
        </div>
        
        <button className="next-btn" onClick={goToInterface2} disabled={localEmployeeCount === 0}>Suivant</button>
      </div>
    </div>
  );
}



function InfoTooltip() {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggleTooltip = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <div className="tooltip-container">
        <div className="tooltip-icon" onClick={toggleTooltip}>?</div>
        {isVisible && (
          <div className="tooltip-box">
            <p>
              Nous prenons en compte le nombre d'utilisateurs de votre entreprise qui 
              utilisent Internet sur différents appareils à la fois. C'est un facteur primordial 
              pour déterminer les vitesses Internet dont vous aurez besoin au moment de l'utilisation 
              de pointe.
            </p>
          </div>
        )}
      </div>
    );
  }
  


export default Ife