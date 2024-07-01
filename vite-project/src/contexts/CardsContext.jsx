import { createContext, useState } from "react";

export const CardsContext = createContext(null);

const CardsProvider = ({ children }) => {

    const [cards, setCards] = useState([]);

    return (
        <CardsContext.Provider value = {{ cards, setCards }}>
            {children}
        </CardsContext.Provider>
    );
};

export default CardsProvider;