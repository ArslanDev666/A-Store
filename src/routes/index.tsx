import { createBrowserRouter } from 'react-router-dom';

import { AppLayout } from 'components/app-layout';
import { HomePage } from 'pages/home';

import { PATHS } from './constants';

export const router = createBrowserRouter([
  {
    element: <AppLayout hasFooter={false} />,
    children: [
      {
        path: PATHS['home-page'],
        element: <HomePage />,
      },
    ],
  },
  {
    element: <AppLayout />,
    children: [
      {
        path: PATHS['made-in-alfa'],
        element: <div>Сделано в Альфе</div>,
      },
      {
        path: PATHS['own-design'],
        element: <div>Мой дизайн</div>,
      },
      {
        path: PATHS['contact'],
        element: <div>Контакты</div>,
      },
      {
        path: PATHS['cart'],
        element: <div>Корзина</div>,
      },
    ],
  },
]);
