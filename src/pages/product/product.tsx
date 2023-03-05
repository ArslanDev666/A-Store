import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Amount } from '@alfalab/core-components/amount';
import { Button } from '@alfalab/core-components/button';
import { Gap } from '@alfalab/core-components/gap';
import {
  SelectResponsive,
  SelectResponsiveProps,
} from '@alfalab/core-components/select/responsive';
import { OptionShape } from '@alfalab/core-components/select/typings';
import { Space } from '@alfalab/core-components/space';
import { Spinner } from '@alfalab/core-components/spinner';
import { Typography } from '@alfalab/core-components/typography';

import { Container } from 'components/ui/container';

import { useAppDispatch } from 'store';
import { cartActions } from 'store/cart';
import { isLoadingSelector, productActions, productSelector } from 'store/product';

import { getNameParamText, ParamsNamesProductType } from 'utils/functions/get-name-param';
import { getProductSelectValues } from 'utils/functions/get-product-select-values';

import { CartProductType, CustomProductType, ProductType } from 'types/product';

import styles from './product.module.css';

import { ProductGallery } from './components/product-gallery';

type ParamsType = {
  /**
   * Id товара
   */
  productId: string;
};

type FormStateType = Record<ParamsNamesProductType, SelectResponsiveProps['selected']>;
const INITIAL_PREVIEW = 0;

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const product = useSelector(productSelector);
  const isLoading = useSelector(isLoadingSelector);

  const { productId } = useParams<ParamsType>();
  const [selectPreview, setSelectPreview] = useState(INITIAL_PREVIEW);

  const productParams = useMemo(() => {
    if (!product) return null;

    const sizes = getProductSelectValues(product?.sizes);
    const colors = getProductSelectValues(product?.colors);
    const stickers = getProductSelectValues((product as CustomProductType)?.stickerNumbers);
    const models = getProductSelectValues((product as ProductType)?.models);

    return {
      sizes,
      colors,
      stickers,
      models,
    };
  }, [product]);

  const [values, setValues] = useState<FormStateType | null>(null);

  useEffect(() => {
    if (!productId) return;

    dispatch(productActions.request({ id: productId! }));

    return () => {
      dispatch(productActions.reset());
    };
  }, [dispatch, productId]);

  useEffect(() => {
    if (!productParams) return;

    const updateValues = {} as FormStateType;

    if (productParams.colors?.length) {
      updateValues.color = productParams.colors[0];
    }
    if (productParams.sizes?.length) {
      updateValues.size = productParams.sizes[0];
    }
    if (productParams.stickers?.length) {
      updateValues.sticker = productParams.stickers[0];
    }
    if (productParams.models?.length) {
      updateValues.model = productParams.models[0];
    }

    setValues(updateValues);
  }, [productParams]);

  const handleSelectChange: SelectResponsiveProps['onChange'] = ({ selected, name }) => {
    if (!selected || !name) return;

    setValues((prevValues) => ({ ...prevValues!, [name]: selected }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    const params: CartProductType['params'] = values
      ? Object.keys(values).map((key) => {
          const param = values[key as ParamsNamesProductType] as OptionShape;

          return {
            label: getNameParamText(key as ParamsNamesProductType),
            value: param.value,
          };
        })
      : [];

    const addProduct: Omit<CartProductType, 'key'> = {
      count: 1,
      id: product!.id,
      preview: product!.preview,
      price: product!.price,
      title: product!.title,
      totalPrice: product!.price,
      params,
    };

    dispatch(cartActions.add(addProduct));
  };

  return (
    <div data-test-id='product-page'>
      <Typography.Title tag='h1' hidden>
        {product?.title}
      </Typography.Title>
      <Container>
        <Spinner visible={isLoading} size='m' />

        {product && (
          <div className={styles.wrapper}>
            <ProductGallery
              initialPreview={selectPreview}
              handleChangePreview={setSelectPreview}
              images={product.images}
              title={product.title}
              className={styles.gallery}
            />

            <div className={styles.content}>
              <Typography.TitleResponsive tag='h2' view='xsmall'>
                {product.title}
              </Typography.TitleResponsive>

              <Gap size='l' />

              <Typography.TitleResponsive view='xsmall' tag='div'>
                <Amount value={product.price} currency='RUR' minority={1} bold='full' />
              </Typography.TitleResponsive>

              <form onSubmit={handleFormSubmit} className={styles.form} aria-label='form'>
                {values && productParams && (
                  <Space size='m' fullWidth dataTestId='product-params'>
                    {!!productParams.sizes?.length && (
                      <SelectResponsive
                        allowUnselect={true}
                        size='s'
                        options={productParams.sizes}
                        placeholder='Выберите размер'
                        label='Размер'
                        onChange={handleSelectChange}
                        selected={values.size}
                        block={true}
                        name='size'
                        labelView='outer'
                        dataTestId='product-select-size'
                      />
                    )}

                    {!!productParams.colors?.length && (
                      <SelectResponsive
                        allowUnselect={true}
                        size='s'
                        options={productParams.colors}
                        placeholder='Выберите цвет'
                        label='Цвет'
                        onChange={handleSelectChange}
                        selected={values.color}
                        block={true}
                        name='color'
                        labelView='outer'
                        dataTestId='product-select-color'
                      />
                    )}

                    {!!productParams.stickers?.length && (
                      <SelectResponsive
                        allowUnselect={true}
                        size='s'
                        options={productParams.stickers}
                        placeholder='Выберите номер стикера'
                        label='Номер стикера'
                        onChange={handleSelectChange}
                        selected={values.sticker}
                        block={true}
                        name='sticker'
                        labelView='outer'
                        dataTestId='product-select-sticker'
                      />
                    )}

                    {!!productParams.models?.length && (
                      <SelectResponsive
                        allowUnselect={true}
                        size='s'
                        options={productParams.models}
                        placeholder='Выберите модель телефона'
                        label='Модель'
                        block={true}
                        onChange={handleSelectChange}
                        selected={values.model}
                        labelView='outer'
                        dataTestId='product-select-model'
                      />
                    )}
                  </Space>
                )}
                <Gap size='l' />

                <Button size='s' view='primary' type='submit'>
                  В корзину
                </Button>
              </form>

              <Gap size='xl' />

              <Typography.Text
                view='secondary-medium'
                weight='medium'
                className={styles.description}
              >
                {product.description}
              </Typography.Text>
            </div>
          </div>
        )}
      </Container>
      <Gap size='8xl' />
    </div>
  );
};

export { ProductPage };
