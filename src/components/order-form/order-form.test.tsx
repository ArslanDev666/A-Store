import { fireEvent, screen } from '@testing-library/react';

import { OrderForm } from 'components/order-form/order-form';
import { deliveryValues, DeliveryValuesEnum } from 'components/order-form/utils/form-values';

import { renderWithProviders } from 'utils/tests-utils';

describe('OrderForm component', () => {
  describe('Render tests', () => {
    it('should render correctly', () => {
      renderWithProviders(<OrderForm />);

      expect(screen.getByTestId('order-form')).toBeInTheDocument();
    });

    it('should not render order-form-total-price', () => {
      renderWithProviders(<OrderForm />);

      const pickupDelivery = screen.getByRole('radio', {
        name: deliveryValues[DeliveryValuesEnum.Pickup].label,
      });

      fireEvent.click(pickupDelivery);

      expect(screen.queryByTestId('order-form-total-price')).toBeNull();
    });
  });
});
