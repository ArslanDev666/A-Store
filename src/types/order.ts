export type OrderProductType = {
  id: number;
  totalPrice: number;
  totalCount: number;
  stickerNumber?: number;
  color?: string;
  size?: string;
  model?: string;
};

export type OrderDeliveryType =
  | 'Доставка по России — 350₽'
  | 'Курьером по Москве — 300₽'
  | 'Самовывоз (пр-т Андропова, 18 корп. 3)';

export type OrderType = {
  name: string;
  email: string;
  phone: string;
  address: string;
  comment?: string;
  deliveryType: OrderDeliveryType;
  paymentType: 'Банковская карта';
  products: OrderProductType[];
};
