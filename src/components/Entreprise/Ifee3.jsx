import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css';  // Assurez-vous d'importer les styles
import NavBar from '../NavBar';
import { EmployeeContext } from '../EmployeeContext';
import { calculateSpeed } from '../calculateSpeed'; // Assurez-vous que cette fonction est importée

const qualityValues = {
    "Aucun": 0,
    "Un peu": 2,
    "Beaucoup": 5,
    "Je ne sais pas": 0,
};

const Ifee3 = ({ previousLocalEmployeeCount, accumulatedSpeed, setAccumulatedSpeed }) => {
    const navigate = useNavigate();
    const { employeeCount } = useContext(EmployeeContext);  // Utilise le contexte
    const [localEmployeeCount, setLocalEmployeeCount] = useState(0);  // Local pour les boutons

    // Calcul de la valeur initiale de localEmployeeCount en fonction de la différence
    

    // Limite maximale pour le compteur local
    const maxCount = employeeCount > previousLocalEmployeeCount 
        ? employeeCount - previousLocalEmployeeCount 
        : employeeCount;

    const [qualityCounts, setQualityCounts] = useState({
        "Aucun": 0,
        "Un peu": 0,
        "Beaucoup": 0,
        "Je ne sais pas": 0,
    });

    const [displayCounters, setDisplayCounters] = useState({});
    const [selectedQuality, setSelectedQuality] = useState(0);  // Ajout pour gérer la qualité sélectionnée

    // Mise à jour de localEmployeeCount si employeeCount et previousLocalEmployeeCount sont égaux
   

    const speed = calculateSpeed(localEmployeeCount, selectedQuality);
    


    const goToInterface4 = () => {
        const totalSelectedDevices = Object.values(qualityCounts).reduce((sum, count) => sum + count, 0);
        if (totalSelectedDevices === localEmployeeCount) {
            setAccumulatedSpeed(accumulatedSpeed + speed); // Mettre à jour le débit accumulé
            navigate('/Entreprise/Ife4');  // Navigue vers Interface 4 seulement si la condition est remplie
        } else {
            alert('Le nombre total d’appareils doit correspondre au nombre d’employés.');
        }
    };

    const handleBackClick = () => {
        navigate('/Entreprise/Ife2');  // Retourne à l'interface précédente (Ife2)
    };

    const incrementCount = () => {
        if (localEmployeeCount < maxCount) {
            setLocalEmployeeCount(localEmployeeCount + 1);  // Incrémente jusqu'à la limite de maxCount
        } else {
            alert(`Le nombre ne peut pas dépasser ${employeeCount}.`);
        }
    };

    const decrementCount = () => {
        if (localEmployeeCount > 0) {
            setLocalEmployeeCount(localEmployeeCount - 1);
        }
    };

    const handleQualityIncrement = (quality) => {
        const totalSelectedDevices = Object.values(qualityCounts).reduce((sum, count) => sum + count, 0);
        if (totalSelectedDevices < localEmployeeCount) {
            setQualityCounts(prevCounts => ({
                ...prevCounts,
                [quality]: prevCounts[quality] + 1,
            }));
        } else {
            alert('Le nombre total d’appareils sélectionnés a atteint la limite.');
        }
    };

    const handleQualityDecrement = (quality) => {
        if (qualityCounts[quality] > 0) {
            setQualityCounts(prevCounts => ({
                ...prevCounts,
                [quality]: prevCounts[quality] - 1,
            }));
        }
    };

    const handleQualityClick = (quality) => {
        setDisplayCounters(prevState => ({
            ...prevState,
            [quality]: true
        }));
        setSelectedQuality(qualityValues[quality]);  // Mettre à jour la qualité sélectionnée avec la valeur personnalisée
    };

    return (
        <div className="main-content">
            <div className="header">
                <NavBar progress={50} speed={accumulatedSpeed +speed} />
            </div>

            <div className="info-tooltip-section">
                <div className="go-back-text" onClick={handleBackClick}>
                    ❮ Retour
                </div>
                <InfoTooltip />
            </div>

            <div className="survey-content">
                <h3>Combien d'employés naviguent sur Internet ou vérifient leurs courriels en même temps?</h3>
                <p className="survey-description">Sur {localEmployeeCount}</p>
                
                <div className="employee-counter">
                    <button className="counter-btn" onClick={decrementCount}>-</button>
                    <span className="employee-count">{localEmployeeCount}</span>
                    <button className="counter-btn" onClick={incrementCount}>+</button>
                </div>
                <button className="next-btn" onClick={goToInterface4}>Suivant</button>
            </div>

            <div className="video-quality-section">
                <p className="quality-description">
                    Facultatif: combien de vidéos et de grandes images peuvent être visionnées en ligne?
                </p>
                <div className="quality-options">
                    {Object.keys(qualityCounts).map((quality) => (
                        <div key={quality} className="quality-option">
                            <button className="quality-btn" onClick={() => handleQualityClick(quality)}>
                                {quality}
                            </button>

                            {displayCounters[quality] && (
                                <div className="quality-counter">
                                    <button 
                                        className="counter-butn"
                                        onClick={() => handleQualityDecrement(quality)}
                                    >
                                        -
                                    </button>
                                    <span className="quality-count">
                                        {qualityCounts[quality]} appareils
                                    </span>
                                    <button 
                                        className="counter-butn"
                                        onClick={() => handleQualityIncrement(quality)}
                                    >
                                        +
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

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
                        Bien que des activités telles que la messagerie électronique et la navigation sur Internet n'utilisent généralement pas une grande quantité de bande passante, les canaux de médias sociaux riches en vidéos ou le téléchargement fréquent d'images HD volumineuses peuvent affecter les performances du réseau.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Ifee3;
