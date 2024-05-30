import React, { useState } from 'react'
//import '../../App.css';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
import {cardList} from '../../data.js';
import { GlobalStyle } from '../../global.styled.js';
import { Wrapper } from "../../components/shared.styled.js"
import { Outlet } from "react-router-dom";

function MainPage() {

  const [cards, setCard] = useState(cardList);

  /**
  function onCardAdd(newCard) {
    setCards(prevCards => [...prevCards, newCard]);
  }*/

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Outlet />
        <Header cards={cards} setCard={setCard} />
        <Content cards={cards} />
      </Wrapper>

    </>
  )
};

export default MainPage;