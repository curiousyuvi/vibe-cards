import axios from "axios";
import { Card } from "../interfaces/Card";

const useCardsAPI = () => {
  const cards_API_endpoint = process.env.REACT_APP_CARDS_ENDPOINT;
  const cardsAxiosInstance = axios.create({ baseURL: cards_API_endpoint });

  const getCards = () => {};
  const getCard = (id: string) => {};
  const deleteCard = (id: string) => {};
  const postCard = (card: Card) => {};

  return { getCards, getCard, deleteCard, postCard };
};

export default useCardsAPI;
