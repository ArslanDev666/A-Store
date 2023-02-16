import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';

import { Notifications } from 'components/app-notification';

import { useAppDispatch } from 'store';
import { madeInAlfaActions } from 'store/made-in-alfa';
import { ownDesignActions } from 'store/own-design';

import { router } from 'routes';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(madeInAlfaActions.request());
    dispatch(ownDesignActions.request());

    // React гарантирует, что dispatch меняться не будет.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <RouterProvider router={router} />
      <Notifications />
    </>
  );
};

export default App;
