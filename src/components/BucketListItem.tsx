import { Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Bucket } from "../interfaces/Bucket";

const BucketListItem = ({ bucket }: { bucket: Bucket }) => {
  return (
    <Link to={`/${bucket.id}`}>
      <div className="w-64 h-64 group p-4 flex flex-col justify-center items-center rounded-xl border hover:bg-gradient-to-r from-indigo-50 to-pink-50">
        <img
          src="/bucket-clr.svg"
          alt=""
          className="h-24 w-24 hidden group-hover:flex"
        />
        <img
          src="/bucket-bw.svg"
          alt=""
          className="h-24 w-24 flex group-hover:hidden"
        />
        <span className="my-2" />
        <Text className="text-xl">{bucket.name}</Text>
      </div>
    </Link>
  );
};

export default BucketListItem;
