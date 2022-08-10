import axios from "axios";
import { Bucket } from "../interfaces/Buckets";

const useBucketsAPI = () => {
  const buckets_API_endpoint = process.env.REACT_APP_BUCKETS_ENDPOINT;
  const bucketsAxiosInstance = axios.create({ baseURL: buckets_API_endpoint });

  const getBuckets = () => {};
  const getBucket = (id: string) => {};
  const deleteBucket = (id: string) => {};
  const postBucket = (card: Bucket) => {};

  return { getBuckets, getBucket, deleteBucket, postBucket };
};

export default useBucketsAPI;
