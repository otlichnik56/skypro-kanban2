//import { Link } from "react-router-dom";
import '../../App.css';
import * as S from "../../components/shared.styled.js"
import { GlobalSignStyle } from '../../global.styled.js';

function LoginPage (){
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
                <S.EmailInput />
                <S.PasswordInput />
                <S.ModalButton><S.StyledBtmLink to="/">Войти</S.StyledBtmLink></S.ModalButton>
                <S.ModalFormGroup>
                  <p>Нужно зарегистрироваться?</p>
                  <S.StyledLink to="/reg">Регистрируйтесь здесь</S.StyledLink>
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