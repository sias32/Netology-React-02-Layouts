import { productsType } from "./Store.types";

type cardsType = productsType;

interface CardsViewProps {
  cards: cardsType;
}

export default CardsViewProps;
export type { cardsType };
