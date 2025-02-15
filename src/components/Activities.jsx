import Card from "./Card";

function Activities({ cardData }) {
  return (
    <div className="activities">
      <div className="introduction">
        <h4>Naše Aktivity</h4>
        <h2>Zameriavame sa na nasledovné</h2>
      </div>
      <div className="cards">
        {cardData.map((card, index) => (
          <Card
            icon={card.icon}
            title={card.title}
            description={card.description}
            additional={card.additional}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}

export default Activities;
