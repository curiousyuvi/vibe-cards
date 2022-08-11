import React from "react";
import { useSelector } from "react-redux";
import { Bucket } from "../interfaces/Bucket";
import AddBucketButton from "./AddBucketButton";
import BucketListItem from "./BucketListItem";

const BucketList = () => {
  const buckets: Bucket[] = useSelector((state: any) => state.buckets.buckets);

  return (
    <div className="w-full h-full grid grid-cols-3 gap-6">
      <AddBucketButton />
      {buckets.map((bucket) => {
        return <BucketListItem bucket={bucket} key={bucket.id} />;
      })}
    </div>
  );
};

export default BucketList;
