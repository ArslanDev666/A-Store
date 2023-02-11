import { ProductType } from './product';

export type CategoryType = {
  /**
   * Id категории
   */
  id: number;
  /**
   * Название категории
   */
  title: string;
  /**
   * Описание категории
   */
  description: string;
  /**
   * Товары категории
   */
  products: ProductType[];
};

export type ProductCategoryDataType = {
  /**
   * Массив категорий
   */
  groups: CategoryType[];
};
