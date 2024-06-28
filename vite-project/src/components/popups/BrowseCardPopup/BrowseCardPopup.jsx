import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import CalendarContent from '../../CalendarContent/CalendarContent';
import * as S from './BrowseCardPopup.styled';
import * as C from '../NewCardPopup/NewCardPopup.styled';
import { useCards } from "../../../hooks/useCards";
import { format } from "date-fns";
import { ru } from 'date-fns/locale';
import { deleteData } from '../../../services/api';
import { useUser } from "../../../hooks/useUser";

const BrowseCardPopup = () => {
  const { id } = useParams();
  const { cards, setCards } = useCards();
  const [card, setCard] = useState(null);
  const navigate = useNavigate(); 
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null);

  const { userData } = useUser();

  const getToken = () => {
    const token = userData ? `Bearer ${userData.user.token}` : undefined;
    return token;
  };

  const token = getToken();

  useEffect(() => {
    const foundCard = cards.find(c => c._id === id);
    setCard(foundCard);
  }, [id, cards]);

  if (!card) {
    return <div>Loading...</div>;
  }

  const formattedDate = format(new Date(card.date), 'dd.MM.yyyy', { locale: ru });

  const handleDelete = async () => {
    setIsLoading(true); // Показать лоадер
    try {
      await deleteData({ token, id });
      setCards(prevCards => prevCards.filter(c => c._id !== id));
      navigate('/');
    } catch (error) {
      setError("Ошибка удаления. Сервер отдыхает! Дайте ему поспать!");
    } finally {
      setIsLoading(false); // Скрыть лоадер
    }
  };

  return (
    <S.PopupContainer id={id}>
      <S.PopupBlock>
        <S.TopBlock>
          <S.Title>{card.title}</S.Title>
          <S.Theme $topicColor={getClassForTheme(card.topic)}>
            <S.ThemeText $topicColor={getClassForTheme(card.topic)}>{card.topic}</S.ThemeText>
          </S.Theme>
        </S.TopBlock>
        <S.Status>
          <S.StatusTitle>Статус</S.StatusTitle>
          <S.StatusThemes>
            <S.StatusTheme className={card.status}><p>{card.status}</p></S.StatusTheme>
          </S.StatusThemes>
        </S.Status>
        <S.Wrap>
          <S.Form id="formBrowseCard" action="#">
            <label htmlFor="textArea01" className="subttl">Описание задачи</label>
            <S.TextArea name="text" id="textArea01" readOnly value={card.description} placeholder="Введите описание задачи..."></S.TextArea>
          </S.Form>
          <C.Calendar>
            <C.CalendarTtl>Даты</C.CalendarTtl>
            <C.CalendarBlock>
              <CalendarContent />
              <C.CalendarPeriod>
                <C.CalendarP>Срок исполнения: <span>{formattedDate}</span>.</C.CalendarP>
              </C.CalendarPeriod>
            </C.CalendarBlock>
          </C.Calendar>
        </S.Wrap>
        <S.ButtonGroup className="pop-browse__btn-browse">
          <div className="btn-group">
            <S.Button className="btn-browse__edit _btn-bor _hover03"><Link to="/">Редактировать задачу</Link></S.Button>
            <S.Button className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete}>
              Удалить задачу
            </S.Button>
          </div>
          <S.Button className="btn-browse__close _btn-bg _hover01"><Link to="/">Закрыть</Link></S.Button>
        </S.ButtonGroup>

        {error && <C.ErrorMessage>{error}</C.ErrorMessage>}

        {isLoading && (
          <C.LoaderWrapper>
            <C.Loader />
          </C.LoaderWrapper>
        )}

      </S.PopupBlock>
    </S.PopupContainer>
  );
};

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

export default BrowseCardPopup;