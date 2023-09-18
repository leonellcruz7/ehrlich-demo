export interface ProductTypes {
  image: string;
  description: string;
  price: number;
  old_price: null | number;
}

export interface ProductCardPropTypes {
  item: ProductTypes;
}
