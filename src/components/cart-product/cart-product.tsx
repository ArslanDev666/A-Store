import React, { memo } from 'react';
import { Link as RouterLink } from 'react-router-dom';

import { Amount } from '@alfalab/core-components/amount';
import { IconButton } from '@alfalab/core-components/icon-button';
import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';

import { CrossCircleMIcon } from '@alfalab/icons-glyph/CrossCircleMIcon';
import { MinusCircleMIcon } from '@alfalab/icons-glyph/MinusCircleMIcon';
import { PlusCircleMIcon } from '@alfalab/icons-glyph/PlusCircleMIcon';

import { useAppDispatch } from 'store';
import { cartActions } from 'store/cart';

import { getProductUrl } from 'utils/functions/product-url';

import { CartProductType } from 'types/product';

import styles from './cart-product.module.css';

type PropsType = {
  product: CartProductType;
};

const IMAGE_SIZE = 70;

const CartProduct = memo(({ product }: PropsType) => {
  const { title, preview, count, totalPrice, params, key } = product;

  const dispatch = useAppDispatch();

  const handleIncreaseProductClick = () => {
    dispatch(cartActions.increaseProduct(key));
  };
  const handleDecreaseProductClick = () => {
    dispatch(cartActions.decreaseProduct(key));
  };
  const handleDeleteProductClick = () => {
    dispatch(cartActions.deleteProduct(key));
  };

  return (
    <div data-test-id='cart-product' className={styles.product}>
      <div className={styles.productImage}>
        <img src={preview} alt={title} width={IMAGE_SIZE} height={IMAGE_SIZE} />
      </div>
      <div className={styles.productInfoWrapper}>
        <div className={styles.productInfo}>
          <Typography.Text weight='bold' view='primary-medium'>
            <Link
              href={getProductUrl(product.id)}
              Component={RouterLink}
              underline={false}
              target='_blank'
            >
              {title}
            </Link>
          </Typography.Text>

          {!!params.length && (
            <div className={styles.productParams} data-test-id='cart-product-params'>
              {params.map((param) => {
                return (
                  <Typography.Text
                    key={param.label}
                    view='secondary-medium'
                    dataTestId='cart-product-param'
                  >
                    {param.label}: {param.value}
                  </Typography.Text>
                );
              })}
            </div>
          )}
        </div>
        <div className={styles.productCount}>
          <IconButton
            dataTestId='card-product-decrease'
            view='primary'
            size='xxs'
            icon={MinusCircleMIcon}
            className={styles.icon}
            onClick={handleDecreaseProductClick}
          />
          <div className={styles.productCountValue}>{count}</div>
          <IconButton
            dataTestId='card-product-increase'
            view='primary'
            size='xxs'
            icon={PlusCircleMIcon}
            className={styles.icon}
            onClick={handleIncreaseProductClick}
          />
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
      <IconButton
        dataTestId='card-product-delete'
        view='primary'
        size='xxs'
        icon={CrossCircleMIcon}
        className={styles.icon}
        onClick={handleDeleteProductClick}
      />
    </div>
  );
});

export { CartProduct };
