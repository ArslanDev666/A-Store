import React from 'react';
import { Link } from 'react-router-dom';
import { ListMIcon } from '@alfalab/icons-glyph/ListMIcon';

import { PATHS } from 'routes/constants';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to={PATHS['main-page']} className={styles.logo}>
        A-Store
      </Link>

      <button className={styles.menuToggle} type="button">
        <span>меню</span>
        <ListMIcon />
      </button>
    </header>
  );
};

export { Header };
