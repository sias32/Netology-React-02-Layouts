import React from "react";
import ListViewProps from "../types/ListView";

type Props = Readonly<ListViewProps>;

const ListView: React.FC<Props> = ({ items }) => {
  return (
    <ul className="ListView">
      {items.map((item) => (
        <li key={item.id}>
          <img src={item.img} alt={item.name + " " + item.color} />
          <p className="name">{item.name}</p>
          <p className="color">{item.color}</p>
          <p className="price">${item.price}</p>
          <button>add to cart</button>
        </li>
      ))}
    </ul>
  );
};

export default ListView;
