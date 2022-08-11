import { AsyncThunkAction } from "@reduxjs/toolkit";
import { Dispatch } from "react";
import { Action, AnyAction } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { Bucket } from "../../interfaces/Bucket";
import { CardReducerState } from "../../interfaces/CardReducerState";
import BucketAPI from "../../services/bucketService";
import { actionTypes } from "../constants/actionTypes";

export const addBucket = (bucket: Bucket) => {
    return {
        type: actionTypes.ADD_BUCKET,
        payload: bucket
    }
};

export const deleteBucket = (id: string) => {
    return {
        type: actionTypes.DELETE_BUCKET,
        payload: id
    }
};

export const updateBucket = (bucket: Bucket) => {
    return {
        type: actionTypes.UPDATE_BUCKET,
        payload: bucket
    }
};

export const getBucket = (id: string) => {
    return {
        type: actionTypes.GET_BUCKET,
        payload: id
    }
};

export const getBuckets = (buckets: Bucket[]) => {
    return {
        type: actionTypes.GET_BUCKETS,
        payload: buckets
    }
};

// export type AsyncAction = (dispatch: (action: Action) => any) => void;

export const fetchBuckets: () => any = () => {
    return async (dispatch: any) => {
        const buckets = await BucketAPI.getBuckets()
        dispatch(getBuckets(buckets))
    }
}

