import React, { useState } from 'react';
import logo from '/images/logo.png';
import logoDark from '/images/logo_dark.png';
import { Contener } from "../shared.styled.js"
import * as S from "./Header.styled.js"
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";

function Header({ }) {

  const { userData } = useUser();

  const [isUserSettingsVisible, setUserSettingsVisible] = useState(false);

  const toggleUserSettings = () => {
    setUserSettingsVisible(!isUserSettingsVisible);
  };


  return (
    <S.Header>
      <Contener>
        <S.HeaderBlock>
          <S.HeaderLogo>
            <a href="" target="_self"><S.HeaderLogoImage src={logo} alt="logo" /></a>
          </S.HeaderLogo>
          <S.HeaderLogo>
            <a href="" target="_self"><S.HeaderLogoImage src={logoDark} alt="logo" /></a>
          </S.HeaderLogo>

          <S.HeaderNav>

            <button className="header__btn-main-new _hover01" id="btnMainNew"><Link to="/newcard">Создать новую задачу</Link></button>

            <a href="#user-set-target" className="header__user _hover02" onClick={toggleUserSettings}>{userData.user.name}</a>

            {isUserSettingsVisible && (
              <div className="header__pop-user-set pop-user-set" id="user-set-target">
                <p className="pop-user-set__name">{userData.user.name}</p>
                <p className="pop-user-set__mail">{userData.user.login}</p>
                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" className="checkbox" name="checkbox" />
                </div>
                <button type="button" className="_hover03"><Link to="/exit">Выйти</Link></button>
              </div>
            )}

          </S.HeaderNav>
        </S.HeaderBlock>
      </Contener>
    </S.Header>
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