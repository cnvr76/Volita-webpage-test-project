import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Activities from "./components/Activities";
import Blog from "./components/Blog";
import PartnersSection from "./components/PartnersSection";
import "./styles/main.scss";
import "./styles/header.scss";
import "./styles/navbar.scss";
import "./styles/hero.scss";
import "./styles/activities.scss";
import "./styles/CarouselComponent.scss";
import "./styles/blog.scss";
import "./styles/partners.scss";

import icon1 from "./assets/icons/icon-1.svg";
import icon2 from "./assets/icons/icon-2.svg";
import icon3 from "./assets/icons/icon-3.svg";
import icon4 from "./assets/icons/icon-4.svg";

import blogImage1 from "./assets/blog/blog-1.jpg";
import blogImage2 from "./assets/blog/blog-2.jpg";
import blogImage3 from "./assets/blog/blog-3.jpg";
import blogImage4 from "./assets/blog/blog-4.jpg";
import blogImage5 from "./assets/blog/blog-5.jpg";

import partnerImage from "./assets/team-1.jpg";

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

const blogCardInfo = [
  {
    image: blogImage1,
    title: "Novinky",
    description: "Nulla facilisi. Donec ligua libero",
  },
  {
    image: blogImage2,
    title: "Novinky",
    description: "Nulla facilisi. Donec ligua libero",
  },
  {
    image: blogImage3,
    title: "Pribehy",
    description: "Nulla facilisi. Donec ligua libero",
  },
  {
    image: blogImage4,
    title: "Pribehy",
    description: "Nulla facilisi. Donec ligua libero",
  },
  {
    image: blogImage5,
    title: "Novinky",
    description: "Nulla facilisi. Donec ligua libero",
  },
];

const partnersInfo = [];
for (let i = 0; i < 6; i++) {
  partnersInfo.push({
    image: partnerImage,
    name: "Meno Priezvisko",
    position: "Pozícia",
  });
}

function App() {
  return (
    <div>
      <Header />
      <div className="bg1">
        <Hero />
        <Activities cardData={cardData} />
        <Blog blogCardInfo={blogCardInfo} />
      </div>
      <div className="bg2">
        <PartnersSection partnersInfo={partnersInfo} />
      </div>
    </div>
  );
}

export default App;
