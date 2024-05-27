import React, { useState } from 'react';
import logo from '/images/logo.png';
import logoDark from '/images/logo_dark.png';
import { Contener } from "../shared.styled.js"

function Header({ cards, setCard }) {

  const [isUserSettingsVisible, setUserSettingsVisible] = useState(false);

  const toggleUserSettings = () => {
    setUserSettingsVisible(!isUserSettingsVisible);
  };

  const onAddCard = () => {

    const newCard = { id: Date.now(), 
                      theme: "Web Design", 
                      title: "Пробная задача",
                      date: "16.05.2024", 
                      status: "Без статуса" };

    const newCardList = [...cards, newCard];

    setCard(newCardList);
    
  }

  return (
    <header className="header">
      <Contener>
        <div className="header__block">
          <div className="header__logo _show _light">
            <a href="" target="_self"><img src={logo} alt="logo" /></a>
          </div>
          <div className="header__logo _dark">
            <a href="" target="_self"><img src={logoDark} alt="logo" /></a>
          </div>
          <nav className="header__nav">

            <button onClick={onAddCard} className="header__btn-main-new _hover01" id="btnMainNew">Создать новую задачу</button>

            <a href="#user-set-target" className="header__user _hover02" onClick={toggleUserSettings}>Ivan Ivanov</a>

            {isUserSettingsVisible && (
              <div className="header__pop-user-set pop-user-set" id="user-set-target">
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03"><a href="#popExit">Выйти</a></button>
              </div>
            )}

          </nav>
        </div>
      </Contener>
    </header>
  );
}

export default Header;



  
  /** нужно будет для переключения темы
  const [isDarkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const themeLink = document.getElementById('theme-style');
    if (isDarkMode) {
      themeLink.href = '/css/dark-theme.css'; 
    } else {
      themeLink.href = '/css/light-theme.css'; 
    }
  }, [isDarkMode]);
  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
  };
  <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
  */