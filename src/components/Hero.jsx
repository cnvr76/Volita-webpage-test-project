import CarouselComponent from "./CarouselComponent";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <h1> Ako dopadol </h1>
        <span className="highlight">Crashtest?</span>
        <p>Bezpečnosť domácností môže byť ohrozená</p>
        <button className="btn-primary">Prejsť na video</button>
      </div>
      <CarouselComponent></CarouselComponent>
    </section>
  );
}

export default Hero;
