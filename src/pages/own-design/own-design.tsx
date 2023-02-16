import React from 'react';

import { Gap } from '@alfalab/core-components/gap';
import { Spinner } from '@alfalab/core-components/spinner';
import { Typography } from '@alfalab/core-components/typography';

import { ProductCategory } from 'components/product-category';
import { Container } from 'components/ui/container';
import { SectionTitle } from 'components/ui/section-title';

import { useAppSelector } from 'store';
import {
  ownDesignIsLoadingSelector,
  ownDesignSelector,
} from 'store/own-design';

import { CategoryType } from 'types/product-category';

import styles from './own-design.module.css';

const TITLE_PAGE = 'Свой дизайн';
const DESCRIPTION_PAGE =
  'Выберите вещь, а затем — цвет, размер и стикер. Перенесём стикер на вещь как на фото';

const OwnDesignPage = () => {
  const products = useAppSelector(ownDesignSelector);
  const isLoading = useAppSelector(ownDesignIsLoadingSelector);

  return (
    <div className={styles.root} data-test-id='own-design-page'>
      <Typography.Title tag='h1' hidden>
        {TITLE_PAGE}
      </Typography.Title>

      <Container>
        <SectionTitle title={TITLE_PAGE} description={DESCRIPTION_PAGE} />
        <Gap size='6xl' />

        <Spinner visible={isLoading} size='m' />

        {!!products.length && (
          <>
            <ul className={styles.categories}>
              {products.map((category: CategoryType) => (
                <ProductCategory
                  title={category.title}
                  description={category.description}
                  products={category.products}
                  id={category.id}
                  key={category.id}
                />
              ))}
            </ul>
            <Gap size='8xl' />
            <div className={styles.footer}>
              <Typography.TitleResponsive
                weight='medium'
                tag='h4'
                color='tertiary'
                view='xsmall'
              >
                Посмотреть и потрогать все стикеры можно в A-Store на
                Технопарке. А ещё там можно добавить сразу несколько стикеров на
                одну вещь.
              </Typography.TitleResponsive>
            </div>
          </>
        )}
      </Container>
    </div>
  );
};

export { OwnDesignPage };
