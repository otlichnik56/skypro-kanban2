import * as S from "./CardButton.styled.js"
import { Link } from "react-router-dom";

function CardButton({ id }) {
    return (
      <Link to={`/card/${id}`}>
        <S.CardButton>
          <S.Pointer />
          <S.Pointer />
          <S.Pointer />
        </S.CardButton>
      </Link>
    );
  }
  
export default CardButton;