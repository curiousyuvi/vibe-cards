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

const getBucket: (id: string) => Promise<Bucket> = async (id) => {
  try {
    const response = await axiosInstance({
      url: `/buckets/${id}`,
      method: "get",
    });
    return response.data;
  } catch (err) {
    console.log("error:", err);
    return [];
  }
};

const deleteBucket = async (id: string) => {
  try {
    await axiosInstance({ url: `/buckets/${id}`, method: "delete" });
  } catch (err) {
    console.log("error:", err);
  }
};
const addBucket = async (bucket: Bucket) => {
  try {
    await axiosInstance({ url: "/buckets", method: "post", data: bucket });
  } catch (err) {
    console.log("error:", err);
  }
};
const updateBucket = async (bucket: Bucket) => {
  try {
    await axiosInstance({
      url: `/buckets/${bucket.id}`,
      method: "put",
      data: bucket,
    });
  } catch (err) {
    console.log("error:", err);
  }
};

const BucketAPI = {
  getBuckets,
  deleteBucket,
  addBucket,
  updateBucket,
  getBucket,
};

export default BucketAPI;
