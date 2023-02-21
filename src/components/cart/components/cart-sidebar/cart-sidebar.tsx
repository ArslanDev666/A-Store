import React from 'react';

import { Divider } from '@alfalab/core-components/divider';

import { CartProductType } from 'types/product';

import styles from './cart-sidebar.module.css';

import { CartProduct } from '../cart-product';

const CartSidebar = () => {
  const product: CartProductType = {
    id: 11,
    preview: 'http://qa-games.ru/astore/public/images/89787126.png',
    title: 'Худи с 3D-стикерами',
    price: 4099,
    count: 2,
    params: [],
    totalPrice: 8198,
    key: '123123',
  };
  const products: CartProductType[] = [];

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
    </div>
  );
};

export { CartSidebar };
