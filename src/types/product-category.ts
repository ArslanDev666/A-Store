import { CustomProductType } from './product';

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
  products: CustomProductType[];
};

export type ProductCategoryDataType = {
  /**
   * Массив категорий
   */
  groups: CategoryType[];
};
