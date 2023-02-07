import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from 'components/footer';
import { Header } from 'components/header';

import styles from './app-layout.module.css';

type PropsType = {
  /**
   * Будет ли отображаться футер
   * По умолчанию: true
   */
  hasFooter?: boolean;
};

const AppLayout = ({ hasFooter = true }: PropsType) => (
  <div className={styles.layout}>
    <Header />
    <div className={styles.content}>
      <Outlet />
    </div>
    {hasFooter && <Footer />}
  </div>
);

export { AppLayout };
