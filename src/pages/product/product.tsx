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
import { Space } from '@alfalab/core-components/space';
import { Spinner } from '@alfalab/core-components/spinner';
import { Typography } from '@alfalab/core-components/typography';

import { Container } from 'components/ui/container';

import { useAppDispatch } from 'store';
import { isLoadingSelector, productActions, productSelector } from 'store/product';

import { getProductSelectValues } from 'utils/get-product-select-values';

import { CustomProductType, ProductType } from 'types/product';

import styles from './product.module.css';

import { ProductGallery } from './components/product-gallery';

type ParamsType = {
  /**
   * Id товара
   */
  productId: string;
};

type FormStateType = {
  color: SelectResponsiveProps['selected'];
  size: SelectResponsiveProps['selected'];
  sticker: SelectResponsiveProps['selected'];
  model: SelectResponsiveProps['selected'];
};

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
    if (!selected || !name || !values) return;

    setValues((prevValues) => ({ ...(prevValues as FormStateType), [name]: selected }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    alert('Товар добавлен в корзину');
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

              <form onSubmit={handleFormSubmit} className={styles.form}>
                {values && productParams && (
                  <Space size='m' fullWidth dataTestId='product-params'>
                    {productParams.sizes?.length ? (
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
                    ) : null}

                    {productParams.colors?.length ? (
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
                    ) : null}

                    {productParams.stickers?.length ? (
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
                    ) : null}

                    {productParams.models?.length ? (
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
                    ) : null}
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
