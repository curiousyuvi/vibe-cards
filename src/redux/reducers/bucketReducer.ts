import { Reducer } from "react"
import { Action, AnyAction } from "redux"
import { BucketReducerState } from "../../interfaces/BucketReducerState"
import { actionTypes } from "../constants/actionTypes"

const initialState: BucketReducerState = {
    buckets: [],
    bucket: { id: 0, name: "" },
    loading: true
}

const bucketReducer: Reducer<BucketReducerState | undefined, AnyAction> = (prevState = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_BUCKETS: return { ...prevState, buckets: action.payload, loading: false }
        default: return prevState
    }
}

export default bucketReducer