import { Text } from "@chakra-ui/react";
import React from "react";
import { Card } from "../interfaces/Card";

const CardListItem = ({ card }: { card: Card }) => {
  return (
    <button className="w-64 h-64">
      <div className="w-full h-full group p-4 flex flex-col justify-center items-center rounded-xl border">
        <img
          src={`http://i1.ytimg.com/vi/${card.id}/0.jpg`}
          alt=""
          className="w-full h-full rounded-xl"
        />
        <span className="my-2" />
        <Text className="text-xl">{card.name}</Text>
      </div>
    </button>
  );
};

export default CardListItem;
