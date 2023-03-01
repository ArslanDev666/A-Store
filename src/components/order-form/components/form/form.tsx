import React, { useMemo } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  UseFormHandleSubmit,
  UseFormRegister,
} from 'react-hook-form';

import { Alert } from '@alfalab/core-components/alert';
import { Button } from '@alfalab/core-components/button';
import { Checkbox } from '@alfalab/core-components/checkbox';
import { Input } from '@alfalab/core-components/input';
import { MaskedInput } from '@alfalab/core-components/masked-input';
import { Radio } from '@alfalab/core-components/radio';
import { RadioGroup } from '@alfalab/core-components/radio-group';
import { Textarea } from '@alfalab/core-components/textarea';
import { Typography } from '@alfalab/core-components/typography';

import { deliveryValues, DeliveryValuesEnum } from 'components/order-form/utils/form-values';
import { FormDataType } from 'components/order-form/utils/validation';

import { masks } from 'utils/masks';

import styles from './form.module.css';

export type PropsType = {
  /**
   * Функция обработки для полей формы от react-hook-form
   */
  register: UseFormRegister<FormDataType>;
  /**
   * Функция обработки отправки формы от react-hook-form
   */
  handleSubmit: UseFormHandleSubmit<FormDataType>;
  /**
   * объект для контроля чекбоксов от react-hook-form
   */
  control: Control<FormDataType>;
  /**
   * объект ошибок от react-hook-form
   */
  errors: FieldErrors<FormDataType>;
  /**
   * Функция обработки отправки формы
   */
  onSubmit: (data: FormDataType) => void;
};

const Form = ({ errors, control, handleSubmit, register, onSubmit }: PropsType) => {
  const errorMessages = useMemo<string[]>(() => {
    const errorsKeys = Object.keys(errors);

    const hasErrors = errorsKeys.some((key) => errors[key as keyof FormDataType]);

    if (!hasErrors) return [];

    return errorsKeys.reduce<string[]>((acc, key) => {
      const message = errors[key as keyof FormDataType]?.message;

      if (!acc.includes(message as string)) acc.push(message as string);

      return acc;
    }, []);
  }, [errors]);

  return (
    <form
      className={styles.form}
      onSubmit={handleSubmit(onSubmit)}
      data-test-id='form'
      aria-label='form'
    >
      <Input
        label='ФИО'
        placeholder='Фамилия Имя Отчество'
        size='m'
        labelView='outer'
        className={styles.formInput}
        error={errors.fullname?.message}
        {...register('fullname')}
        block
      />

      <Input
        type='email'
        label='e-mail'
        placeholder='example@site.ru'
        labelView='outer'
        size='m'
        className={styles.formInput}
        error={errors.email?.message}
        {...register('email')}
        block
      />

      <MaskedInput
        label='Телефон'
        mask={masks.phone}
        placeholder='+7 (000) 000-00-00'
        labelView='outer'
        className={styles.formInput}
        error={errors.phone?.message}
        {...register('phone')}
        block
      />

      <Input
        label='Адрес (если вы выбрали самовывоз — оставьте поле пустым)'
        placeholder='Индекс, город, улица, дом, квартира'
        size='m'
        labelView='outer'
        className={styles.formInput}
        error={errors.address?.message as string}
        {...register('address')}
        block
      />

      <Controller
        control={control}
        name='delivery'
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            label='Доставка'
            direction='vertical'
            onChange={onChange}
            value={value}
            error={errors.delivery?.message}
          >
            {Object.keys(deliveryValues).map((key) => {
              const { label } = deliveryValues[key as DeliveryValuesEnum];

              return <Radio label={label} value={key} size='m' key={key} />;
            })}
          </RadioGroup>
        )}
      />

      <Controller
        control={control}
        name='policyAgree'
        render={({ field: { onChange, value } }) => (
          <Checkbox
            size='m'
            label='Согласен с политикой конфиденциальности и обработки персональных данных'
            onChange={onChange}
            checked={value}
            error={errors.policyAgree?.message}
            block
          />
        )}
      />

      <Textarea
        label='Комментарий к заказу'
        labelView='outer'
        minRows={3}
        autosize={false}
        className={styles.formInput}
        error={errors.comment?.message}
        {...register('comment')}
        block
      />

      <Controller
        control={control}
        name='payment'
        render={({ field: { onChange, value } }) => (
          <RadioGroup
            label='Способ оплаты'
            direction='vertical'
            onChange={onChange}
            value={value}
            error={errors.payment?.message}
          >
            <Radio label='Банковская карта' value='bank-card' size='m' />
          </RadioGroup>
        )}
      />

      <Button view='primary' className={styles.submit} type='submit' block>
        <Typography.Text weight='bold' view='primary-large'>
          Сделать заказ
        </Typography.Text>
      </Button>

      {!!errorMessages.length &&
        errorMessages.map((error, index) => (
          <Alert view='negative' key={index} dataTestId='form-alert'>
            {error}
          </Alert>
        ))}
    </form>
  );
};

export { Form };
