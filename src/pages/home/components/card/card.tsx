import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@alfalab/core-components/typography';
import styles from './card.module.css';

type PropsType = {
  image: string;
  to: string;
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
