import { fireEvent, render, screen } from '@testing-library/react';

import { ModalHeader } from './modal-header';

describe('SectionTitle component', () => {
  const title = 'Съешь ещё этих мягких французских булок, да выпей чаю';
  const handleClose = jest.fn();

  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<ModalHeader title={title} handleCloseClick={handleClose} />);

      expect(screen.getByTestId('modal-header')).toBeInTheDocument();
    });
  });

  describe('Props tests', () => {
    it('should render title correctly', () => {
      render(<ModalHeader title={title} handleCloseClick={handleClose} />);

      expect(screen.getByText(title)).toBeInTheDocument();
    });

    it('should call handleCloseClick', () => {
      render(<ModalHeader title={title} handleCloseClick={handleClose} />);

      const button = screen.getByTestId('modal-header-close-button');

      fireEvent.click(button);

      expect(handleClose).toHaveBeenCalled();
    });

    it('should call handleBackClick', () => {
      render(
        <ModalHeader title={title} handleCloseClick={handleClose} handleBackClick={handleClose} />
      );

      const button = screen.getByTestId('modal-header-back-button');

      fireEvent.click(button);

      expect(handleClose).toHaveBeenCalled();
    });
  });
});
