import React from 'react';
import { DrawerContext } from '@alfalab/core-components/drawer';
import { Link } from '@alfalab/core-components/link';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'routes/constants';

import { MailMIcon } from '@alfalab/icons-glyph/MailMIcon';
import { PhoneMIcon } from '@alfalab/icons-glyph/PhoneMIcon';
import { WhatsappMIcon } from '@alfalab/icons-logotype/WhatsappMIcon';
import { Title } from 'components/ui/title';
import { IconButton } from '@alfalab/core-components/icon-button';
import { CloseLIcon } from '@alfalab/icons-classic/CloseLIcon';
import { Typography } from '@alfalab/core-components/typography';

import styles from './navigation-sidebar.module.css';

const NAVIGATION_LINKS = [
  {
    text: 'Сделано в Альфе',
    href: ROUTES['made-in-alfa'],
  },
  {
    text: 'Свой дизайн',
    href: ROUTES['own-design'],
  },
  {
    text: 'Контакты',
    href: ROUTES['contact'],
  },
];

const SOCIALS_LINKS = [
  {
    icon: MailMIcon,
    href: 'info@alfabankstore.ru',
  },
  {
    icon: PhoneMIcon,
    href: 'tel:+7 906 061-60-20',
  },
  {
    icon: WhatsappMIcon,
    href: 'https://wa.me/79060616020',
  },
];

const PRIVACY_POLICY_LINK = 'https://store.alfabank.ru/policy';

const NavigationSidebar = () => {
  const { contentRef, onClose } = React.useContext(DrawerContext);

  return (
    <div
      ref={contentRef as React.Ref<HTMLDivElement>}
      className={styles.navigation}
    >
      <IconButton
        view='tertiary'
        icon={CloseLIcon}
        className={styles.navigationClose}
        onClick={onClose}
      />

      <div className={styles.navigationWrapper}>
        <nav className={styles.navigationContent}>
          <ul className={styles.navigationList}>
            {NAVIGATION_LINKS.map((link) => (
              <li key={link.href}>
                <Title>
                  <Link
                    href={link.href}
                    Component={NavLink}
                    underline={false}
                    colors='inverted'
                  >
                    {link.text}
                  </Link>
                </Title>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.navigationCopyright}>
          <Typography.Text view='primary-small' weight='bold'>
            <Link
              href={PRIVACY_POLICY_LINK}
              underline={false}
              colors='inverted'
              target='_blank'
            >
              Политика конфиденциальности <br /> и обработки персональных данных
            </Link>
          </Typography.Text>
        </div>

        <ul className={styles.navigationFooter}>
          {SOCIALS_LINKS.map((link) => (
            <li key={link.href} className={styles.navigationSocialLink}>
              <IconButton
                view='transparent'
                colors='inverted'
                icon={link.icon}
                href={link.href}
                target='_blank'
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export { NavigationSidebar };
