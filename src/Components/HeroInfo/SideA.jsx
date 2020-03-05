import React from "react";
import "./SideA.scss";

function SideA({ changeCard }) {
  return (
    <React.Fragment>
      <div className="info-wrapper">
        <div className="hero-picture-wrapper">
          <div className="picture-background">
            <div className="picture"></div>
            <div className="name-age-button">
              <p className="hero-name">name, age</p>
              <button onClick={changeCard} className="button-readmore">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SideA;