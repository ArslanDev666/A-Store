import React from 'react';

import { Typography } from '@alfalab/core-components/typography';

import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Typography.Text weight='medium'>
        © ООО «Альфа Фьюче Пипл», 2022
      </Typography.Text>
    </footer>
  );
};

export { Footer };
