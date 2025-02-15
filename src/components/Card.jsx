import React from "react";

function Card({ icon, title, description, additional }) {
  return (
    <div className="card">
      <div className="info">
        <img draggable="false" src={icon} alt="Activity icon" />
        <h3>{title}</h3>
        <p>
          {description}
          <br />
          <br />
          {additional}
        </p>
      </div>
      <button>Zobraziť viac</button>
    </div>
  );
}

export default Card;
