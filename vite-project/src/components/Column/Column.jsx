import Card from '../Card/Card';
import * as S from "./Column.styled.js"

function Column({ title, cards }) {
  
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cards.map(({_id, topic, title, date}, index) => (
          <Card
            key={`card-${_id}-${index}`}
            id={_id}
            topic={topic}
            title={title}
            date={date}
          />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
}

export default Column;