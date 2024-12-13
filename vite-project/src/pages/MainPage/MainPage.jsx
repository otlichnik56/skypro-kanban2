import React, { useEffect, useState } from 'react'
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import { GlobalStyle } from '../../global.styled.js';
import { Wrapper } from "../../components/shared.styled.js"
import { Outlet } from "react-router-dom";
import { getDatas } from '../../services/api.js';
import { getUserFromLocalStorage } from '../../services/helper.js';
import { useCards } from "../../hooks/useCards.js";

function MainPage() {

  const {cards, setCards} = useCards();

  const [isLoading, setIsLoading] = useState(false);
  
  const [user, setUser] = useState(getUserFromLocalStorage());
  
  const [cardsError, setCardsError] = useState("");

  const getToken = () => {
    const token = user ? `Bearer ${user.user.token}` : undefined;
    return token;
  };

  const token = getToken();

  try{
    useEffect(() => {
      if(token){      
        setIsLoading(true);
        getDatas({ token: token }).then((cards) => {
          setCards(cards.tasks);
          setIsLoading(false);
        });
      }
    }, [token]);
  } catch(error){
    setCardsError(error.message);
  }
  

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <Header />
        <p>{cardsError}</p>
        <Content isLoading={isLoading} cards={cards} />
      </Wrapper>

    </>
  )
};

export default MainPage;


