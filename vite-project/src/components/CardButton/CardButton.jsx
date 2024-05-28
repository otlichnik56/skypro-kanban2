import * as S from "./CardButton.styled.js"
import { Link } from "react-router-dom";

function CardButton({ id }) {
    return (
      <Link to={`/card/${id}`}>
        <S.CardButton>
          <div></div>
          <div></div>
          <div></div>
        </S.CardButton>
      </Link>
    );
  }
  
export default CardButton;