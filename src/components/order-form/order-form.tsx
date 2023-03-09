import { useMemo } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Container } from 'components/ui/container';

import { useAppDispatch, useAppSelector } from 'store';
import { cartSelector } from 'store/cart';
import { orderActions } from 'store/order';

import { OrderType } from 'types/order';
import { CartProductType, ProductParamType } from 'types/product';

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

type ProductParamsOrderType = Record<
  CartProductType['key'],
  Record<ProductParamType['key'], ProductParamType['value']>
>;

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
  const dispatch = useAppDispatch();
  const products = useAppSelector(cartSelector);

  /**
   * привожу параметры продукта к нормальному виду
   * -> {
   *      color: value,
   *      size: value,
   *      ...
   *    }
   *
   * Это оптимальный вариант по производительности, без изменения структуры товара.
   * */
  const productsParams = useMemo(() => {
    return products.reduce<ProductParamsOrderType>((acc, product) => {
      const params = product.params.reduce<Record<string, ProductParamType['value']>>(
        (acc, param) => {
          acc[param.key] = param.value;

          return acc;
        },
        {}
      );

      acc[product.key] = params;

      return acc;
    }, {});
  }, [products]);

  const deliveryValue = watch('delivery');

  const onSubmit = (data: FormDataType) => {
    const order: OrderType = {
      address: data.address,
      deliveryType: deliveryValues[data.delivery as DeliveryValuesEnum].label,
      email: data.email,
      name: data.fullname,
      paymentType: 'Банковская карта',
      phone: data.phone,
      products: products.map((product) => {
        return {
          id: product.id,
          totalCount: product.count,
          totalPrice: product.totalPrice,
          ...productsParams[product.key],
        };
      }),
      comment: data.comment,
    };

    dispatch(orderActions.create(order));
  };

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
