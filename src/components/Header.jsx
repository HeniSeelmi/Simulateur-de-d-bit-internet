import React, { useState } from 'react';
import '../styles.css'; 
import img from '../assets/logo.png'; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        {/* Lien vers le site de Topnet en cliquant sur le logo */}
        <a href="https://www.topnet.tn" target="_blank" rel="noopener noreferrer">
          <img src={img} alt="TOPNET" />
        </a>
      </div>

      {/* Menu navigation pour grandes résolutions */}
      <nav className="nav">
        <a href="#moncompte">Moncompte</a>
        <a href="#webmail">Webmail</a>
      </nav>

      {/* Menu burger pour petites résolutions */}
      <div className="burger-menu" onClick={toggleMenu}>
        <div className="burger-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Menu déroulant pour petites résolutions */}
      {isMenuOpen && (
        <div className="nav-dropdown">
          <a href="#moncompte">Moncompte</a>
          <a href="#webmail">Webmail</a>
        </div>
      )}
    </header>
  );
}

export default Header;
