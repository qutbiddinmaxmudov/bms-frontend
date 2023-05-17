import { MainTitle } from 'components/atom/MainTitle';
import React from 'react';

import { AuthForm } from '../../../modules/Authorization';

const LoginPage: React.FC = () => (
  <>
    <MainTitle
      title="metrics"
    />
    <AuthForm />
  </>

);
export default LoginPage;
