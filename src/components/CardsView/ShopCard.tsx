import React from "react";
import ShopCardProps from "../../types/ShowCard";

type Props = Readonly<ShopCardProps>;

const ShopCard: React.FC<Props> = ({ card }) => {
  return (
    <div className="ShopCard">
      <p className="name">{card.name}</p>
      <p className="color">{card.color}</p>
      <div className="image">
        <img src={card.img} alt={card.name + " " + card.color} />
      </div>
      <div className="bottom">
        <p className="price">${card.price}</p>
        <button>add to cart</button>
      </div>
    </div>
  );
};

export default ShopCard;
