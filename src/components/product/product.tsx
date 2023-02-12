import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Amount } from '@alfalab/core-components/amount';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';

import { getProductUrl } from 'utils/product-url';

import { CustomProductType, ProductType } from 'types/product';
import { CategoryType } from 'types/product-category';

import styles from './product.module.css';

type PropsType = {
  /**
   * id продукта, используется для генерации url
   */
  id: ProductType['id'];
  /**
   * id категории продукта, используется для генерации url
   */
  categoryId?: CategoryType['id'];
  /**
   * Превью товара
   */
  image: ProductType['preview'];
  /**
   * Название товара
   */
  title: ProductType['title'];
  /**
   * Описание товара, опционально
   */
  subtitle?: CustomProductType['subtitle'];
  /**
   * Цена товара
   */
  price: ProductType['price'];
};

const SIZE_IMAGE = 370;

const Product = memo(
  ({ subtitle, image, title, price, id, categoryId }: PropsType) => {
    return (
      <Link
        to={getProductUrl(id, categoryId)}
        className={styles.product}
        data-test-id='product'
      >
        <div className={styles.productImage}>
          <img src={image} alt={title} width={SIZE_IMAGE} height={SIZE_IMAGE} />
        </div>
        <Gap size='s' />

        <Typography.TitleResponsive view='xsmall' tag='h2' font='styrene'>
          {title}
        </Typography.TitleResponsive>
        <Gap size='s' />

        {subtitle && (
          <>
            <Typography.Text
              view='secondary-medium'
              tag='p'
              color='secondary'
              weight='medium'
              defaultMargins={false}
            >
              {subtitle}
            </Typography.Text>
            <Gap size='s' />
          </>
        )}

        <Typography.TitleResponsive view='xsmall' tag='div'>
          <Amount value={price} currency='RUR' minority={1} bold='full' />
        </Typography.TitleResponsive>
      </Link>
    );
  }
);

export { Product };
