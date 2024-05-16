import React, { useState } from 'react'
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import ExitFormPopup from './components/popups/ExitFormPopup/ExitFormPopup.jsx';
import NewCardPopup from './components/popups/NewCardPopup/NewCardPopup';
import BrowseCardPopup from './components/popups/BrowseCardPopup/BrowseCardPopup';
import {cardList} from './data.js';

function App() {

  //console.log(cardList);

  const [cards, setCard] = useState(cardList);

  /**
  function onCardAdd(newCard) {
    setCards(prevCards => [...prevCards, newCard]);
  }*/

  return (
    <>

      <div className="wrapper">
        <ExitFormPopup />
        <NewCardPopup />
        <BrowseCardPopup />
        <Header cards={cards} setCard={setCard} />
        <Content cards={cards} />
      </div>

    </>
  )
};

export default App;

/**
       <div className="wrapper">
        <ExitForm />
        <NewCard onAddCard={onCardAdd} />
        <BrowseCard />
        <Header />
        <Content cards={cards} />
      </div>


      <div className="wrapper">
      
      <ExitForm />

      <NewCard />

      <BrowseCard />

      <Header />

      <Content />
  
      </div>

 */
