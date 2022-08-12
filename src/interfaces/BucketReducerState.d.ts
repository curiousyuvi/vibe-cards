import { Bucket } from "./Bucket";

export type BucketReducerState = {
    buckets: Bucket[],
    bucket: Bucket,
}