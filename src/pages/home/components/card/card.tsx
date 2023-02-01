import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@alfalab/core-components/typography';
import styles from './card.module.css';

type PropsType = {
  /**
   * Ссылка на картинку карточки
   */
  image: string;
  /**
   * Ссылка на страницу,
   * на которую пользователь перейдет по клику на карточку
   */
  to: string;
  /**
   * Заголовок карточки,
   */
  title: string;
};

const Card = ({ image, title, to }: PropsType) => {
  return (
    <Link className={styles.card} to={to}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardContent}>
        <Typography.TitleResponsive
          weight='bold'
          view='medium'
          tag='h2'
          font='styrene'
        >
          {title}
        </Typography.TitleResponsive>
      </div>
    </Link>
  );
};

export { Card };
