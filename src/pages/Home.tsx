import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BucketList from "../components/BucketList";
import { fetchBuckets } from "../redux/actions/bucketActions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBuckets());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <BucketList />;
};

export default Home;
