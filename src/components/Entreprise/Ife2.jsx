import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css';  
import NavBar from '../NavBar';
import { EmployeeContext } from '../EmployeeContext';
import { calculateSpeed } from '../calculateSpeed'; 

const qualityValues = {
    "Vidéo floue": 1,
    "Basse définition": 3,
    "Définition standard": 5,
    "HD (1080p)": 8,
    "Ultra HD (4k)": 12,
    "Je ne sais pas": 0,
};

const Ife2 = ({ previousLocalEmployeeCount, accumulatedSpeed, setAccumulatedSpeed }) => {
    const navigate = useNavigate();
    const { employeeCount } = useContext(EmployeeContext); 
    const [localEmployeeCount, setLocalEmployeeCount] = useState(0);  // Local pour les boutons




    const maxCount = employeeCount > previousLocalEmployeeCount
     ? employeeCount - previousLocalEmployeeCount : employeeCount;

    const [qualityCounts, setQualityCounts] = useState({
        "Vidéo floue": 0,
        "Basse définition": 0,
        "Définition standard": 0,
        "HD (1080p)": 0,
        "Ultra HD (4k)": 0,
        "Je ne sais pas": 0,
    });  
    const [displayCounters, setDisplayCounters] = useState({}); 
    const [selectedQuality, setSelectedQuality] = useState(0);  

    // Mise à jour de localEmployeeCount si employeeCount et previousLocalEmployeeCount sont égaux
    

    const speed = calculateSpeed(localEmployeeCount, selectedQuality);

    const goToInterface3 = () => {
        const totalSelectedDevices = Object.values(qualityCounts).reduce((sum, count) => sum + count, 0);
        if (totalSelectedDevices === localEmployeeCount) {
            setAccumulatedSpeed(accumulatedSpeed + speed); 
            navigate('/Entreprise/Ifee3');  
        } else {
            alert('Le nombre total d’appareils sélectionnés doit correspondre au nombre d’employés.');
        }
    };

    const handleBackClick = () => {
        navigate('/Entreprise/Ife');
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
        setSelectedQuality(qualityValues[quality]); 
    };

    return (
        <div className="main-content">
            <div className="header">
                <NavBar progress={30} speed={accumulatedSpeed + speed} />
            </div>

            <div className="info-tooltip-section">
                <div className="go-back-text" onClick={handleBackClick}>
                    ❮ Retour
                </div>
                <InfoTooltip />
            </div>

            <div className="survey-content">
                <h3>Pensez à votre moment le plus occupé pour l'utilisation d'Internet. Combien d'employés diffusent la vidéo en même temps?</h3>
                <p className="survey-description">Sur {maxCount}</p>  
                
                <div className="employee-counter">
                    <button className="counter-btn" onClick={decrementCount}>-</button>
                    <span className="employee-count">{localEmployeeCount}</span>  
                    <button className="counter-btn" onClick={incrementCount}>+</button>
                </div>
                
                <button className="next-btn" onClick={goToInterface3}>Suivant</button>
            </div>

            <div className="video-quality-section">
                <p className="quality-description">
                    Facultatif: sélectionnez la qualité de la vidéo que vous diffuserez en continu.
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
                        Certaines activités consomment plus de bande passante que d'autres. Le streaming vidéo en HD en fait partie. 
                    </p>
                </div>
            )}
        </div>
    );
}

export default Ife2;
