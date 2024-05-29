import '../../App.css';
import * as S from "../../components/shared.styled.js"
import { GlobalSignStyle } from '../../global.styled.js';

function RegPage (){
    return (
        <>
            <GlobalSignStyle />
            <S.Wrapper>
                <S.ContainerSign>
                    <S.Modal>
                        <S.ModalBlock>
                            <S.ModalTtl>
                                <h4>Регистрация</h4>
                            </S.ModalTtl>
                            <S.ModalForm>
                                <S.TextInput />
                                <S.EmailInput />
                                <S.PasswordInput />
                                <S.ModalButton><S.StyledBtmLink to="/">Зарегистрироваться</S.StyledBtmLink> </S.ModalButton>
                                <S.ModalFormGroup>
                                    <p>Уже есть аккаунт?  
                                        <S.StyledLink to="/login">Войдите здесь</S.StyledLink>
                                    </p>
                                </S.ModalFormGroup>
                            </S.ModalForm>
                        </S.ModalBlock>
                    </S.Modal>
                </S.ContainerSign>
            </S.Wrapper>
        </>
    );
}
  
export default RegPage;