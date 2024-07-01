import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../components/shared.styled.js";
import { GlobalSignStyle } from '../../global.styled.js';
import { loginUser } from "../../services/api.js";
import { useUser } from "../../hooks/useUser.js";
import { appRoutes } from "../../services/helper.js";

function LoginPage() {
  const { logout, logon, userData } = useUser();
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  useEffect(() => {
    if (userData) {
      navigate(appRoutes.MAIN);
    }
  }, [userData, navigate]);

  const handleGetUserClick = async () => {
    try {
      if (!login || !password) {
        setLoginError("Введите логин и пароль");
        return;
      }
      const user = await loginUser({ login, password });
      logon(user);
      setLogin("");
      setPassword("");
      setLoginError("");
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    <>
      <GlobalSignStyle />
      <S.Wrapper>
        <S.ContainerSign>
          <S.Modal>
            <S.ModalBlock>
              <S.ModalTtl>
                <h4>Вход</h4>
              </S.ModalTtl>
              <S.ModalForm>
                <S.EmailInput value={login} onChange={(event) => setLogin(event.target.value)} />
                <S.PasswordInput value={password} onChange={(event) => setPassword(event.target.value)} />
                {loginError && <S.ModalError>{loginError}</S.ModalError>}
                <S.ModalButton onClick={handleGetUserClick}>
                  Войти
                </S.ModalButton>
                <S.ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <S.StyledLink to={appRoutes.REG}>Регистрируйтесь здесь</S.StyledLink>
                </S.ModalFormGroup>
              </S.ModalForm>
            </S.ModalBlock>
          </S.Modal>
        </S.ContainerSign>
      </S.Wrapper>
    </>
  );
}

export default LoginPage;