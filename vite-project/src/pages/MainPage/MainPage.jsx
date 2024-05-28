import React, { useState } from 'react'
import '../../App.css';
import Header from '../../components/Header/Header';
import Content from '../../components/Content/Content';
//import ExitFormPopup from '../../components/popups/ExitFormPopup/ExitFormPopup.jsx';
//import NewCardPopup from '../../components/popups/NewCardPopup/NewCardPopup';
//import BrowseCardPopup from '../../components/popups/BrowseCardPopup/BrowseCardPopup';
import {cardList} from '../../data.js';
import { GlobalStyle } from '../../global.styled.js';
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
      <div className="wrapper">
        <Outlet />
        <Header cards={cards} setCard={setCard} />
        <Content cards={cards} />
      </div>

    </>
  )
};

export default MainPage;