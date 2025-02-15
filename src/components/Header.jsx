import Navbar from "./Navbar";
import logoeao from "../assets/loga/logo-eao.svg";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <img draggable="false" src={logoeao} alt="EAO Logo" className="logo" />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
