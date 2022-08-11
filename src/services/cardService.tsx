import { Card } from "../interfaces/Card";
import { axiosInstance } from "./axiosInstance";

const getCards: () => Promise<Card[]> = async () => {
  try {
    const response = await axiosInstance({ url: "/cards", method: "get" });
    return response.data;
  } catch (err) {
    console.log("error:", err);
    return [];
  }
};
const getCard: (id: number) => Promise<Card> = async (id) => {
  const data: Card = { id: "", bucketID: 0, name: "" };
  return data;
};
const deleteCard = (id: string) => {};
const addCard = (card: Card) => {};
const updateCard = (card: Card) => {};

const CardAPI = {
  getCards,
  getCard,
  deleteCard,
  addCard,
  updateCard,
};

export default CardAPI;
