import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../../../hooks/useUser";
import * as S from "./ExitFormPopup.styled.js";

function ExitFormPopup() {
  const { logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <S.PopupContainer id="popExit">
      <S.PopupBlock>
        <S.PopupTitle>
          <h2>Выйти из аккаунта?</h2>
        </S.PopupTitle>
        <form id="formExit" action="#">
          <S.FormGroup>
            <S.YesButton className="_hover01" id="exitYes" onClick={handleLogout}>
              Да, выйти
            </S.YesButton>
            <S.NoButton className="_hover03" id="exitNo">
              <Link to="/">Нет, остаться</Link>
            </S.NoButton>
          </S.FormGroup>
        </form>
      </S.PopupBlock>
    </S.PopupContainer>
  );
}

export default ExitFormPopup;