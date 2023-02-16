import React, { FormEvent, useEffect, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useForm } from 'hooks/useForm';

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
import {
  isLoadingSelector,
  productActions,
  productSelector,
} from 'store/product';

import { getProductSelectValues } from 'utils/get-product-select-values';

import { CustomProductType, ProductType } from 'types/product';

import styles from './product.module.css';

import { ProductGallery } from './components/product-gallery';

type ParamsType = {
  /**
   * Id товара
   */
  productId: string;
  /**
   * Id категории
   */
  categoryId: string;
};

type FormStateType = {
  color: SelectResponsiveProps['selected'];
  size: SelectResponsiveProps['selected'];
  sticker: SelectResponsiveProps['selected'];
  model: SelectResponsiveProps['selected'];
};

const INITIAL_PREVIEW = 0;

const initialValues: FormStateType = {
  color: null,
  size: null,
  sticker: null,
  model: null,
};

const ProductPage = () => {
  const dispatch = useAppDispatch();
  const product = useSelector(productSelector);
  const isLoading = useSelector(isLoadingSelector);

  const { productId } = useParams<ParamsType>();
  const [selectPreview, setSelectPreview] = useState(INITIAL_PREVIEW);

  const { colors, models, sizes, stickers, isShowForm } = useMemo(() => {
    const sizes = getProductSelectValues(product?.sizes);
    const colors = getProductSelectValues(product?.colors);
    const stickers = getProductSelectValues(
      (product as CustomProductType)?.stickerNumbers
    );
    const models = getProductSelectValues((product as ProductType)?.models);

    const isShowForm = Boolean(sizes || colors || stickers || models);

    return {
      sizes,
      colors,
      stickers,
      models,
      isShowForm,
    };
  }, [product]);

  const { setValues } = useForm<FormStateType>(initialValues);

  useEffect(() => {
    dispatch(productActions.request({ id: productId }));

    return () => {
      dispatch(productActions.reset());
    };
  }, [dispatch, productId]);

  const handleSelectChange: SelectResponsiveProps['onChange'] = ({
    selected,
    name,
  }) => {
    if (!selected || !name) return;

    setValues((prevValues) => ({ ...prevValues, [name]: selected }));
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
                <Amount
                  value={product.price}
                  currency='RUR'
                  minority={1}
                  bold='full'
                />
              </Typography.TitleResponsive>

              <form onSubmit={handleFormSubmit} className={styles.form}>
                {isShowForm && (
                  <Space size='m' fullWidth dataTestId='product-params'>
                    {sizes?.length ? (
                      <SelectResponsive
                        allowUnselect={true}
                        size='s'
                        options={sizes}
                        placeholder='Размер'
                        label='Размер'
                        onChange={handleSelectChange}
                        block={true}
                        name='size'
                        labelView='outer'
                        dataTestId='product-select-size'
                      />
                    ) : null}

                    {colors?.length ? (
                      <SelectResponsive
                        allowUnselect={true}
                        size='s'
                        options={colors}
                        placeholder='Цвет'
                        label='Цвет'
                        onChange={handleSelectChange}
                        block={true}
                        name='color'
                        labelView='outer'
                        dataTestId='product-select-color'
                      />
                    ) : null}

                    {stickers?.length ? (
                      <SelectResponsive
                        allowUnselect={true}
                        size='s'
                        options={stickers}
                        placeholder='Номер стикера'
                        label='Номер стикера'
                        onChange={handleSelectChange}
                        block={true}
                        name='sticker'
                        labelView='outer'
                        dataTestId='product-select-sticker'
                      />
                    ) : null}

                    {models?.length ? (
                      <SelectResponsive
                        allowUnselect={true}
                        size='s'
                        options={models}
                        placeholder='Модель'
                        label='Модель'
                        block={true}
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
