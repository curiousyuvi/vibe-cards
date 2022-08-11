import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import CardList from "../components/CardList";
import { fetchBucket } from "../redux/actions/bucketActions";

const Bucket = () => {
  const dispatch = useDispatch();
  const { bucket_id } = useParams();
  useEffect(() => {
    if (bucket_id) dispatch(fetchBucket(bucket_id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return <CardList />;
};

export default Bucket;
