import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import BucketList from "../components/BucketList";
import { fetchBuckets } from "../redux/actions/bucketActions";
import { fetchCards } from "../redux/actions/cardActions";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBuckets());
    dispatch(fetchCards());
  }, []);
  return <BucketList />;
};

export default Home;
