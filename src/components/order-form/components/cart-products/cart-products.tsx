import React, { memo, useMemo } from 'react';

import { Amount } from '@alfalab/core-components/amount';
import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';

import { CartProduct } from 'components/cart-product';

import { useAppSelector } from 'store';
import { cartSelector, cartTotalPriceSelector } from 'store/cart';

import styles from './cart-products.module.css';

export type PropsType = {
  delivery: {
    text: string;
    price: number;
  } | null;
};

const CartProducts = memo(({ delivery }: PropsType) => {
  const products = useAppSelector(cartSelector);
  const cartPrice = useAppSelector(cartTotalPriceSelector);

  const totalPrice = useMemo(() => {
    if (delivery) return cartPrice + delivery.price;

    return cartPrice;
  }, [cartPrice, delivery]);

  if (!products.length) return null;

  return (
    <>
      <ul data-test-id='cart-products'>
        {products.map((product) => {
          return (
            <li key={product.key}>
              <CartProduct product={product} />
            </li>
          );
        })}
      </ul>
      <Gap size='l' />
      <Typography.Text view='primary-medium' weight='bold' className={styles.productsPrice}>
        Сумма: <Amount value={cartPrice} currency='RUR' minority={1} bold='full' />
      </Typography.Text>
      {delivery && (
        <div className={styles.deliveryPriceWrapper}>
          <Gap size='2xl' />
          <Typography.Text view='primary-small'>
            Сумма: <Amount value={cartPrice} currency='RUR' minority={1} bold='none' />
          </Typography.Text>
          <Typography.Text view='primary-small'>
            {delivery.text}{' '}
            <Amount value={delivery.price} currency='RUR' minority={1} bold='none' />
            : <Amount value={delivery.price} currency='RUR' minority={1} bold='none' />
          </Typography.Text>
          <Typography.Text
            view='primary-medium'
            weight='bold'
            className={styles.totalPrice}
            dataTestId='order-form-total-price'
          >
            Итоговая сумма: <Amount value={totalPrice} currency='RUR' minority={1} bold='full' />
          </Typography.Text>
        </div>
      )}
    </>
  );
});

export { CartProducts };
