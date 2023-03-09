import { OrderDeliveryType } from 'types/order';

export enum DeliveryValuesEnum {
  /**
   * Доставка по России
   */
  DeliveryInRussia = 'deliveryInRussia',
  /**
   * Курьером по Москве
   */
  CourierInMoscow = 'courierInMoscow',
  /**
   * Самовывоз
   */
  Pickup = 'pickup',
}

export type DeliveryValueType = {
  /**
   * Текст для блока с итоговой ценой
   */
  text: string;
  /**
   * Цена доставки
   */
  price: number;
  /**
   * Текст для блока с формой
   */
  label: OrderDeliveryType;
};

export type DeliveryValuesType = Record<DeliveryValuesEnum, DeliveryValueType>;

export const deliveryValues: DeliveryValuesType = {
  deliveryInRussia: {
    text: 'Доставка по России — ',
    price: 350,
    label: 'Доставка по России — 350₽',
  },
  courierInMoscow: {
    text: 'Курьером по Москве —',
    price: 300,
    label: 'Курьером по Москве — 300₽',
  },
  pickup: {
    text: 'Самовывоз (пр-т Андропова, 18 корп. 3)',
    price: 0,
    label: 'Самовывоз (пр-т Андропова, 18 корп. 3)',
  },
};
