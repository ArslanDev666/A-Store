import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import { ProductGallery } from './product-gallery';

const TEST_INITIAL_PREVIEW = 0;
const TEST_UPDATE_PREVIEW = 2;
const TEST_CLASS = 'gallery';
const MOCK_PRODUCT = {
  id: 5,
  preview: 'http://qa-games.ru/astore/public/images/43306375.jpeg',
  images: [
    'http://qa-games.ru/astore/public/images/43306375.jpeg',
    'http://qa-games.ru/astore/public/images/25133982.png',
    'http://qa-games.ru/astore/public/images/93661622.png',
    'http://qa-games.ru/astore/public/images/1_3d.png',
    'http://qa-games.ru/astore/public/images/2_3d.png',
    'http://qa-games.ru/astore/public/images/45157942.png',
    'http://qa-games.ru/astore/public/images/Frame_118.png',
  ],
  title: 'Худи с бархатными стикерами',
  subtitle: 'Выберите один из восьми стикеров',
  price: 4199,
  description:
    'Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.',
  colors: ['white', 'black', 'red'],
  sizes: ['XS', 'S', 'M', 'L', 'XL'],
  stickerNumbers: [1, 2, 3, 4, 5, 6, 7, 8],
  availability: true,
};

describe('ProductGallery component', () => {
  const handleClickMock = jest.fn();

  describe('Render tests', () => {
    it('should render correctly', () => {
      render(
        <ProductGallery
          initialPreview={TEST_INITIAL_PREVIEW}
          handleChangePreview={handleClickMock}
          images={MOCK_PRODUCT.images}
          title={MOCK_PRODUCT.title}
        />
      );

      expect(screen.getByTestId('product-gallery')).toBeInTheDocument();
    });
  });

  describe('Props tests', () => {
    it('should handleChangePreview work correctly', () => {
      const { rerender } = render(
        <ProductGallery
          initialPreview={TEST_INITIAL_PREVIEW}
          handleChangePreview={handleClickMock}
          images={MOCK_PRODUCT.images}
          title={MOCK_PRODUCT.title}
        />
      );

      /**
       * Проверяем, стоит ли изначальная картинка
       */
      expect(screen.getByTestId('product-gallery-preview')).toHaveAttribute(
        'src',
        MOCK_PRODUCT.images[TEST_INITIAL_PREVIEW]
      );

      /**
       * Проверяем, вызывалась ли функция переключения превью
       */
      fireEvent.click(screen.getAllByRole('tab')[TEST_UPDATE_PREVIEW]);
      expect(handleClickMock).toHaveBeenCalledTimes(1);

      /**
       * Обновляем превью
       */
      rerender(
        <ProductGallery
          initialPreview={TEST_UPDATE_PREVIEW}
          handleChangePreview={handleClickMock}
          images={MOCK_PRODUCT.images}
          title={MOCK_PRODUCT.title}
        />
      );

      /**
       * Проверяем поменялась ли выбранная картинка
       */

      expect(screen.getByTestId('product-gallery-preview')).toHaveAttribute(
        'src',
        MOCK_PRODUCT.images[TEST_UPDATE_PREVIEW]
      );

      /**
       * Проверяем активное состояние выбранной картинки
       */
      expect(screen.getAllByRole('tab')[TEST_UPDATE_PREVIEW]).toHaveAttribute(
        'aria-selected',
        'true'
      );
    });

    it('should render images correctly', () => {
      render(
        <ProductGallery
          initialPreview={TEST_INITIAL_PREVIEW}
          handleChangePreview={handleClickMock}
          images={MOCK_PRODUCT.images}
          title={MOCK_PRODUCT.title}
        />
      );

      const images = screen.getAllByTestId('product-gallery-image');

      images.forEach((image, index) => {
        expect(image).toHaveAttribute('src', MOCK_PRODUCT.images[index]);
      });
    });

    it('should add attribute alt with title value', () => {
      render(
        <ProductGallery
          initialPreview={TEST_INITIAL_PREVIEW}
          handleChangePreview={handleClickMock}
          images={MOCK_PRODUCT.images}
          title={MOCK_PRODUCT.title}
        />
      );

      const image = screen.getAllByTestId('product-gallery-image')[0];

      expect(image).toHaveAttribute('alt', MOCK_PRODUCT.title);
    });

    it('should add className', () => {
      render(
        <ProductGallery
          initialPreview={TEST_INITIAL_PREVIEW}
          handleChangePreview={handleClickMock}
          images={MOCK_PRODUCT.images}
          title={MOCK_PRODUCT.title}
          className={TEST_CLASS}
        />
      );

      expect(screen.getByTestId('product-gallery')).toHaveClass(TEST_CLASS);
    });
  });
});
