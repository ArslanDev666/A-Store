import { CaseReducer, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

import { CartProductType, CustomProductType, ProductType } from 'types/product';

import {
  AddCartActionType,
  DecreaseProductCountActionType,
  DeleteProductActionType,
  IncreaseProductCountActionType,
  InitCartActionType,
  PrepareAddPayloadType,
} from './types';

type StateProductType = ProductType | CustomProductType | null;

export default StateProductType;

export type ProductStateType = {
  products: CartProductType[];
  totalPrice: number;
};

export const initialState: ProductStateType = {
  products: [],
  totalPrice: 0,
};

const NAME = 'cart';

const init: CaseReducer<ProductStateType, PayloadAction<InitCartActionType>> = (state, action) => {
  state.products = action.payload.products;
  state.totalPrice = action.payload.totalPrice;
};

const add: CaseReducer<ProductStateType, PayloadAction<AddCartActionType>> = (state, action) => {
  const { product } = action.payload;

  state.totalPrice += product.price;

  const findProducts = state.products.filter((item) => {
    return item.id === product.id;
  });

  const findProduct = findProducts.find((item) => {
    return JSON.stringify(item.params) === JSON.stringify(product.params);
  });

  if (findProduct) {
    const findItemIndex = state.products.findIndex((item) => item.key === findProduct.key);

    state.products[findItemIndex].count += 1;
    state.products[findItemIndex].totalPrice += findProduct.price;
    return;
  }
  state.products = [...state.products, product];
};

const prepareAdd = (product: PrepareAddPayloadType): { payload: AddCartActionType } => {
  return {
    payload: { product: { ...product, key: uuidv4() } },
  };
};

const increaseProduct: CaseReducer<
  ProductStateType,
  PayloadAction<IncreaseProductCountActionType>
> = (state, action) => {
  const key = action.payload;

  const findItemIndex = state.products.findIndex((item) => item.key === key);
  const product = state.products[findItemIndex];

  state.totalPrice += product.price;

  state.products[findItemIndex].count += 1;
  state.products[findItemIndex].totalPrice += product.price;
};

const decreaseProduct: CaseReducer<
  ProductStateType,
  PayloadAction<DecreaseProductCountActionType>
> = (state, action) => {
  const key = action.payload;

  const findItemIndex = state.products.findIndex((item) => item.key === key);

  const product = state.products[findItemIndex];

  state.totalPrice -= product.price;

  if (product.count - 1 === 0) {
    state.products = state.products.filter((item) => item.key !== key);
    return;
  }

  state.products[findItemIndex].count -= 1;
  state.products[findItemIndex].totalPrice -= product.price;
};

const deleteProduct: CaseReducer<ProductStateType, PayloadAction<DeleteProductActionType>> = (
  state,
  action
) => {
  const key = action.payload;

  const findItemIndex = state.products.findIndex((item) => item.key === key);

  const product = state.products[findItemIndex];

  state.totalPrice -= product.price;
  state.products = state.products.filter((item) => item.key !== key);
};

export const { reducer: cartReducer, actions: cartActions } = createSlice({
  name: NAME,
  initialState: initialState,
  reducers: {
    init,
    add: {
      reducer: add,
      prepare: prepareAdd,
    },
    increaseProduct,
    decreaseProduct,
    deleteProduct,
  },
});
