import Column from '../Column/Column';
//import data from '../../lib/mockData.js';
//import {cardList} from '../../data.js';
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



/**
 {statusList.map((status) => (
    <Column
      key={status}
      title={status}
      cardList={cards.filter((card) => card.status === status)}
    />
  ))}


                    {data.map((column, index) => (
                        <Column key={index} title={column.title} cards={column.cards} />
                    ))}


    {statusList.map((status) => {
                    const filteredCards = cardList.filter((card) => card.status === status);
                    return (
                      <Column
                        key={status}
                        title={status}
                        cards={filteredCards} 
                      />
                    );
                  })}

 */