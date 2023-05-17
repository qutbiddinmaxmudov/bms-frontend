import { Loader } from 'components/atom/Loader';
import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getIsCheckAuth } from '../../store/selectors/getIsCheckAuth/getIsCheckAuth';
import { getUser } from '../../store/selectors/getUser/getUser';

const RedirectForAuth: React.FC<PropsWithChildren> = ({ children }) => {
  const isAuth = useSelector(getUser);
  const isCheckAuth = useSelector(getIsCheckAuth);

  const location = useLocation();
  const fromPage = location?.state?.from?.pathname || '/';

  if (!isCheckAuth) {
    return <Loader />;
  }

  if (isAuth) {
    return <Navigate to={fromPage} />;
  }

  return children;
};

export { RedirectForAuth };
