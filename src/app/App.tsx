import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAuthorization, getIsCheckAuth } from '../modules/Authorization';
import { Loader } from '../ui/Loader';
import { AppRouter } from './providers/RouterProvider';

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
