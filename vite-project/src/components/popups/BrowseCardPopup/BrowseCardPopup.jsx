import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from "react-router-dom";
import CalendarContent from '../../CalendarContent/CalendarContent';
import * as S from './BrowseCardPopup.styled';
import * as C from '../NewCardPopup/NewCardPopup.styled';
import { useCards } from "../../../hooks/useCards";
import { format } from "date-fns";
import { ru } from 'date-fns/locale';
import { deleteData, putData } from '../../../services/api';
import { useUser } from "../../../hooks/useUser";
import { appRoutes, getClassForTheme } from '../../../services/helper';
import { statusList } from '../../../data';

const BrowseCardPopup = () => {
  const { id } = useParams();
  const { cards, setCards } = useCards();
  const [card, setCard] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState('');
  const [editedDate, setEditedDate] = useState(null);
  const [editedStatus, setEditedStatus] = useState('');
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
    setEditedDescription(foundCard?.description || '');
    setEditedDate(new Date(foundCard?.date));
    setEditedStatus(foundCard?.status || '');
  }, [id, cards]);

  if (!card) {
    return;
  }

  const handleDelete = async () => {
    setIsLoading(true); 
    try {
      await deleteData({ token, id });
      setCards(prevCards => prevCards.filter(c => c._id !== id));
      navigate(appRoutes.MAIN);
    } catch (error) {
      setError("Ошибка удаления. Сервер отдыхает! Дайте ему поспать!");
    } finally {
      setIsLoading(false); 
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    setIsLoading(true);
    try {
      const updatedCard = { ...card, description: editedDescription, date: editedDate, status: editedStatus };
      await putData({ token, id: updatedCard._id, task: updatedCard });
      setCards(prevCards => prevCards.map(c => (c._id === id ? updatedCard : c)));
      setIsEditing(false);
      navigate(appRoutes.MAIN);
    } catch (error) {
      setError("Ошибка сохранения. Сервер отдыхает! Дайте ему поспать!");
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = (status) => {
    setEditedStatus(status);
  };

  const formattedDate = editedDate ? format(new Date(editedDate), 'dd.MM.yyyy', { locale: ru }) : 'Не выбрано';

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
          {isEditing ? (
            <S.StatusThemes>
              {statusList.map((status, index) => (
                <S.StatusTheme
                  key={index}
                  className={status === editedStatus ? 'active-status' : ''}
                  onClick={() => handleStatusChange(status)}
                >
                  <p>{status}</p>
                </S.StatusTheme>
              ))}
            </S.StatusThemes>
          ) : (
            <S.StatusThemes>
              <S.StatusTheme className={card.status}><p>{card.status}</p></S.StatusTheme>
            </S.StatusThemes>
          )}
        </S.Status>
        <S.Wrap>
          <S.Form id="formBrowseCard" action="#">
            <label htmlFor="textArea01" className="subttl">Описание задачи</label>
            <S.TextArea 
              className="text" 
              id="textArea01" 
              $isEditing={isEditing}
              value={editedDescription} 
              placeholder="Введите описание задачи..."
              onChange={(e) => setEditedDescription(e.target.value)}
            ></S.TextArea>
          </S.Form>
          <C.Calendar>
            <C.CalendarTtl>Даты</C.CalendarTtl>
            <C.CalendarBlock>
              <CalendarContent 
                selected={isEditing ? editedDate : undefined}
                setSelected={isEditing ? setEditedDate : undefined}
              />
              <C.CalendarPeriod>
                <C.CalendarP>Срок исполнения: <span>{formattedDate}</span>.</C.CalendarP>
              </C.CalendarPeriod>
            </C.CalendarBlock>
          </C.Calendar>
        </S.Wrap>
        <S.ButtonGroup className="pop-browse__btn-browse">
          <div className="btn-group">
            {isEditing ? (
              <S.Button03 onClick={handleSave}>
                Сохранить
              </S.Button03>
            ) : (
              <S.Button03 onClick={handleEdit}>
                Редактировать задачу
              </S.Button03>
            )}
            <S.Button03 onClick={handleDelete}>
              Удалить задачу
            </S.Button03>
          </div>
          <S.Button01><S.StyledLink to={appRoutes.MAIN}>Закрыть</S.StyledLink></S.Button01>
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

export default BrowseCardPopup;