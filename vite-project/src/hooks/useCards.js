import { useContext } from "react";
import { CardsContext } from "../contexts/CardsContext";

export const useCards = () => {
    return useContext(CardsContext);
}