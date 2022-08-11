import { Card } from "../../interfaces/Card";
import CardAPI from "../../services/cardService";
import { actionTypes } from "../constants/actionTypes";


export const getCards = (cards: Card[]) => {
    return {
        type: actionTypes.GET_CARDS,
        payload: cards
    }
};

export const fetchCards: (bucketID: string) => any = (bucketID) => {
    return async (dispatch: any) => {
        const cards = await CardAPI.getCards(bucketID)
        dispatch(getCards(cards))
    }
}

export const addCardAsync: (card: Card, bucketID: string) => any = (card, bucketID) => {
    return async (dispatch: any) => {
        await CardAPI.addCard(card)
        dispatch(fetchCards(bucketID))
    }
}

export const updateCardAsync: (card: Card, bucketID: string) => any = (card, bucketID) => {
    return async (dispatch: any) => {
        await CardAPI.updateCard(card)
        dispatch(fetchCards(bucketID))

    }
}

export const deleteCardAsync: (id: string, bucketID: string) => any = (id, bucketID) => {
    return async (dispatch: any) => {
        await CardAPI.deleteCard(id)
        dispatch(fetchCards(bucketID))

    }
}

