import Card from "./Card";

function Activities({ cardData }) {
  return (
    <div className="activities">
      {cardData.map((card, index) => (
        <Card
          icon={card.icon}
          title={card.title}
          description={card.description}
          key={index}
        />
      ))}
    </div>
  );
}

export default Activities;
