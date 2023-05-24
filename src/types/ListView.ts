import { productsType } from "./Store.types";

type itemsType = productsType;

interface ListViewProps {
  items: itemsType;
}

export default ListViewProps;
export type { itemsType };
