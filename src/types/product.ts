import { ParamsNamesProductType } from 'utils/functions/get-name-param';

export type ProductType = {
  /**
   * Id товара
   */
  id: number;
  /**
   * Изображение товара
   */
  preview: string;
  /**
   * Галерея товара
   */
  images: string[];
  /**
   * Название товара
   */
  title: string;
  /**
   * Цена товара
   */
  price: number;
  /**
   * Описание товара
   */
  description: string;
  /**
   * Доступные цвета товара
   */
  colors?: string[];
  /**
   * Доступные размеры товара
   */
  sizes?: string[];
  /**
   * Доступные модели телефонов (для чехлов)
   */
  models?: string[];
  /**
   * Наличие товара
   */
  availability: boolean;
};

export type CustomProductType = Omit<ProductType, 'models'> & {
  /**
   * Дополнительное название товара
   */
  subtitle: string;

  /**
   * Доступные номера стикеров
   */
  stickerNumbers?: number[];
};

export type ProductParamType = {
  label: string;
  value: string;
  key: ParamsNamesProductType;
};

export type CartProductType = Pick<ProductType, 'id' | 'preview' | 'price' | 'title'> & {
  /**
   * Количество товара в корзине
   */
  count: number;
  /**
   * Итоговая цена товара: Кол-во * цена товара
   */
  totalPrice: number;
  /**
   * Итоговая цена товара: Кол-во * цена товара
   */
  params: ProductParamType[];
  /**
   * Уникальный идентификатор, нужен для рендера списка товаров
   */
  key: string;
};
