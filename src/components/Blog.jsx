import React from "react";
import BlogCard from "./BlogCard";

import aboutImage from "../assets/about-us.jpg";

function Blog({ blogCardInfo }) {
  const mainCard = blogCardInfo.length > 0 ? blogCardInfo[0] : {};
  return (
    <section className="blog">
      <div className="introduction">
        <h4>Novinky</h4>
        <h2>Blog</h2>
      </div>
      <div className="overall-container">
        <div className="cards">
          <div className="main-card">
            <img src={mainCard.image} alt="Main Card Image" />
            <div className="info">
              <h5 className="title">{mainCard.title}</h5>
              <p className="description">{mainCard.description}</p>
              <button>Zobraziť viac</button>
            </div>
          </div>
          <div className="small-cards">
            {blogCardInfo.slice(1).map((card, index) => (
              <BlogCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
          <div className="btn">
            <button>Prejsť na blog</button>
          </div>
        </div>

        <div className="about-container">
          <div className="about-text">
            <h4>O Nás</h4>
            <h1>Evropská asociace oknářú</h1>
            <p>
              Združujeme spoločnosti zamerané na predaj okien a dverí a ich
              servis. V rámci nášho spolku je možné zapájať sa do rôznych
              projektov, kampaní a iných aktivít, ktoré sú prospešné nie len pre
              naše odvetvie.
              <br />
              <br />
              Hlavným cieľom našej činnosti je posilniť kvalitu odvetvia predaja
              a servisu okien a dverí.
            </p>
            <button>Zobraziť viac</button>
          </div>
          <img draggable="false" src={aboutImage} alt="About Us Image" />
        </div>
      </div>

      <div className="blue-bg"></div>
    </section>
  );
}

export default Blog;
