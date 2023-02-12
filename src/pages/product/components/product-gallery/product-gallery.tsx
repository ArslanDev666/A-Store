import React from 'react';
import cn from 'classnames';

import styles from './product-gallery.module.css';

type PropsType = {
  /**
   * Выбранное изображение
   */
  initialPreview: number;
  /**
   * Функция для смены изображения
   */
  handleChangePreview: (index: number) => void;
  /**
   * Изображения для галерии
   */
  images: string[];
  /**
   * Alt для изображения
   */
  title: string;
  /**
   * Дополнительные классы
   */
  className?: string;
};

const ProductGallery = ({
  initialPreview,
  handleChangePreview,
  images,
  title,
  className,
}: PropsType) => {
  const handleImageClick = (index: number) => {
    handleChangePreview(index);
  };

  return (
    <div
      data-test-id='product-gallery'
      className={cn(styles.galleryWrapper, className)}
    >
      <div className={styles.galleryPreview}>
        <img
          src={images[initialPreview]}
          alt={title}
          data-test-id='product-gallery-preview'
        />
      </div>

      <ul className={styles.galleryImages}>
        {images.map((image, index) => (
          <li key={image}>
            <button
              className={cn(styles.galleryImage, {
                [styles.galleryImageActive]: index === initialPreview,
              })}
              onClick={() => handleImageClick(index)}
              role='tab'
              aria-selected={index === initialPreview}
            >
              <img
                src={image}
                alt={title}
                data-test-id='product-gallery-image'
              />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ProductGallery };
