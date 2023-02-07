import React from 'react';

import { Typography } from '@alfalab/core-components/typography';

import { Container } from 'components/ui/container';

import styles from './footer.module.css';

const CURRENT_YEAR = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Container>
        <Typography.Text weight='medium'>
          © ООО «Альфа Фьюче Пипл», {CURRENT_YEAR}
        </Typography.Text>
      </Container>
    </footer>
  );
};

export { Footer };
