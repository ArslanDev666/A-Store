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
   * Дополнительное название товара
   */
  subtitle: string;
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
  colors: string[];
  /**
   * Доступные размеры товара
   */
  sizes: string[];
  /**
   * Доступные номера стикеров
   */
  stickerNumbers: number[];
  /**
   * Наличие товара
   */
  availability: boolean;
};

export type SimpleProductType = Pick<
  ProductType,
  'id' | 'preview' | 'title' | 'price' | 'availability'
>;
