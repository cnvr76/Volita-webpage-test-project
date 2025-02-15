import React from "react";
import Partner from "./Partner";

import volitaServisLogo from "../assets/loga/logo-volita.svg";
import partner1 from "../assets/loga/partner-1.svg";
import partner2 from "../assets/loga/partner-2.svg";
import partner3 from "../assets/loga/partner-3.svg";
import partner4 from "../assets/loga/partner-4.png";
import partner5 from "../assets/loga/partner-5.png";
import partner6 from "../assets/loga/partner-6.svg";
import partner8 from "../assets/loga/partner-8.svg";
import partner9 from "../assets/loga/partner-9.svg";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner8,
  partner9,
];

function PartnersSection({ partnersInfo }) {
  return (
    <section className="partners-section">
      <div className="zakladatelia">
        <div className="introduction">
          <h4>Partneri</h4>
          <h2>Zakladatelia EAO</h2>
        </div>
        <div className="cards">
          {partnersInfo.map((data, index) => (
            <Partner
              key={index}
              image={data.image}
              name={data.name}
              position={data.position}
            ></Partner>
          ))}
        </div>
      </div>

      <div className="generalny-partner-container">
        <div className="introduction">
          <h4>Partneri</h4>
          <h2>Generálny partner</h2>
        </div>
        <img src={volitaServisLogo} alt="Generalny Partner" />
      </div>

      <div className="nasi-partneri-container">
        <div className="introduction">
          <h4>Partneri</h4>
          <h2>Naši partneri</h2>
        </div>
        <div className="nasi-partneri">
          {partners.map((partner, index) => (
            <img key={index} src={partner} alt="Partner Image" />
          ))}
        </div>
      </div>

      <div className="outro-text">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
          recusandae maxime, veniam ea neque ipsam! Nesciunt, expedita
          architecto at rerum temporibus illo dolorum dolores repudiandae
          quisquam porro repellendus consectetur quod.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Et esse quo
          error, dolor vero enim placeat consequatur voluptas velit. Vero
          officia nobis dolor expedita ratione explicabo eius eum sapiente sed?
        </p>
        <button>Chcete sa stať partnerom?</button>
      </div>
    </section>
  );
}

export default PartnersSection;
