import axios, { AxiosError } from 'axios';

import { PRODUCTS_API } from 'utils/const';

import { OrderType } from 'types/order';

export const createOrder = (order: OrderType): Promise<string> => {
  return axios
    .post<string>(`${PRODUCTS_API}/create-order`, order)
    .then((response) => {
      return response.data;
    })
    .catch((error: AxiosError) => {
      throw new Error(error.message);
    });
};
