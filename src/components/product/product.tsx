import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import { Amount } from '@alfalab/core-components/amount';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';

import { ProductType } from 'types/product';

import styles from './product.module.css';

type PropsType = {
  /**
   * id продукта, используется для генерации url
   */
  id: ProductType['id'];
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
  description?: string;
  /**
   * Цена товара
   */
  price: ProductType['price'];
};

const SIZE_IMAGE = 370;

const Product = memo(({ description, image, title, price, id }: PropsType) => {
  return (
    <Link to={`/products/${id}`} className={styles.product}>
      <div className={styles.productImage}>
        <img src={image} alt={title} width={SIZE_IMAGE} height={SIZE_IMAGE} />
      </div>
      <Gap size='s' />

      <Typography.TitleResponsive view='xsmall' tag='h2' font='styrene'>
        {title}
      </Typography.TitleResponsive>
      <Gap size='s' />

      {description && (
        <>
          <Typography.Text
            view='secondary-medium'
            tag='p'
            color='secondary'
            weight='medium'
            defaultMargins={false}
          >
            {description}
            Выберите один из восьми стикеров
          </Typography.Text>
          <Gap size='s' />
        </>
      )}

      <Typography.TitleResponsive view='xsmall' tag='div'>
        <Amount value={price} currency='RUR' minority={1} bold='full' />
      </Typography.TitleResponsive>
    </Link>
  );
});

export { Product };
