import React from 'react';

import { Gap } from '@alfalab/core-components/gap';
import { Typography } from '@alfalab/core-components/typography';

import { Product } from 'components/product';
import { Container } from 'components/ui/container';
import { SectionTitle } from 'components/ui/section-title';

import data from 'utils/data.json';

import { ProductType } from 'types/product';

import styles from './made-in-alfa.module.css';

const TITLE_PAGE = 'Сделано в Альфе';
const DESCRIPTION_PAGE = 'Хотим каждую из этих вещей! Себе, родным и друзьям';

const MadeInAlfaPage = () => {
  return (
    <div className={styles.root} data-test-id='made-in-alfa-page'>
      <Typography.Title tag='h1' hidden>
        {TITLE_PAGE}
      </Typography.Title>

      <Container>
        <SectionTitle title={TITLE_PAGE} description={DESCRIPTION_PAGE} />
        <Gap size='6xl' />

        <ul className={styles.products}>
          {data.map((product: ProductType) => (
            <Product
              image={product.preview}
              title={product.title}
              price={product.price}
              id={product.id}
              key={product.id}
            />
          ))}
        </ul>
      </Container>
    </div>
  );
};

export { MadeInAlfaPage };
