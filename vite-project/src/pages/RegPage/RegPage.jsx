import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../../components/shared.styled.js"
import { GlobalSignStyle } from '../../global.styled.js';
import { registerUser } from '../../services/api.js';
import { useUser } from "../../hooks/useUser.js";

function RegPage (){

    const { logout, logon } = useUser();

    useEffect(() => {
        logout();
    }, [logout]);

    const navigate = useNavigate();

    const [login, setLogin] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [regError, setRegError] = useState("");
  
    const handleGetUserClick = async () => {

        try{
            if(!login && !name && !password){
                setLoginError("Не все поля заполнены");
                return;
              }          
            const user = await registerUser({login: login, name: name, password: password});
            logon(user);
            setLogin("");
            setName("");
            setPassword("");
            setRegError("");
            navigate("/");
        } catch(error){
            setRegError(error.message);
        }
    }
  

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
                                <S.TextInput value={name} onChange={(event) => {setName(event.target.value)}} />
                                <S.EmailInput value={login} onChange={(event) => {setLogin(event.target.value)}} />
                                <S.PasswordInput value={password} onChange={(event) => {setPassword(event.target.value)}} />
                                {regError && <S.ModalError>{regError}</S.ModalError>}
                                <S.ModalButton onClick={handleGetUserClick}>
                                    Зарегистрироваться 
                                </S.ModalButton>
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