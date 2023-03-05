import React from 'react';

import { Gap } from '@alfalab/core-components/gap';
import { Link } from '@alfalab/core-components/link';
import { Typography } from '@alfalab/core-components/typography';

import { Container } from 'components/ui/container';
import { SectionTitle } from 'components/ui/section-title';

import { PRIVACY_POLICY_LINK } from 'utils/const';

import styles from './contact.module.css';

const TITLE_PAGE = 'Контакты';

const ContactPage = () => {
  return (
    <div className={styles.root} data-test-id='contact-page'>
      <Typography.Title tag='h1' hidden>
        Контакты
      </Typography.Title>

      <Container>
        <SectionTitle title={TITLE_PAGE} />
        <Typography.Text tag='div' weight='medium' className={styles.text}>
          <Link href='tel:+79060616020' underline={false}>
            +7 906 061 60 20
          </Link>
          <br />
          <Link href='mailto:info@alfabankstore.ru' underline={false}>
            info@alfabankstore.ru
          </Link>
          <Gap size='l' />
          <span>г. Москва, пр-т Андропова, 18 корп. 3</span>
          <Gap size='l' />
          <span>
            пн-чт: <br />
            <time>10:00—19:00 </time>
            <br />
            пт: <br />
            <time>10:00—17:30</time>
          </span>
          <Gap size='l' />
          <span>Принимаем к оплате карты Visa, Mastercard, МИР.</span>
        </Typography.Text>
        <Gap size='l' />
        <Typography.Text view='primary-small' weight='bold'>
          <Link href={PRIVACY_POLICY_LINK} target='_blank'>
            Политика конфиденциальности и обработки персональных данных
          </Link>
        </Typography.Text>
        <Gap size='4xl' />
        <iframe
          src='https://yandex.ru/map-widget/v1/?um=constructor%3A538b3acdbdc2beea036ec85db340239eebe8fdf28dc9f8ad1b6898cf91e6326d&amp;source=constructor'
          width='760'
          height='360'
          title='Карта - Местоположение магазина'
          className={styles.cart}
        />
      </Container>
    </div>
  );
};

export { ContactPage };
