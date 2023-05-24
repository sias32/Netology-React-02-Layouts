import React, { useState } from "react";
import StoreProps from "../types/Store.types";
import IconSwitch from "./IconSwitch";
import { iconType, onSwitchType } from "../types/IconSwitch.types";
import ListView from "./ListView";
import CardsView from "./CardsView/CardsView";

type Props = Readonly<StoreProps>;

const defaultIcon: iconType = "view_list";

const Store: React.FC<Props> = ({ products }) => {
  const [icon, setIcon] = useState<iconType>(defaultIcon);

  const onSwitch: onSwitchType = () => {
    icon === "view_list" ? setIcon("view_module") : setIcon("view_list");
  };

  return (
    <>
      <IconSwitch icon={icon} onSwitch={onSwitch} />
      {icon !== defaultIcon ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}
    </>
  );
};

export default Store;
