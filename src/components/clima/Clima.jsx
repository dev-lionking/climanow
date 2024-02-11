import React from "react";

const Clima = () => {
  return (
    <>
      <div className="location-and-date">
        <h1 className="location-and-date__location">Jesus Maria, AR</h1>
        <div>Sabado 10 de Febrero de 2023</div>
      </div>

      <div className="current-temperature">
        <div className="current-temperature__icon-container">
          <img
            src="icons/mostly-sunny.svg"
            className="current-temperature__icon"
            alt=""
          />
        </div>
        <div className="current-temperature__content-container">
          <div className="current-temperature__value">21&deg;</div>
          <div className="current-temperature__summary">Mostly Sunny</div>
        </div>
      </div>

      <div className="current-stats">
        <div>
          <div className="current-stats__value">23&deg;</div>
          <div className="current-stats__label">High</div>
          <div className="current-stats__value">14&deg;</div>
          <div className="current-stats__label">Low</div>
        </div>
        <div>
          <div className="current-stats__value">7mph</div>
          <div className="current-stats__label">Wind</div>
          <div className="current-stats__value">0%</div>
          <div className="current-stats__label">Rain</div>
        </div>
        <div>
          <div className="current-stats__value">05:27</div>
          <div className="current-stats__label">Sunrise</div>
          <div className="current-stats__value">20:57</div>
          <div className="current-stats__label">Sunset</div>
        </div>
      </div>
    </>
  );
};

export default Clima;
