import React from 'react';

import { Amount } from '@alfalab/core-components/amount';
import { Divider } from '@alfalab/core-components/divider';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';

import { useAppSelector } from 'store';
import { cartSelector, cartTotalPriceSelector } from 'store/cart';

import styles from './cart-sidebar.module.css';

import { CartProduct } from '../cart-product';

const CartSidebar = () => {
  const products = useAppSelector(cartSelector);
  const totalPrice = useAppSelector(cartTotalPriceSelector);

  return (
    <div data-test-id='cart-sidebar' className={styles.sidebar}>
      <Divider />
      {!!products.length && (
        <ul className={styles.sidebarProducts}>
          {products.map((product) => {
            return (
              <li key={product.key}>
                <CartProduct product={product} />
              </li>
            );
          })}
        </ul>
      )}
      <Divider />
      <Gap size='m' />
      <Typography.Text view='primary-large' weight='bold' className={styles.totalPrice}>
        Сумма: <Amount value={totalPrice} currency='RUR' minority={1} bold='full' />
      </Typography.Text>
    </div>
  );
};

export { CartSidebar };
