import React from 'react';
import Header from './Header';  // Assurez-vous que le chemin est correct
import Footer from './Footer';  // Assurez-vous que le chemin est correct
import '../styles.css';

function MainContent({ onNavigate }) {
    const onStartClick = () => {
        onNavigate('/Residentiel/Interface1'); // Navigation vers Interface1 sur clic du bouton
    };

    const goToInterface1 = () => {
        onNavigate('/Entreprise/Ife'); // Navigation vers Interface1 sur clic du bouton
    };
   

    return (
        <div>
            <Header />  {/* Appel du Header ici */}
            <div className="main-content">
                <h1>
                    <span className="highlight">Combien</span> de débit INTERNET ai-je besoin?
                </h1>
                <p className='survey-description'>Dites-nous comment vous utilisez Internet et nous vous recommandons une vitesse Internet appropriée.</p>
                <div className="table-container">
                    <div className="table-row">
                        <div className="table-cell">
                            <h2>Résidentiel</h2>
                            <button className="btn" onClick={onStartClick}>Commencer</button>
                        </div>
                        <div className="table-cell">
                            <h2>Entreprise</h2>
                            <button className="btn" onClick={goToInterface1}>Commencer</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />  {/* Appel du Footer ici */}
        </div>
    );
}

export default MainContent;
