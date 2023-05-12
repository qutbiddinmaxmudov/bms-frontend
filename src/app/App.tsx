import { Loader } from 'components/atom/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthorization, getIsCheckAuth } from '../modules/Authorization';
import { AppRouter } from './router/RouterProvider';

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAuthorization());
  }, [dispatch]);

  const isCheckAuth = useSelector(getIsCheckAuth);

  if (!isCheckAuth) {
    return <Loader />;
  }

  return <AppRouter />;
};

export default App;
