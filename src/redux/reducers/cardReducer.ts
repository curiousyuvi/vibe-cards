import { Reducer } from "react"
import { AnyAction } from "redux"
import { CardReducerState } from "../../interfaces/CardReducerState"
import { actionTypes } from "../constants/actionTypes"

const initialState: CardReducerState = {
    cards: [],
    card: { id: "", name: "", bucketID: 0 },
    loading: true
}

const cardReducer: Reducer<CardReducerState | undefined, AnyAction> = (prevState = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_CARDS: return { ...prevState, cards: action.payload, loading: false }
        default: return prevState
    }
}

export default cardReducer