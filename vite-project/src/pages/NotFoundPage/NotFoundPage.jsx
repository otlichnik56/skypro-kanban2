import { NotFoundContainer } from "../../components/shared.styled.js"
import { GlobalNotFoundStyle } from '../../global.styled.js';

function NotFoundPage (){
    return (
        <>
            <GlobalNotFoundStyle />
            <NotFoundContainer>
                <h1>404</h1>
                <p>Page not found</p>
            </NotFoundContainer>
        </>
    );
}
  
export default NotFoundPage;