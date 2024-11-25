import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles.css'// Assurez-vous d'importer les styles
import NavBar from  '../NavBar';


const Interface8 = ({accumulatedSpeed, setAccumulatedSpeed }) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/Residentiel/Interface7'); // Revenir à la page précédente
    };

    const progress = (accumulatedSpeed / 100) * 100; // Calculer le progrès en fonction du débit accumulé


    return (
        <div className="main-content" >
            <div className="header">
                <NavBar progress={progress} speed={accumulatedSpeed} />
            </div>
            <div className="survey-content" >
                <div className="go-back-text" onClick={handleBackClick}>❮Retour</div>
                <div className="survey-form">
                    <h2>Entrez votre numéro de téléphone GSM,<br /> un commercial vous contactera</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Numéro GSM"
                            className="text-input"
                        /><br/>
                          <input
                            type="text"
                            name="name"
                            placeholder="Nom"
                            className="text-input"
                        /><br/>
                          <input
                            type="email"
                            name="email"
                            placeholder="Adresse email"
                            className="text-input"
                        />
                        <button className="submit-btn">Envoyer</button>
                    </div>
                    <Link
                        to="" // Chemin pour avancer sans entrer de numéro
                        className="link-text"
                    >
                        Non Merci
                    </Link>
                </div>
            </div>
        </div>
    );
}



export default Interface8;
