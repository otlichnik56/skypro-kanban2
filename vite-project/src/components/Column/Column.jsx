import Card from '../Card/Card';
import * as S from "./Column.styled.js"

function Column({ title, cards }) {
  
  return (
    <S.MainColumn>
      <S.ColumnTitle>
        <p>{title}</p>
      </S.ColumnTitle>
      <S.Cards>
        {cards.map(({id, theme, title, date}) => (
          <Card
            key={id}
            id={id}
            theme={theme}
            title={title}
            date={date}
          />
        ))}
      </S.Cards>
    </S.MainColumn>
  );
}

export default Column;