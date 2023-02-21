import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { CartProductType } from 'types/product';

import { CartProduct } from './cart-product';

describe('CardProduct tests', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      const product: CartProductType = {
        id: 11,
        preview: 'http://qa-games.ru/astore/public/images/89787126.png',
        title: 'Худи с 3D-стикерами',
        price: 4099,
        count: 2,
        params: [],
        totalPrice: 8198,
        key: '123123',
      };

      render(<CartProduct product={product} />, { wrapper: BrowserRouter });

      expect(screen.getByTestId('cart-product')).toBeInTheDocument();
    });
  });
});
