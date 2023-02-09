import React from 'react';
import cn from 'classnames';

import { Typography } from '@alfalab/core-components/typography';

import styles from './section-title.module.css';

type PropsType = {
  /**
   * Текст для Заголовка
   */
  title: string;
  /**
   * Текст для описания, которое идёт после заголовка. Опционально
   */
  description?: string;
  /**
   * Вариант цвета для текста заголовка. Опционально
   */
  colorTitle?: 'primary' | 'default';
};

const SectionTitle = ({
  colorTitle = 'default',
  description,
  title,
}: PropsType) => {
  return (
    <div className={styles.root}>
      <Typography.TitleResponsive
        view='large'
        tag='h2'
        font='styrene'
        weight='bold'
        className={cn(styles.title, {
          [styles.titlePrimary]: colorTitle === 'primary',
          [styles.titleDefault]: colorTitle === 'default',
        })}
      >
        {title}
      </Typography.TitleResponsive>
      {description && (
        <Typography.Text
          view='component'
          className={styles.description}
          tag='p'
          weight='medium'
          defaultMargins={false}
        >
          {description}
        </Typography.Text>
      )}
    </div>
  );
};

export { SectionTitle };
