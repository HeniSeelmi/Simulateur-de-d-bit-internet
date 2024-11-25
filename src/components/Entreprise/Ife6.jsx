import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../../styles.css'// Assurez-vous d'importer les styles
import NavBar from  '../NavBar';



const Ife6 = ({accumulatedSpeed,setAccumulatedSpeed}) => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/Entreprise/Ife5'); 
      };

    return (
        <div className="main-content" >
            <div className="header">
                <NavBar progress={100} speed={accumulatedSpeed} />
            </div>
            <div className="survey-content" >
                <div className="go-back-text" onClick={handleBackClick}>❮ Retour</div>
                <div className="survey-form">
                    <h2>Entrez votre numéro ADSL,<br /> un commercial vous contactera</h2>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Numéro ADSL"
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



export default Ife6
