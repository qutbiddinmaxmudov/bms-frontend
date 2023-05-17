import { Loader } from 'components/atom/Loader';
import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { getIsCheckAuth } from '../../store/selectors/getIsCheckAuth/getIsCheckAuth';
import { getUser } from '../../store/selectors/getUser/getUser';

interface RedirectForNoAuthProps {
  children: ReactElement
}

const RedirectForNoAuth: React.FC<RedirectForNoAuthProps> = ({ children }) => {
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
};

export { RedirectForNoAuth };
