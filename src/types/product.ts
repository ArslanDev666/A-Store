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
  stickerNumbers: number[];
};
