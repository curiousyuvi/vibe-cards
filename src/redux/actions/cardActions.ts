import { Card } from "../../interfaces/Card";
import CardAPI from "../../services/cardService";
import { actionTypes } from "../constants/actionTypes";

export const addCard = (card: Card) => {
    return {
        type: actionTypes.ADD_CARD,
        payload: card
    }
};

export const deleteCard = (id: string) => {
    return {
        type: actionTypes.DELETE_CARD,
        payload: id
    }
};

export const updateCard = (card: Card) => {
    return {
        type: actionTypes.UPDATE_CARD,
        payload: card
    }
};

export const getCard = (id: string) => {
    return {
        type: actionTypes.GET_CARD,
        payload: id
    }
};

export const getCards = (cards: Card[]) => {
    return {
        type: actionTypes.GET_CARDS,
        payload: cards
    }
};

export const fetchCards: () => any = () => {
    return async (dispatch: any) => {
        const cards = await CardAPI.getCards()
        dispatch(getCards(cards))
    }
}

