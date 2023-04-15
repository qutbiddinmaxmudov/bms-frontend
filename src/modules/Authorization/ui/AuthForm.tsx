import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { LoginForm } from '../../../components/LoginForm';
import { fetchLogin } from '../store/api/fetchLogin/fetchLogin';
import { getError } from '../store/selectors/getError/getError';

export default function AuthForm() {
  const getErr = useSelector(getError);
  const [errorText, setErrorText] = useState(getErr);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch:any = useDispatch();

  const navigate = useNavigate();
  const location = useLocation();
  const fromPage = location?.state?.from?.pathname || '/';

  const onSubmitMemo = useCallback((data: any) => {
    const { username, password } = data;

    setIsLoading(true);
    setErrorText('');

    dispatch(fetchLogin({ username, password })).then(() => {
      setIsLoading(false);
      navigate(fromPage, { replace: true });
    }, () => {
      setIsLoading(false);
      setErrorText(getErr);
    });
  }, [navigate, fromPage, dispatch, getErr]);

  return (
    <LoginForm onSubmit={onSubmitMemo} isLoading={isLoading} errorText={errorText} />
  );
}
