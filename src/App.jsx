import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import "./styles/main.scss";
import "./styles/header.scss";
import "./styles/navbar.scss";
import "./styles/hero.scss";
import "./styles/activities.scss";
import "./styles/CarouselComponent.scss";

import icon1 from "./assets/icons/icon-1.svg";
import icon2 from "./assets/icons/icon-2.svg";
import icon3 from "./assets/icons/icon-3.svg";
import icon4 from "./assets/icons/icon-4.svg";

const cardData = [
  {
    icon: icon1,
    title: "Pomoc cez Okno",
    description: "Podporujeme pomoc ľuďom v núdzi.",
  },
  {
    icon: icon2,
    title: "Vzdelávanie",
    description: "Podporujeme školenia a kurzy.",
  },
  {
    icon: icon3,
    title: "Životné prostredie",
    description: "Ekologické iniciatívy.",
  },
  {
    icon: icon4,
    title: "Zbierky",
    description: "Organizujeme zbierky a projekty.",
  },
];

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Activities cardData={cardData} />
    </div>
  );
}

export default App;
