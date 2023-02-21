import { CartProductType } from 'types/product';

export const customProductMock = {
  id: 5,
  preview: 'http://qa-games.ru/astore/public/images/43306375.jpeg',
  images: [
    'http://qa-games.ru/astore/public/images/43306375.jpeg',
    'http://qa-games.ru/astore/public/images/25133982.png',
    'http://qa-games.ru/astore/public/images/93661622.png',
    'http://qa-games.ru/astore/public/images/1_3d.png',
    'http://ƒqa-games.ru/astore/public/images/2_3d.png',
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

export const productMock = {
  id: 3,
  preview: 'http://qa-games.ru/astore/public/images/15932051.jpeg',
  images: [
    'http://qa-games.ru/astore/public/images/15932051.jpeg',
    'http://qa-games.ru/astore/public/images/83549212.jpeg',
  ],
  title: 'Чехол с кардхолдером',
  description:
    'Чтобы карта всегда была под рукой. К чехлу мы сделали яркий стикер — вам решать, клеить его или нет.',
  price: 799,
  availability: false,
  models: [
    'iPhone 11',
    'iPhone 11 Pro',
    'iPhone 11 Pro Max',
    'iPhone 12',
    'iPhone 12 Pro',
    'iPhone 12 Pro Max',
    'iPhone 13',
    'iPhone 13 Pro',
    'iPhone 13 Pro Max',
    'iPhone 14',
    'iPhone 14 Plus',
    'iPhone 14 Pro',
    'iPhone 14 Pro Max',
  ],
};

export const cartProductMock: CartProductType = {
  id: 11,
  preview: 'http://qa-games.ru/astore/public/images/89787126.png',
  title: 'Худи с 3D-стикерами',
  price: 4099,
  count: 2,
  params: [],
  totalPrice: 8198,
  key: '123123',
};
