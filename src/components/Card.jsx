import React from "react";

function Card({ icon, title, description }) {
  return (
    <div className="card">
      <img draggable="false" src={icon} alt="Activity icon" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Card;
