import React from "react";
import CardsViewProps from "../../types/CardsView.types";
import ShopCard from "./ShopCard";

type Props = Readonly<CardsViewProps>;

const CardsView: React.FC<Props> = ({ cards }) => {
  return (
    <div className="CardsView">
      {cards.map((card) => (
        <ShopCard key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardsView;
