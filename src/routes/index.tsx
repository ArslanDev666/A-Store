import { createBrowserRouter } from 'react-router-dom';
import { AppLayout } from 'components/app-layout';
import { PATHS } from './constants';

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: PATHS['main-page'],
        element: <div>Главная страница</div>,
      },
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
