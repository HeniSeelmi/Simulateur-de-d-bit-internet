import React from 'react';
import logo from '../assets/logo.png' // Import du logo
import ProgressBar from './ProgressBar'; // Import du composant ProgressBar
import SpeedDisplay from './SpeedDisplay'; // Import du composant SpeedDisplay

const NavBar = ({progress, speed}) => {
  return (
    <div className="navbar">
      <img src={logo} alt="Topnet Logo" className="logo1" />
      <ProgressBar progress={progress} />
      <SpeedDisplay speed={speed} />
    </div>
  );
};

export default NavBar;
