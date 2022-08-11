import { useEffect } from "react";
import { useDispatch } from "react-redux";
import CardList from "../components/CardList";
import { fetchCards } from "../redux/actions/cardActions";

const Bucket = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCards());
  }, []);
  return <CardList />;
};

export default Bucket;
