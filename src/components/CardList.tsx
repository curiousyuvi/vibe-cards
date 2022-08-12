import React from "react";
import { useSelector } from "react-redux";
import { Card } from "../interfaces/Card";
import AddCardButton from "./AddCardButton";
import CardListItem from "./CardListItem";

const CardList = () => {
  const cards: Card[] = useSelector((state: any) => state.cards.cards);

  return (
    <div className="w-full h-full grid grid-cols-3 gap-6">
      <AddCardButton />
      {cards.map((card) => {
        return <CardListItem card={card} key={card.id} />;
      })}
    </div>
  );
};

export default CardList;
