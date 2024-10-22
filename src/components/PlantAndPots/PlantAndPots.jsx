import React, { useState } from 'react';
import './PlantAndPots.css';

const PlantAndPots = () => {
  const [activeButton, setActiveButton] = useState('plants');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  return (
    <div className="container">
      <div className="buttons">
        <button
          className={`button ${activeButton === 'plants' ? 'active' : 'inactive'}`}
          onClick={() => handleButtonClick('plants')}
        >
          Plants
        </button>
        <button
          className={`button ${activeButton === 'pots' ? 'active' : 'inactive'}`}
          onClick={() => handleButtonClick('pots')}
        >
          Pots
        </button>
      </div>

      <div className="text">
        {activeButton === 'plants' ? (
          <p>
            Lorem ipsum dolor sit amet. Aut ipsam illum et nostrum quidem aut
            necessitatibus enim ut internos accusantium a numquam autem ab rerum
            omnis. Non molestiae ratione et laborum doloribus aut molestiae voluptates ut
            porro excepturi sit molestiae obcaecati qui quis beatae est voluptatem eius.
            Et architecto nihil id labore omnis hic iste deleniti et porro aspernatur.
          </p>
        ) : (
          <p>
            consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        )}
      </div>
    </div>
  );
};

export default PlantAndPots;
