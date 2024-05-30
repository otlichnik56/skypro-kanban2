import Column from '../Column/Column';
import {statusList} from '../../data.js';
import React, { useState, useEffect } from 'react';
import * as S from "./Content.styled.js"
import { Contener } from "../shared.styled.js"

function Content({ cards }) {  

    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false); 
      }, 2000);
    }, []); 

    if (isLoading) {
      return <p>Данные загружаются...</p>; 
    }
    
    return (
        <S.Main>
          <Contener>
            <S.MainBlock>

                <S.MainContent>
                {statusList.map((status) => (
                  <Column
                    key={status}
                    title={status}
                    cards={cards.filter((card) => card.status === status)}
                  />
                ))}
                </S.MainContent>

            </S.MainBlock>
          </Contener>
        </S.Main>
    );
    
}

export default Content;


