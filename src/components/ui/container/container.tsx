import React, { ReactNode } from 'react';

import styles from './container.module.css';

type PropsType = {
  /**
   * Дочерние элементы
   */
  children: ReactNode;
};

const Container = ({ children }: PropsType) => {
  return <div className={styles.container}>{children}</div>;
};

export { Container };
