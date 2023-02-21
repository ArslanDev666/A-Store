import React, { memo } from 'react';

import { Amount } from '@alfalab/core-components/amount';
import { Badge } from '@alfalab/core-components/badge';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { TooltipDesktop } from '@alfalab/core-components/tooltip/desktop';
import { Typography } from '@alfalab/core-components/typography';

import { MarketplaceMWhiteIcon } from '@alfalab/icons-classic/MarketplaceMWhiteIcon';

import styles from './cart.module.css';

const PRIMARY_COLOR = '#ef3124';
const BADGE_HEIGHT = 25;
const CART_SIZE = 80;

const Cart = memo(() => {
  const price = 1232222;
  const totalLength = 23;

  return (
    <TooltipDesktop
      content={
        <Typography.TitleResponsive tag='div' view='xsmall' weight='bold'>
          = <Amount value={price} currency='RUR' minority={1} bold='full' />
        </Typography.TitleResponsive>
      }
      colors='inverted'
    >
      <button data-test-id='cart' className={styles.cart} type='button'>
        <Circle
          size={CART_SIZE}
          bottomAddons={
            <Badge
              view='count'
              height={BADGE_HEIGHT}
              content={totalLength}
              iconColor='negative'
              className={styles.cartCount}
            />
          }
          backgroundColor={PRIMARY_COLOR}
          className={styles.cartIconWrapper}
        >
          <MarketplaceMWhiteIcon className={styles.cartIcon} />
        </Circle>
      </button>
    </TooltipDesktop>
  );
});

export { Cart };
