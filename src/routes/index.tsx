import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages/home';
import { MadeInAlfaPage } from 'pages/made-in-alfa';

import { AppLayout } from 'components/app-layout';

import { ROUTES } from './constants';

export const router = createBrowserRouter([
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
        element: <div>Мой дизайн</div>,
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
]);
