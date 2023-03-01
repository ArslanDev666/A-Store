import * as yup from 'yup';

import { DeliveryValuesEnum } from './form-values';

const PHONE_NUMBER_LENGTH = 18;
const MIN_FULLNAME_LENGTH = 3;

const FIND_LETTERS_REGEX = /^[A-Яа-я\s]+$/g;

const ERRORS = {
  required: 'Пожалуйста, заполните все обязательные поля',
  trim: 'В поле не должно быть пустых символов в начале и в конце строки',
  fullname: 'Введите имя',
  fullnameMin: 'Слишком короткое имя',
  email: 'Введите email',
  phone: 'Введите корректный номер',
  policyAgree: 'Подтвердите согласие на обработку данных',
};

export const validationFormSchema = yup
  .object({
    fullname: yup
      .string()
      .matches(FIND_LETTERS_REGEX, ERRORS.fullname)
      .trim(ERRORS.trim)
      .min(MIN_FULLNAME_LENGTH, ERRORS.fullnameMin)
      .required(ERRORS.required)
      .strict(true),
    email: yup.string().email(ERRORS.email).required(ERRORS.required),
    phone: yup.string().min(PHONE_NUMBER_LENGTH, ERRORS.phone).required(ERRORS.required),
    address: yup.string().when('delivery', {
      is: DeliveryValuesEnum.Pickup,
      then: (schema) => schema.required(ERRORS.required),
    }),
    delivery: yup.string(),
    policyAgree: yup.bool().oneOf([true], ERRORS.policyAgree),
    comment: yup.string(),
    payment: yup.string(),
  })
  .required();

export type FormDataType = yup.InferType<typeof validationFormSchema>;
