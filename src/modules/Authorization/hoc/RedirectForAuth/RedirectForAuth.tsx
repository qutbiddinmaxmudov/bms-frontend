import { Loader } from 'components/atom/Loader';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

import { getIsCheckAuth } from '../../store/selectors/getIsCheckAuth/getIsCheckAuth';
import { getUser } from '../../store/selectors/getUser/getUser';

interface RedirectForAuthProps {
  children: ReactElement
}

const RedirectForAuth: React.FC<RedirectForAuthProps> = ({ children }) => {
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
