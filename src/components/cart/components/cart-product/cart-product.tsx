import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Amount } from '@alfalab/core-components/amount';
import { IconButton } from '@alfalab/core-components/icon-button';
import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';

import { CrossCircleMIcon } from '@alfalab/icons-glyph/CrossCircleMIcon';
import { MinusCircleMIcon } from '@alfalab/icons-glyph/MinusCircleMIcon';
import { PlusCircleMIcon } from '@alfalab/icons-glyph/PlusCircleMIcon';

import { CartProductType } from 'types/product';

import styles from './cart-product.module.css';

type PropsType = {
  product: CartProductType;
};

const IMAGE_SIZE = 70;

const CartProduct = ({ product }: PropsType) => {
  const { title, preview, count, totalPrice, params } = product;

  return (
    <div data-test-id='cart-product' className={styles.product}>
      <div className={styles.productImage}>
        <img src={preview} alt={title} width={IMAGE_SIZE} height={IMAGE_SIZE} />
      </div>
      <div className={styles.productInfoWrapper}>
        <div className={styles.productInfo}>
          <Typography.Text weight='bold' view='primary-medium'>
            <Link href='123' Component={RouterLink} underline={false}>
              {title}
            </Link>
          </Typography.Text>

          {!!params.length && (
            <div className={styles.productParams}>
              {params.map((param) => {
                return (
                  <Typography.Text key={param.label} view='secondary-medium'>
                    {param.label}: {param.value}
                  </Typography.Text>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.productCount}>
          <IconButton view='primary' size='xxs' icon={PlusCircleMIcon} className={styles.icon} />
          {count}
          <IconButton view='primary' size='xxs' icon={MinusCircleMIcon} className={styles.icon} />
        </div>
        <Typography.Text view='primary-medium' weight='bold' className={styles.productPriceWrapper}>
          <Amount
            value={totalPrice}
            currency='RUR'
            minority={1}
            bold='full'
            className={styles.productPrice}
          />
        </Typography.Text>
      </div>
      <IconButton view='primary' size='xxs' icon={CrossCircleMIcon} className={styles.icon} />
    </div>
  );
};

export { CartProduct };
