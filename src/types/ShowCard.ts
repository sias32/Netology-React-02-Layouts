type cardType = {
  id: string;
  name: string;
  price: string;
  color: string;
  img: string;
};

interface ShopCardProps {
  card: cardType;
}

export default ShopCardProps;
export type { cardType };
