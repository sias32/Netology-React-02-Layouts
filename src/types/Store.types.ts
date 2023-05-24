type productsType = {
  id: string;
  name: string;
  price: string;
  color: string;
  img: string;
}[];

interface StoreProps {
  products: productsType;
}

export default StoreProps;
export type { productsType };
