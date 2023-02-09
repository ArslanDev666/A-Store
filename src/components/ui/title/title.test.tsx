import { render, screen } from '@testing-library/react';

import { Title } from './title';

const TEST_TEXT = 'Съешь ещё этих мягких французских булок, да выпей чаю';

describe('Title component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<Title>{TEST_TEXT}</Title>);

      expect(screen.getByTestId('title')).toBeInTheDocument();
    });
  });
  describe('Props tests', () => {
    it('should render children', () => {
      render(<Title>{TEST_TEXT}</Title>);

      expect(screen.getByText(TEST_TEXT)).toBeInTheDocument();
    });
  });
});
