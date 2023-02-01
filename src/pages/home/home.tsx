import React from 'react';

import madeInAlfaImage from 'assets/images/home-page/banner-made-in-alfa.jpeg';
import ownDesignImage from 'assets/images/home-page/banner-own-design.jpeg';

import styles from './home.module.css';
import { Card } from './components';
import { ROUTES } from 'routes/constants';
import { Typography } from '@alfalab/core-components/typography';

const HomePage = () => {
  return (
    <div className={styles.root}>
      <Typography.Title tag='h1' hidden>
        A-Store
      </Typography.Title>

      <Card
        image={madeInAlfaImage}
        title='Сделано в Альфе'
        to={ROUTES['made-in-alfa']}
      />
      <Card
        image={ownDesignImage}
        title='Свой дизайн'
        to={ROUTES['own-design']}
      />
    </div>
  );
};

export { HomePage };
