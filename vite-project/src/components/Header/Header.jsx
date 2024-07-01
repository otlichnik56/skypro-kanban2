import React, { useState } from 'react';
import logo from '/images/logo.png';
import logoDark from '/images/logo_dark.png';
import { Contener } from "../shared.styled.js";
import * as S from "./Header.styled.js";
import { Link } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { appRoutes } from '../../services/helper.js';

function Header() {
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
            <a href="" target="_self">
              <S.HeaderLogoImage src={logo} alt="logo" />
            </a>
          </S.HeaderLogo>
          <S.HeaderLogo>
            <a href="" target="_self">
              <S.HeaderLogoImage src={logoDark} alt="logo" />
            </a>
          </S.HeaderLogo>

          <S.HeaderNav>
            <S.ButtonMainNew id="btnMainNew">
              <Link to={appRoutes.NEWCARD}>Создать новую задачу</Link>
            </S.ButtonMainNew>

            <S.UserLink href="#user-set-target" onClick={toggleUserSettings}>
              {userData.user.name}
            </S.UserLink>

            {isUserSettingsVisible && (
              <S.UserSettings id="user-set-target">
                <S.UserName>{userData.user.name}</S.UserName>
                <S.UserEmail>{userData.user.login}</S.UserEmail>
                <S.ThemeSwitch></S.ThemeSwitch>
                <S.LogoutButton type="button">
                  <Link to={appRoutes.EXIT}>Выйти</Link>
                </S.LogoutButton>
              </S.UserSettings>
            )}
          </S.HeaderNav>
        </S.HeaderBlock>
      </Contener>
    </S.Header>
  );
}

export default Header;