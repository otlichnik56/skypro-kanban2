import React, { useState } from 'react';
import CalendarContent from '../../CalendarContent/CalendarContent';
import * as S from './NewCardPopup.styled';
import { useCards } from "../../../hooks/useCards";
import { useUser } from "../../../hooks/useUser";
import { useNavigate } from 'react-router-dom';
import { postData } from '../../../services/api';
import { appRoutes } from '../../../services/helper';

function NewCardPopup() {

    const [task, setTask] = useState({
        title: "",
        topic: "",
        status: "Без статуса",
        description: "",
        date: null
    });

    const { setCards } = useCards();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const { userData } = useUser();

    const getToken = () => {
      const token = userData ? `Bearer ${userData.user.token}` : undefined;
      return token;
    };

    const nowDate = new Date();

    const token = getToken();

    const createTask = (e) => {
        e.preventDefault();

        if (!task.title || !task.description || !task.date) {
            setError("Заполните поля, пожалуйста ... наверно!");
            return;            
        }

        setIsLoading(true);

        postData({ token: token, task: task })
            .then((cards) => {
                setCards(cards.tasks);
                navigate(appRoutes.MAIN);
            })
            .catch((error) => {
                setError(error);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const [activeCategory, setActiveCategory] = useState('Web Design');

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        setTask((prevTask) => ({ ...prevTask, topic: category }));
    };

    const handleTaskNameChange = (e) => {
        const newTitle = e.target.value;
        setTask((prevTask) => ({ ...prevTask, title: newTitle }));
    };

    const handleTaskDescriptionChange = (e) => {
        const newDescription = e.target.value;
        setTask((prevTask) => ({ ...prevTask, description: newDescription }));
    };

    return (
        <S.PopNewCard id="popNewCard">
            <S.PopNewCardContainer>
                <S.PopNewCardBlock>
                    <S.PopNewCardContent>
                        <S.PopNewCardTtl>Создание задачи</S.PopNewCardTtl>
                        <S.PopNewCardClose href={appRoutes.MAIN}>&#10006;</S.PopNewCardClose>
                        <S.PopNewCardWrap>
                            <S.FormNewCard id="formNewCard" action="#">
                                <S.FormNewBlock>
                                    <label htmlFor="formTitle" className="subttl">Название задачи</label>
                                    <S.FormNewInput
                                        type="text"
                                        name="name"
                                        id="formTitle"
                                        placeholder="Введите название задачи..."
                                        autoFocus=""
                                        value={task.title}
                                        onChange={handleTaskNameChange}
                                    />
                                </S.FormNewBlock>
                                <S.FormNewBlock>
                                    <label htmlFor="textArea" className="subttl">Описание задачи</label>
                                    <S.FormNewArea
                                        name="text"
                                        id="textArea"
                                        placeholder="Введите описание задачи..."
                                        value={task.description}
                                        onChange={handleTaskDescriptionChange}
                                    />
                                </S.FormNewBlock>
                            </S.FormNewCard>
                            <S.Calendar className="calendar">
                                <S.CalendarTtl className="calendar__ttl subttl">Даты</S.CalendarTtl>
                                <S.CalendarBlock>
                                    <CalendarContent selected={task.date} setSelected={(date) => setTask({...task, date})} />
                                    <input type="hidden" id="datepick_value" defaultValue={nowDate} />
                                    <S.CalendarPeriod>
                                        <S.CalendarP className="calendar__p date-end">
                                            Выберите срок исполнения <span className="date-control">{task.date ? task.date.toLocaleDateString('ru-RU') : 'Не выбрано'}</span>.
                                        </S.CalendarP>
                                    </S.CalendarPeriod>
                                </S.CalendarBlock>
                            </S.Calendar>
                        </S.PopNewCardWrap>
                        <S.Categories>
                            <S.CategoriesP className="categories__p subttl">Категория</S.CategoriesP>
                            <S.CategoriesThemes>
                                <S.CategoriesThemeOrange
                                    className={activeCategory === 'Web Design' ? 'active-category' : ''}
                                    onClick={() => handleCategoryClick('Web Design')}
                                >
                                    <p>Web Design</p>
                                </S.CategoriesThemeOrange>
                                <S.CategoriesThemeGreen
                                    className={activeCategory === 'Research' ? 'active-category' : ''}
                                    onClick={() => handleCategoryClick('Research')}
                                >
                                    <p>Research</p>
                                </S.CategoriesThemeGreen>
                                <S.CategoriesThemePurple
                                    className={activeCategory === 'Copywriting' ? 'active-category' : ''}
                                    onClick={() => handleCategoryClick('Copywriting')}
                                >
                                    <p>Copywriting</p>
                                </S.CategoriesThemePurple>
                            </S.CategoriesThemes>
                        </S.Categories>

                        {error && <S.ErrorMessage>{error}</S.ErrorMessage>}

                        <S.Hover01 as={S.FormNewCreateButton} onClick={createTask} id="btnCreate">
                            Создать задачу
                        </S.Hover01>
                    </S.PopNewCardContent>
                </S.PopNewCardBlock>
            </S.PopNewCardContainer>
            {isLoading && (
                <S.LoaderWrapper>
                    <S.Loader />
                </S.LoaderWrapper>
            )}
        </S.PopNewCard>
    );
}

export default NewCardPopup;