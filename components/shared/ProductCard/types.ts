export interface ProductTypes {
  id: string;
  image: string;
  description: string;
  price: number;
  old_price: null | number;
  qty: number;
}

export interface ProductCardPropTypes {
  item: ProductTypes;
}
