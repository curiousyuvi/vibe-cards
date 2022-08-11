import { Bucket } from "../../interfaces/Bucket";
import BucketAPI from "../../services/bucketService";
import { actionTypes } from "../constants/actionTypes";
import { fetchCards } from "./cardActions";


export const getBuckets = (buckets: Bucket[]) => {
    return {
        type: actionTypes.GET_BUCKETS,
        payload: buckets
    }
};

export const getBucket = (bucket: Bucket) => {
    return {
        type: actionTypes.GET_BUCKET,
        payload: bucket
    }
};


export const fetchBuckets: () => any = () => {
    return async (dispatch: any) => {
        const buckets = await BucketAPI.getBuckets()
        dispatch(getBuckets(buckets))
    }
}

export const fetchBucket: (id: string) => any = (id) => {
    return async (dispatch: any) => {
        const bucket = await BucketAPI.getBucket(id)
        dispatch(getBucket(bucket))
        dispatch(fetchCards(bucket.id))
    }
}


export const addBucketAsync: (bucket: Bucket) => any = (bucket) => {
    return async (dispatch: any) => {
        await BucketAPI.addBucket(bucket)
        dispatch(fetchBuckets())
    }
}

export const updateBucketAsync: (bucket: Bucket) => any = (bucket) => {
    return async (dispatch: any) => {
        await BucketAPI.updateBucket(bucket)
        dispatch(fetchBuckets())
    }
}

export const deleteBucketAsync: (id: string) => any = (id) => {
    return async (dispatch: any) => {
        await BucketAPI.deleteBucket(id)
        dispatch(fetchBuckets())
    }
}



