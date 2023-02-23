import { CartProductType } from 'types/product';

export type InitCartActionType = {
  products: CartProductType[];
  totalPrice: number;
};

export type AddCartActionType = {
  product: CartProductType;
};

export type PrepareAddPayloadType = Omit<CartProductType, 'key'>;

export type DecreaseProductCountActionType = CartProductType['key'];

export type IncreaseProductCountActionType = CartProductType['key'];

export type DeleteProductActionType = CartProductType['key'];
