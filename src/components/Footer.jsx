import React from "react";
import logoeao from "../assets/logo-eao.svg";

function Footer() {
  return (
    <footer>
      <div className="left">
        <button>O nás</button>
        <button>Blog</button>
      </div>
      <img src={logoeao} alt="Logo EAO" />
      <div className="right">
        <button>Programy</button>
        <button>Žiadosti</button>
      </div>
    </footer>
  );
}

export default Footer;
