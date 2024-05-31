import Column from '../Column/Column';
import {statusList} from '../../data.js';
import * as S from "./Content.styled.js"
import { Contener } from "../shared.styled.js"
import { ColumnTitle } from '../Column/Column.styled.js';

function Content({ isLoading, cards }) {  
    
    return (
      
        <S.Main>
          <Contener>
            <S.MainBlock>

              {isLoading ? (
                <ColumnTitle>Данные загружаются...</ColumnTitle> 
              ) : (
                <>                  
                  <S.MainContent>
                  {statusList.map((status) => (
                    <Column
                      key={status}
                      title={status}
                      cards={cards.filter((card) => card.status === status)}
                    />
                  ))}
                  </S.MainContent>
                </>
              )}

            </S.MainBlock>
          </Contener>
        </S.Main>
    );
    
}

export default Content;


