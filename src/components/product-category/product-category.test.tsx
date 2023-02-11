import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { ProductCategory } from './product-category';

const TEST_TITLE = 'Съешь ещё этих мягких французских булок, да выпей чаю';
const TEST_DESCRIPTION = 'Lorem, ipsum.';
const MOCK_PRODUCTS = [
  {
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
  },
  {
    id: 6,
    preview: 'http://qa-games.ru/astore/public/images/61646585.png',
    images: [
      'http://qa-games.ru/astore/public/images/61646585.png',
      'http://qa-games.ru/astore/public/images/29918301.png',
      'http://qa-games.ru/astore/public/images/23597101.png',
      'http://qa-games.ru/astore/public/images/79160052.png',
      'http://qa-games.ru/astore/public/images/34570797.png',
      'http://qa-games.ru/astore/public/images/95291281.png',
      'http://qa-games.ru/astore/public/images/1_3d.png',
      'http://qa-games.ru/astore/public/images/2_3d.png',
      'http://qa-games.ru/astore/public/images/45157942.png',
      'http://qa-games.ru/astore/public/images/Frame_117.png',
    ],
    title: 'Футболка с бархатными стикерами',
    subtitle: 'Все варианты — внутри',
    price: 1799,
    description:
      'Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.',
    colors: ['white', 'black', 'red', 'green', 'gray'],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    stickerNumbers: [1, 2, 3, 4, 5, 6, 7, 8],
    availability: true,
  },
  {
    id: 7,
    preview: 'http://qa-games.ru/astore/public/images/51168667.png',
    images: [
      'http://qa-games.ru/astore/public/images/51168667.png',
      'http://qa-games.ru/astore/public/images/54431023.png',
      'http://qa-games.ru/astore/public/images/18640580.png',
      'http://qa-games.ru/astore/public/images/11697722.png',
      'http://qa-games.ru/astore/public/images/95291281.png',
      'http://qa-games.ru/astore/public/images/1_3d.png',
      'http://qa-games.ru/astore/public/images/2_3d.png',
      'http://qa-games.ru/astore/public/images/45157942.png',
      'http://qa-games.ru/astore/public/images/Frame_119.png',
    ],
    title: 'Футболка оверсайз с бархатными стикерами',
    subtitle: 'Нажмите, чтобы выбрать стикер',
    price: 1799,
    description:
      'Выберите стикер, а мы перенесём его на ткань — как на фото. Одежду можно стирать в машинке при 30 °C, вывернув наизнанку. Гладить — с внутренней стороны. Посмотреть и потрогать все стикеры можно в A-Store на Технопарке. А ещё там можно добавить сразу несколько стикеров на одну вещь.',
    colors: ['white', 'black', 'red', 'gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    stickerNumbers: [1, 2, 3, 4, 5, 6, 7, 8],
    availability: true,
  },
];

describe('ProductCategory component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(
        <ProductCategory
          title={TEST_TITLE}
          description={TEST_DESCRIPTION}
          products={MOCK_PRODUCTS}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByTestId('product-category')).toBeInTheDocument();
    });
  });

  describe('Props tests', () => {
    it('should render title correctly', () => {
      render(
        <ProductCategory
          title={TEST_TITLE}
          description={TEST_DESCRIPTION}
          products={MOCK_PRODUCTS}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByText(TEST_TITLE)).toBeInTheDocument();
    });

    it('should render description correctly', () => {
      render(
        <ProductCategory
          title={TEST_TITLE}
          description={TEST_DESCRIPTION}
          products={MOCK_PRODUCTS}
        />,
        { wrapper: BrowserRouter }
      );

      expect(screen.getByText(TEST_DESCRIPTION)).toBeInTheDocument();
    });

    it('should render list product correctly', () => {
      render(
        <ProductCategory
          title={TEST_TITLE}
          description={TEST_DESCRIPTION}
          products={MOCK_PRODUCTS}
        />,
        { wrapper: BrowserRouter }
      );

      const titles = screen.getAllByRole('heading', { level: 2 });

      MOCK_PRODUCTS.forEach((product) => {
        const titleEl = titles.find((el) => el.textContent === product.title);

        expect(titleEl).toBeInTheDocument();
      });
    });
  });
});
