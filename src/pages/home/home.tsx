import React from 'react';

import { Typography } from '@alfalab/core-components/typography';

import { ROUTES } from 'routes/constants';

import madeInAlfaImage from 'assets/images/home-page/banner-made-in-alfa.jpeg';
import ownDesignImage from 'assets/images/home-page/banner-own-design.jpeg';

import styles from './home.module.css';

import { Card } from './components';

const HomePage = () => {
  return (
    <div className={styles.root} data-test-id='home-page'>
      <Typography.Title tag='h1' hidden>
        A-Store
      </Typography.Title>

      <Card image={madeInAlfaImage} title='Сделано в Альфе' to={ROUTES.madeInAlfa} />
      <Card image={ownDesignImage} title='Свой дизайн' to={ROUTES.ownDesign} />
    </div>
  );
};

export { HomePage };
