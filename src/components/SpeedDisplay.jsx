import React from 'react';

const SpeedDisplay = ({ speed }) => {
  return (
    <div className="speed-display-container">
      <div className="speed-text">
        Vitesse Minimum <br />
        Recommandée
      </div>
      <div className="speed-value">{speed} <span className="speed-unit">Mbps</span></div>
    </div>
  );
};

export default SpeedDisplay;
