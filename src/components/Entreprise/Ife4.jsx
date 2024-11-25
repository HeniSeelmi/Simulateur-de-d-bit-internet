import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../styles.css';  
import NavBar from '../NavBar';
import { EmployeeContext } from '../EmployeeContext';
import { calculateSpeed } from '../calculateSpeed'; // Assurez-vous d'importer cette fonction

// Les valeurs de qualité pour les différents boutons
const qualityValues = {
    "Aucun": 0,
    "Un peu": 2,
    "Beaucoup": 5,
    "Je ne sais pas": 0,
};

const Ife4 = ({ previousLocalEmployeeCount, accumulatedSpeed, setAccumulatedSpeed }) => {
    const navigate = useNavigate();
    const { employeeCount } = useContext(EmployeeContext);

   

    const maxCount = employeeCount > previousLocalEmployeeCount 
        ? employeeCount - previousLocalEmployeeCount 
        : employeeCount;

    const [localEmployeeCount, setLocalEmployeeCount] = useState(0);
    const [qualityCounts, setQualityCounts] = useState({
        "Aucun": 0,
        "Un peu": 0,
        "Beaucoup": 0,
        "Je ne sais pas": 0,
    });

    const [displayCounters, setDisplayCounters] = useState({});
    const [selectedQuality, setSelectedQuality] = useState(0);
    const [selectedGroupQuality, setSelectedGroupQuality] = useState(0); // Ajout pour gérer la qualité sélectionnée
    // Gérer la sélection du groupe simple

    // Mise à jour si le nombre d'employés change
    

    // Calcul du débit en fonction du nombre d'employés locaux et de la qualité sélectionnée
// Utilise les trois valeurs pour calculer la vitesse
const speed = calculateSpeed(localEmployeeCount, selectedQuality + selectedGroupQuality);

    const goToInterface4 = () => {
        const totalSelectedDevices = Object.values(qualityCounts).reduce((sum, count) => sum + count, 0);
        if (totalSelectedDevices === localEmployeeCount) {
            setAccumulatedSpeed(accumulatedSpeed + speed); // Mettre à jour le débit accumulé
            navigate('/Entreprise/Ife5');  // Navigue vers Interface 4 seulement si la condition est remplie
        } else {
            alert('Le nombre total d’appareils doit correspondre au nombre d’employés.');
        }
    };

    const handleBackClick = () => {
        navigate('/Entreprise/Ifee3');  // Retourne à l'interface précédente (Ife2)
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

    // Gérer la sélection de qualité de groupe simple
    const handleGroupQualityClick = (value) => {
        setSelectedGroupQuality(value); // Met à jour selectedGroupQuality avec la valeur
    };
    

    return (
        <div className="main-content">
            <div className="header">
                <NavBar progress={70} speed={accumulatedSpeed + speed} />
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
                Facultatif: Sélectionnez la qualité vidéo et le nombre de personnes sur les appels vidéo?
                </p>
                <div className="group-quality-options">
                <button className={`quality-btn ${selectedGroupQuality === 5 ? 'selected' : ''}`} onClick={() => handleGroupQualityClick(5)}>
                    Petit groupe (3-5)
                 </button>
                <button className={`quality-btn ${selectedGroupQuality === 10 ? 'selected' : ''}`} onClick={() => handleGroupQualityClick(10)}> 
                    Grand groupe (7+)
                </button>

                </div>

                <div className="quality-options">
                    {Object.keys(qualityCounts).map((quality) => (
                        <div key={quality} className="quality-option">
                            <button className="quality-btn" onClick={() => handleQualityClick(quality)}>
                                {quality}
                            </button>

                            {displayCounters[quality] && (
                                <div className="quality-counter">
                                    <button 
                                        className="counter-btn"
                                        onClick={() => handleQualityDecrement(quality)}
                                    >
                                        -
                                    </button>
                                    <span className="quality-count">
                                        {qualityCounts[quality]} appareils
                                    </span>
                                    <button 
                                        className="counter-btn"
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

export default Ife4;
