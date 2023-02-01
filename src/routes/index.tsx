import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from 'components/app-layout';
import { HomePage } from 'pages/home';

import { ROUTES } from './constants';

export const router = createBrowserRouter([
  {
    element: <AppLayout hasFooter={false} />,
    children: [
      {
        path: ROUTES['home-page'],
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: ROUTES['made-in-alfa'],
        element: <div>Сделано в Альфе</div>,
      },
      {
        path: ROUTES['own-design'],
        element: <div>Мой дизайн</div>,
      },
      {
        path: ROUTES['contact'],
        element: <div>Контакты</div>,
      },
      {
        path: ROUTES['cart'],
        element: <div>Корзина</div>,
      },
    ],
  },
]);
