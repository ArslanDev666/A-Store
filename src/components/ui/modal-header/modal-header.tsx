import React from 'react';

import { Divider } from '@alfalab/core-components/divider';
import { IconButton } from '@alfalab/core-components/icon-button';
import { Typography } from '@alfalab/core-components/typography';

import { CloseLBlackIcon } from '@alfalab/icons-classic/CloseLBlackIcon';
import { ArrowLeftMediumMIcon } from '@alfalab/icons-glyph/ArrowLeftMediumMIcon';

import styles from './modal-header.module.css';

type PropsType = {
  /**
   * Заголовок в хедере
   */
  title: string;
  /**
   * Обработчик кнопки закрытия модального окна
   */
  handleCloseClick: () => void;
  /**
   * Обработчик для кнопки назад
   */
  handleBackClick?: () => void;
};

const ModalHeader = ({ handleCloseClick, handleBackClick, title }: PropsType) => {
  return (
    <>
      <div className={styles.header} data-test-id='modal-header'>
        <IconButton
          view='primary'
          icon={ArrowLeftMediumMIcon}
          onClick={handleBackClick}
          dataTestId='modal-header-back-button'
        />
        <Typography.Text
          tag='div'
          view='primary-medium'
          weight='bold'
          className={styles.headerTitle}
        >
          {title}
        </Typography.Text>
        <IconButton
          view='primary'
          icon={CloseLBlackIcon}
          onClick={handleCloseClick}
          dataTestId='modal-header-close-button'
        />
      </div>
      <Divider />
    </>
  );
};

export { ModalHeader };
