import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { act, fireEvent, render, screen } from '@testing-library/react';

import { initialValues } from 'components/order-form/order-form';
import { DeliveryValuesEnum } from 'components/order-form/utils/form-values';
import { FormDataType, validationFormSchema } from 'components/order-form/utils/validation';

import { Form } from './form';

describe('Form component', () => {
  const onSubmit = jest.fn();

  type PropsType = {
    testInitialValues?: FormDataType;
  };
  const Comp = ({ testInitialValues = initialValues }: PropsType) => {
    const {
      register,
      handleSubmit,
      control,
      formState: { errors },
    } = useForm<FormDataType>({
      resolver: yupResolver(validationFormSchema),
      defaultValues: testInitialValues,
    });

    return (
      <Form
        errors={errors}
        control={control}
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        register={register}
      />
    );
  };

  describe('Render tests', () => {
    it('should render correctly', () => {
      render(<Comp />);

      expect(screen.getByTestId('form')).toBeInTheDocument();
    });

    it('should render alerts', async () => {
      render(<Comp />);

      // Выключено, т.к. ошибки в консоли.
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => fireEvent.submit(screen.getByRole('form')));

      const alerts = await screen.findAllByTestId('form-alert');

      expect(alerts.length).toBeGreaterThan(0);
    });

    it('should not render repeat alerts', async () => {
      const testValues: FormDataType = {
        email: '',
        fullname: '',
        delivery: DeliveryValuesEnum.Pickup,
        policyAgree: true,
        phone: '+7 (111) 111-11-11',
      };
      render(<Comp testInitialValues={testValues} />);

      // Выключено, т.к. ошибки в консоли.
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => fireEvent.submit(screen.getByRole('form')));
      const alerts = screen.queryAllByTestId('form-alert');

      const messages = alerts.map((alertElement) => {
        return alertElement.textContent;
      });

      expect(new Set(messages).size === messages.length).toBeTruthy();
    });

    it('should not render alerts', async () => {
      const testValues: FormDataType = {
        email: 'test@mail.com',
        fullname: 'fullname',
        policyAgree: true,
        phone: '+7 (111) 111-11-11',
      };
      render(<Comp testInitialValues={testValues} />);

      // Выключено, т.к. ошибки в консоли.
      // eslint-disable-next-line testing-library/no-unnecessary-act
      await act(() => fireEvent.submit(screen.getByRole('form')));
      const alerts = screen.queryAllByTestId('form-alert');

      expect(alerts).toHaveLength(0);
    });
  });
});
