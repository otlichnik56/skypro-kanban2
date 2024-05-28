import Card from '../Card/Card';
import * as S from "./Column.styled.js"

function Column({ title, cards }) {
  //console.log(cards);
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cards.map((card) => (
          <Card
            key={card.id}
            theme={card.theme}
            title={card.title}
            date={card.date}
          />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
}

export default Column;