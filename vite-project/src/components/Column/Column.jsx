import Card from '../Card/Card';

function Column({ title, cards }) {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        {cards.map((card, index) => (
          <Card
            key={index}
            theme={card.theme}
            title={card.title}
            date={card.date}
          />
        ))}
      </div>
    </div>
  );
}

export default Column;