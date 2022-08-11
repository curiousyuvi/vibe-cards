import { Bucket } from "../interfaces/Bucket";
import { axiosInstance } from "./axiosInstance";

const getBuckets: () => Promise<Bucket[]> = async () => {
  try {
    const response = await axiosInstance({ url: "/buckets", method: "get" });
    return response.data;
  } catch (err) {
    console.log("error:", err);
    return [];
  }
};
const getBucket = (id: string) => {};
const deleteBucket = (id: string) => {};
const addBucket = (card: Bucket) => {};
const updateBucket = (card: Bucket) => {};

const BucketAPI = {
  getBuckets,
  getBucket,
  deleteBucket,
  addBucket,
  updateBucket,
};

export default BucketAPI;
