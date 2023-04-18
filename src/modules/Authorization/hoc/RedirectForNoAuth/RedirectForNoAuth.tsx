import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { Loader } from '../../../../ui/Loader';
import { getIsCheckAuth } from '../../store/selectors/getIsCheckAuth/getIsCheckAuth';
import { getUser } from '../../store/selectors/getUser/getUser';

export function RedirectForNoAuth({ children }: any) {
  const isAuth = useSelector(getUser);
  const isCheckAuth = useSelector(getIsCheckAuth);

  const location = useLocation();

  if (!isCheckAuth) {
    return <Loader />;
  }

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
}
