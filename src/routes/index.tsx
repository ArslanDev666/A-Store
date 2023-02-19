import { createBrowserRouter, RouteObject } from 'react-router-dom';
import { HomePage } from 'pages/home';
import { MadeInAlfaPage } from 'pages/made-in-alfa';
import { OwnDesignPage } from 'pages/own-design';
import { ProductPage } from 'pages/product';

import { AppLayout } from 'components/app-layout';
import { ErrorBoundary } from 'components/error-boundary';

import { ROUTES } from './constants';

export const routerConfig: RouteObject[] = [
  {
    element: <AppLayout hasFooter={false} />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: ROUTES.homePage,
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    errorElement: <ErrorBoundary />,
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
        path: ROUTES.product,
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
