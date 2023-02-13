import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages/home';
import { MadeInAlfaPage } from 'pages/made-in-alfa';
import { OwnDesignPage } from 'pages/own-design';
import { ProductPage } from 'pages/product';

import { AppLayout } from 'components/app-layout';

import { ROUTES } from './constants';

export const routerConfig = [
  {
    element: <AppLayout hasFooter={false} />,
    children: [
      {
        path: ROUTES.homePage,
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES.madeInAlfa,
        element: <MadeInAlfaPage />,
      },
      {
        path: ROUTES.ownDesign,
        element: <OwnDesignPage />,
      },
      {
        path: ROUTES.customProduct,
        element: <ProductPage />,
      },
      {
        path: ROUTES.product,
        element: <ProductPage />,
      },
      {
        path: ROUTES.contact,
        element: <div>Контакты</div>,
      },
      {
        path: ROUTES.cart,
        element: <div>Корзина</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routerConfig);
