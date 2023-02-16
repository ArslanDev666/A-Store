import React from 'react';
import { RouterProvider } from 'react-router-dom';

import { Notifications } from 'components/app-notification';

import { router } from 'routes';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />;
      <Notifications />
    </>
  );
};

export default App;
