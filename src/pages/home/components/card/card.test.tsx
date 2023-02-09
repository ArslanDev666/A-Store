import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import testImageUrl from 'assets/images/home-page/banner-made-in-alfa.jpeg';

import { Card } from './card';

const TEST_TITLE = 'Съешь ещё этих мягких французских булок, да выпей чаю';
const TEST_HREF = '/card';

describe('Card component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<Card title={TEST_TITLE} image={testImageUrl} to={TEST_HREF} />, {
        wrapper: BrowserRouter,
      });

      expect(screen.getByTestId('card')).toBeInTheDocument();
    });
  });

  describe('Props tests', () => {
    it('should render title correctly', () => {
      render(<Card title={TEST_TITLE} image={testImageUrl} to={TEST_HREF} />, {
        wrapper: BrowserRouter,
      });

      expect(screen.getByText(TEST_TITLE)).toBeInTheDocument();
    });

    it('should add href attribute correctly', () => {
      render(<Card title={TEST_TITLE} image={testImageUrl} to={TEST_HREF} />, {
        wrapper: BrowserRouter,
      });

      expect(screen.getByRole('link')).toHaveAttribute('href', TEST_HREF);
    });

    it('should render image correctly', () => {
      render(<Card title={TEST_TITLE} image={testImageUrl} to={TEST_HREF} />, {
        wrapper: BrowserRouter,
      });

      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', testImageUrl);
    });
  });
});
