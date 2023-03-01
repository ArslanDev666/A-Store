import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container } from 'components/ui/container';

import styles from './order-form.module.css';

import { CartProducts } from './components/cart-products';
import { Form } from './components/form';
import { deliveryValues, DeliveryValuesEnum } from './utils/form-values';
import { FormDataType, validationFormSchema } from './utils/validation';

export const initialValues: FormDataType = {
  fullname: '',
  email: '',
  phone: '',
  address: '',
  delivery: DeliveryValuesEnum.DeliveryInRussia,
  policyAgree: false,
  comment: '',
  payment: 'bank-card',
};

const OrderForm = () => {
  const {
    watch,
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: yupResolver(validationFormSchema),
    defaultValues: initialValues,
  });
  const deliveryValue = watch('delivery');
  const onSubmit = (data: FormDataType) => alert(JSON.stringify(data, null, 2));

  const delivery = useMemo(() => {
    const { price, text } = deliveryValues[deliveryValue as DeliveryValuesEnum];

    if (price === 0) return null;

    return { price, text };
  }, [deliveryValue]);

  return (
    <Container>
      <div className={styles.formWrapper} data-test-id='order-form'>
        <section className={styles.form}>
          <Form
            errors={errors}
            control={control}
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            register={register}
          />
        </section>
        <section className={styles.cartProducts}>
          <CartProducts delivery={delivery} />
        </section>
      </div>
    </Container>
  );
};

export { OrderForm };
