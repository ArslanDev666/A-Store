import React, { useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';

import { Container } from 'components/ui/container';

import { getProduct } from 'utils/get-product';

import styles from './product.module.css';

import { ProductGallery } from './components/product-gallery';

type ParamsType = {
  /**
   * Id товара
   */
  productId: string;
  /**
   * Id категории
   */
  categoryId: string;
};

const ProductPage = () => {
  const { productId, categoryId } = useParams<ParamsType>();
  const [selectPreview, setSelectPreview] = useState(0);

  const product = useMemo(() => {
    return getProduct(categoryId, productId);
  }, [categoryId, productId]);

  if (!product) return null;

  return (
    <div data-test-id='product-page'>
      <Typography.Title tag='h1' hidden>
        {product.title}
      </Typography.Title>

      <Container>
        <ProductGallery
          initialPreview={selectPreview}
          handleChangePreview={setSelectPreview}
          images={product.images}
          title={product.title}
          className={styles.gallery}
        />
      </Container>
      <Gap size='8xl' />
    </div>
  );
};

export { ProductPage };
