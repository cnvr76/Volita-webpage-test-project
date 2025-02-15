import React from "react";

function Partner({ image, name, position }) {
  return (
    <div className="partner-card">
      <img draggable="false" src={image} alt="Patner Image" />
      <div className="partner-info">
        <h4>{name}</h4>
        <p>{position}</p>
      </div>
    </div>
  );
}

export default Partner;
