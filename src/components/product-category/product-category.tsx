import React from 'react';

import { Gap } from '@alfalab/core-components/gap';

import { Product } from 'components/product/product';
import { SectionTitle } from 'components/ui/section-title';

import { CustomProductType } from 'types/product';
import { CategoryType } from 'types/product-category';

import styles from './product-category.module.css';

type PropsType = {
  /**
   * Название категории
   */
  title: CategoryType['title'];
  /**
   * Id категории
   */
  id: CategoryType['id'];
  /**
   * Описание категории
   */
  description: CategoryType['description'];
  /**
   * Товары категории
   */
  products: CategoryType['products'];
};

const ProductCategory = ({ description, products, title, id }: PropsType) => {
  return (
    <section data-test-id='product-category'>
      <SectionTitle title={title} description={description} colorTitle='primary' />

      <Gap size='6xl' />

      <ul className={styles.products}>
        {products.map((product: CustomProductType) => (
          <Product
            image={product.preview}
            title={product.title}
            price={product.price}
            subtitle={product.subtitle}
            id={product.id}
            key={product.id}
          />
        ))}
      </ul>
    </section>
  );
};

export { ProductCategory };
