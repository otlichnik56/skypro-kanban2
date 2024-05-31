import CardButton from '../CardButton/CardButton';
import CardDate from '../CardDate/CardDate';
import * as S from "./Card.styled.js"
import { Link } from "react-router-dom";

function Card({ id, topic, title, date }) {

  return (
    <S.CardsItem>
      <S.CardsCard>
        <S.CardsGroup>
          <S.CardTopic $topicColor={getClassForTheme(topic)}>
            <S.TopicText $topicColor={getClassForTheme(topic)}>{topic}</S.TopicText>
          </S.CardTopic>
          <CardButton id={id} />
        </S.CardsGroup>
        <S.CardContent>
          <Link to={`/card/${id}`}>
            <S.CardsTitle>{title}</S.CardsTitle>
          </Link>
          <CardDate date={date} />
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  );
}

function getClassForTheme(theme) {
    switch (theme) {
      case 'Web Design':
        return '_orange';
      case 'Research':
        return '_green';
      case 'Copywriting':
        return '_purple';
      default:
        return '_default'; 
    }
  }

export default Card;