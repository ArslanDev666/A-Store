import React from 'react';
import { Outlet } from 'react-router-dom';

import { Cart } from 'components/cart';
import { Footer } from 'components/footer';
import { Header } from 'components/header';

import styles from './app-layout.module.css';

type PropsType = {
  /**
   * Будет ли отображаться футер. По умолчанию: true
   */
  hasFooter?: boolean;
  /**
   * Будет ли отображаться иконка корзина. По умолчанию: true
   */
  hasCart?: boolean;
};

const AppLayout = ({ hasFooter = true, hasCart = true }: PropsType) => (
  <div className={styles.layout} data-test-id='app-layout'>
    <Header />
    <div className={styles.content}>
      <Outlet />
    </div>
    {hasFooter && <Footer />}
    {hasCart && (
      <div className={styles.cart}>
        <Cart />
      </div>
    )}
  </div>
);

export { AppLayout };
