import CardButton from '../CardButton/CardButton';
import CardDate from '../CardDate/CardDate';
import * as S from "./Card.styled.js"
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { ru } from 'date-fns/locale';
import { getClassForTheme } from '../../services/helper.js';

function Card({ id, topic, title, date }) {

  const formatedDate = format(date, 'dd.MM.yyyy', {locale: ru});

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
          <CardDate date={formatedDate} />
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  );
}

export default Card;