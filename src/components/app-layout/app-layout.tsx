import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from 'components/header';
import { Footer } from 'components/footer';

import styles from './app-layout.module.css';

type PropsType = {
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
