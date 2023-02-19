import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { productMock } from 'mocks/data/product';

import { ProductGallery } from './product-gallery';

const testGallery = {
  preview: 0,
  updatePreview: 1,
  class: 'gallery',
};

describe('ProductGallery component', () => {
  const handleClickMock = jest.fn();

  describe('Render tests', () => {
    it('should render correctly', () => {
      render(
        <ProductGallery
          initialPreview={testGallery.preview}
          handleChangePreview={handleClickMock}
          images={productMock.images}
          title={productMock.title}
        />
      );

      expect(screen.getByTestId('product-gallery')).toBeInTheDocument();
    });
  });

  describe('Props tests', () => {
    it('should handleChangePreview work correctly', () => {
      const { rerender } = render(
        <ProductGallery
          initialPreview={testGallery.preview}
          handleChangePreview={handleClickMock}
          images={productMock.images}
          title={productMock.title}
        />
      );

      /**
       * Проверяем, стоит ли изначальная картинка
       */
      expect(screen.getByTestId('product-gallery-preview')).toHaveAttribute(
        'src',
        productMock.images[testGallery.preview]
      );

      /**
       * Проверяем, вызывалась ли функция переключения превью
       */

      fireEvent.click(screen.getAllByRole('tab')[testGallery.updatePreview]);
      expect(handleClickMock).toHaveBeenCalledTimes(1);

      /**
       * Обновляем превью
       */
      rerender(
        <ProductGallery
          initialPreview={testGallery.updatePreview}
          handleChangePreview={handleClickMock}
          images={productMock.images}
          title={productMock.title}
        />
      );

      /**
       * Проверяем поменялась ли выбранная картинка
       */

      expect(screen.getByTestId('product-gallery-preview')).toHaveAttribute(
        'src',
        productMock.images[testGallery.updatePreview]
      );

      /**
       * Проверяем активное состояние выбранной картинки
       */
      expect(screen.getAllByRole('tab')[testGallery.updatePreview]).toHaveAttribute(
        'aria-selected',
        'true'
      );
    });

    it('should render images correctly', () => {
      render(
        <ProductGallery
          initialPreview={testGallery.preview}
          handleChangePreview={handleClickMock}
          images={productMock.images}
          title={productMock.title}
        />
      );

      const images = screen.getAllByTestId('product-gallery-image');

      images.forEach((image, index) => {
        expect(image).toHaveAttribute('src', productMock.images[index]);
      });
    });

    it('should add attribute alt with title value', () => {
      render(
        <ProductGallery
          initialPreview={testGallery.preview}
          handleChangePreview={handleClickMock}
          images={productMock.images}
          title={productMock.title}
        />
      );

      const image = screen.getAllByTestId('product-gallery-image')[0];

      expect(image).toHaveAttribute('alt', productMock.title);
    });

    it('should add className', () => {
      render(
        <ProductGallery
          initialPreview={testGallery.preview}
          handleChangePreview={handleClickMock}
          images={productMock.images}
          title={productMock.title}
          className={testGallery.class}
        />
      );

      expect(screen.getByTestId('product-gallery')).toHaveClass(testGallery.class);
    });
  });
});
