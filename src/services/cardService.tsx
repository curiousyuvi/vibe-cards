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
const deleteCard = async (id: string) => {
  try {
    await axiosInstance({ url: `/cards/${id}`, method: "delete" });
  } catch (err) {
    console.log("error:", err);
  }
};
const addCard = async (card: Card) => {
  try {
    await axiosInstance({ url: "/cards", method: "post", data: card });
  } catch (err) {
    console.log("error:", err);
  }
};
const updateCard = async (card: Card) => {
  try {
    await axiosInstance({
      url: `/cards/${card.id}`,
      method: "put",
      data: card,
    });
  } catch (err) {
    console.log("error:", err);
  }
};

const CardAPI = {
  getCards,
  deleteCard,
  addCard,
  updateCard,
};

export default CardAPI;
