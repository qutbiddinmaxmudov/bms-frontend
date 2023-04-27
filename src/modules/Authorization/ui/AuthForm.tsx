import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoginForm } from '../../../components/LoginForm';
import { fetchLogin } from '../store/api/fetchLogin/fetchLogin';
import { getError } from '../store/selectors/getError/getError';

const AuthForm = () => {
  const getErr = useSelector(getError);
  const [isLoading, setIsLoading] = useState(false);

  const dispatch: any = useDispatch();

  const onSubmitMemo = useCallback(
    (data: any) => {
      const { username, password } = data;
      setIsLoading(true);
      dispatch(fetchLogin({ username, password })).then(() => {
        setIsLoading(false);
      });
    },
    [dispatch],
  );

  return (
    <LoginForm
      onSubmit={onSubmitMemo}
      isLoading={isLoading}
      errorText={getErr}
    />
  );
};

export default AuthForm;
