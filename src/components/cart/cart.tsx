import React, { memo, useMemo } from 'react';

import { Amount } from '@alfalab/core-components/amount';
import { Badge } from '@alfalab/core-components/badge';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { SidePanelResponsive } from '@alfalab/core-components/side-panel/responsive';
import { TooltipDesktop } from '@alfalab/core-components/tooltip/desktop';
import { Typography } from '@alfalab/core-components/typography';

import { MarketplaceMWhiteIcon } from '@alfalab/icons-classic/MarketplaceMWhiteIcon';

import { useAppSelector } from 'store';
import { cartSelector, cartTotalPriceSelector } from 'store/cart';

import styles from './cart.module.css';

import { CartSidebar } from './components/cart-sidebar';

const PRIMARY_COLOR = '#ef3124';
const BADGE_HEIGHT = 25;
const CART_SIZE = 80;
const CART_TITLE = 'Ваш заказ';

const Cart = memo(() => {
  const totalPrice = useAppSelector(cartTotalPriceSelector);
  const products = useAppSelector(cartSelector);

  const [open, setOpen] = React.useState(false);

  const totalLength = useMemo(
    () => products.reduce((acc, product) => (acc += product.count), 0),
    [products]
  );

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (totalLength === 0) return null;

  return (
    <>
      <TooltipDesktop
        content={
          <Typography.TitleResponsive tag='div' view='xsmall' weight='bold'>
            = <Amount value={totalPrice} currency='RUR' minority={1} bold='full' />
          </Typography.TitleResponsive>
        }
        colors='inverted'
      >
        <button data-test-id='cart' className={styles.cart} type='button' onClick={handleOpen}>
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
      <SidePanelResponsive open={open} onClose={handleClose} className={styles.sidebar}>
        <SidePanelResponsive.Header
          title={CART_TITLE}
          leftAddons={null}
          className={styles.sidebarHeader}
          hasCloser
          sticky
        />
        <SidePanelResponsive.Content className={styles.sidebarContent}>
          <CartSidebar />
        </SidePanelResponsive.Content>
      </SidePanelResponsive>
    </>
  );
});

export { Cart };
