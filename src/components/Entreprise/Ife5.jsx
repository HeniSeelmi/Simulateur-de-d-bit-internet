import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css';  // Assurez-vous d'importer les styles
import NavBar from '../NavBar';
import { EmployeeContext } from '../EmployeeContext';  // Importe le contexte
import { calculateSpeed } from '../calculateSpeed'; // Assurez-vous d'importer cette fonction


const qualityValues = {
    "Mauvaise qualité": 1,
    "Haute qualité": 6,
    "Très haute qualité": 12,
    "Je ne sais pas": 0,
};

const Ife5 = ({ previousLocalEmployeeCount, accumulatedSpeed, setAccumulatedSpeed }) => {
    const navigate = useNavigate();
    const { employeeCount } = useContext(EmployeeContext);  // Récupère la valeur globale de employeeCount

    // Calcul de la valeur initiale de localEmployeeCount
    const initialLocalCount = employeeCount > previousLocalEmployeeCount 
        ? employeeCount - previousLocalEmployeeCount 
        : 0;
         // Limite maximale pour le compteur local
    const maxCount = employeeCount > previousLocalEmployeeCount 
    ? employeeCount - previousLocalEmployeeCount 
    : employeeCount;


    const [localEmployeeCount, setLocalEmployeeCount] = useState(0);  // Local pour les boutons
    const [qualityCounts, setQualityCounts] = useState({
        "Mauvaise qualité": 0,
        "Haute qualité": 0,
        "Très haute qualité": 0,
        "Je ne sais pas": 0,
    });


const [displayCounters, setDisplayCounters] = useState({});
    const [selectedQuality, setSelectedQuality] = useState(0); 


     useEffect(() => {
        if (employeeCount === previousLocalEmployeeCount) {
            setLocalEmployeeCount(initialLocalCount);  // Réinitialiser à 0 pour permettre la mise à jour manuelle
        }
    }, [employeeCount, previousLocalEmployeeCount, initialLocalCount]);
    const speed = calculateSpeed(localEmployeeCount, selectedQuality);


    const goToInterface6 = () => {
        const totalSelectedDevices = Object.values(qualityCounts).reduce((sum, count) => sum + count, 0);
        if (totalSelectedDevices === localEmployeeCount) {
            setAccumulatedSpeed(accumulatedSpeed + speed);
            navigate('/Entreprise/Ife6');  // Navigue vers l'interface 6
        }else{
            alert('Le nombre total d’appareils doit correspondre au nombre d’employés.');
            }  
    };

    const handleBackClick = () => {
        navigate('/Entreprise/Ife4');  // Retourne à l'interface précédente
    };

    const incrementCount = () => {
        if (localEmployeeCount < maxCount) {
            setLocalEmployeeCount(localEmployeeCount + 1);
        } else {
            alert(`Le nombre ne peut pas dépasser ${employeeCount }.`);
        }
    };


    const decrementCount = () => {
        if (localEmployeeCount > 0) {
            setLocalEmployeeCount(localEmployeeCount - 1);
        }
    };

    const handleQualityClick = (quality) => {
        setDisplayCounters(prevState => ({
            ...prevState,
            [quality]: true
        }));
        setSelectedQuality(qualityValues[quality]);  // Mettre à jour la qualité sélectionnée avec la valeur personnalisée
    };

    const handleQualityIncrement = (quality) => {
        const totalSelectedDevices = Object.values(qualityCounts).reduce((sum, count) => sum + count, 0);
        if (totalSelectedDevices < localEmployeeCount) {
            setQualityCounts(prevCounts => ({
                ...prevCounts,
                [quality]: prevCounts[quality] + 1,
            }));
        } else {
            alert('Le nombre total d’appareils a atteint la limite.');
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

    return (
        <div className="main-content">
            <div className="header">
                <NavBar progress={90} speed={accumulatedSpeed+speed}/>
            </div>

            <div className="info-tooltip-section">
                <div className="go-back-text" onClick={handleBackClick}>
                    ❮ Retour
                </div>
                <InfoTooltip />
            </div>

            <div className="survey-content">
                <h3>Combien d’employés diffuseraient de l’audio, écouteraient de la musique ou utiliseraient la VOIP ?</h3>
                <p className="survey-description">Sur {localEmployeeCount}</p>

                <div className="employee-counter">
                    <button className="counter-btn" onClick={decrementCount}>-</button>
                    <span className="employee-count">{localEmployeeCount}</span>
                    <button className="counter-btn" onClick={incrementCount}>+</button>
                </div>
                <button className="next-btn" onClick={goToInterface6}>Suivant</button>
            </div>

            <div className="video-quality-section">
                <p className="quality-description">
                    Facultatif : sélectionnez la qualité audio que vous diffuserez.
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
                        Bien que les activités audio ne consomment pas beaucoup de bande passante individuellement, assurez-vous que vos vitesses Internet répondent à vos besoins VOIP.
                    </p>
                </div>
            )}
        </div>
    );
}

export default Ife5;
