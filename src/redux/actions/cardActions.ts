import { Card } from "../../interfaces/Card";
import CardAPI from "../../services/cardService";
import { actionTypes } from "../constants/actionTypes";


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

export const addCardAsync: (card: Card) => any = (card) => {
    return async (dispatch: any) => {
        await CardAPI.addCard(card)
        dispatch(fetchCards())
    }
}

export const updateCardAsync: (card: Card) => any = (card) => {
    return async (dispatch: any) => {
        await CardAPI.updateCard(card)
        dispatch(fetchCards())

    }
}

export const deleteCardAsync: (id: string) => any = (id) => {
    return async (dispatch: any) => {
        await CardAPI.deleteCard(id)
        dispatch(fetchCards())

    }
}

