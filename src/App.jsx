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
    description:
      "Držíme sa motta „Nemôžeme pomôcť každému, no každý môže pomôcť niekomu.“ Pomáhame vybraným rodinám aj jednotlivcom, ktorí potrebujú finančnú, alebo inú materiálnu pomoc.",
    additional: "",
  },
  {
    icon: icon2,
    title: "Vzdelávanie",
    description:
      "Pripravujeme rôzne propagačné kampane, ktorých súčasťou je aj vzdelávanie verejnosti.",
    additional: "",
  },
  {
    icon: icon3,
    title: "Životné prostredie",
    description:
      "Ponúkame našim partnerom možnosť zapojiť sa do rôznych aktivít zameraných na ochranu životného prostredia.",
    additional: "",
  },
  {
    icon: icon4,
    title: "Zbierky",
    description:
      "V rámci nášho posledného projektu „crashtest“ sme spustili zbierku pre sociálne slabšie rodiny.",
    additional: "Za každé vysersivované okno prispievame 0,10 EUR.",
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
