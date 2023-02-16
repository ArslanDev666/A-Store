import React, { FormEvent, useMemo, useState } from 'react';
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
import { Typography } from '@alfalab/core-components/typography';

import { Container } from 'components/ui/container';

import { getCustomProduct, getProduct } from 'utils/get-product';
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
  models: SelectResponsiveProps['selected'];
};

const INITIAL_PREVIEW = 0;

const ProductPage = () => {
  const { productId, categoryId } = useParams<ParamsType>();
  const [selectPreview, setSelectPreview] = useState(INITIAL_PREVIEW);

  const product = useMemo(() => {
    if (!categoryId) return getProduct(productId);

    return getCustomProduct(categoryId, productId);
  }, [categoryId, productId]);

  const { colors, models, sizes, stickers, isShowForm } = useMemo(
    () => {
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
    },
    /**
     * Продукт изменится, только при смене url.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const initialFormState: FormStateType = useMemo(
    () => ({
      color: colors[0],
      size: sizes[0],
      sticker: stickers[0],
      models: models[0],
    }),
    /**
     * Поля изменятся, только при смене продукта, а продукт изменится, только при смене url.
     */
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const { setValues, values } = useForm<FormStateType>(initialFormState);

  if (!product) return null;

  const handleSelectChange: SelectResponsiveProps['onChange'] = ({
    selected,
    name,
  }) => {
    if (!selected || !name) return;

    setValues((prevValues) => ({ ...prevValues, [name]: selected }));
  };

  const handleColorChange: SelectResponsiveProps['onChange'] = (payload) => {
    if (!payload.selected) return;

    setSelectPreview(+payload.selected.key);

    handleSelectChange(payload);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();

    alert('Товар добавлен в корзину');
  };

  return (
    <div data-test-id='product-page'>
      <Typography.Title tag='h1' hidden>
        {product.title}
      </Typography.Title>

      <Container>
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
                      selected={values.size}
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
                      selected={values.color}
                      onChange={handleColorChange}
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
                      selected={values.sticker}
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
                      selected={models[0]}
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
      </Container>
      <Gap size='8xl' />
    </div>
  );
};

export { ProductPage };
