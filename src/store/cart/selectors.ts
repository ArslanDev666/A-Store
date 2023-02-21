import { RootState } from '..';

export const watchCartSelector = (state: RootState) => state.cart;

export const cartSelector = (state: RootState) => watchCartSelector(state).products;
export const cartTotalPriceSelector = (state: RootState) => watchCartSelector(state).totalPrice;
