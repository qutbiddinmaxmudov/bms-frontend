import { RedirectForAuth } from './hoc/RedirectForAuth/RedirectForAuth';
import { RedirectForNoAuth } from './hoc/RedirectForNoAuth/RedirectForNoAuth';
import { fetchAuthorization } from './store/api/fetchAuthorization/fetchAuthorization';
import { getError } from './store/selectors/getError/getError';
import { getIsCheckAuth } from './store/selectors/getIsCheckAuth/getIsCheckAuth';

import { AuthForm } from './ui/AuthForm';

export {
  AuthForm,
  RedirectForNoAuth,
  RedirectForAuth,
  getError,
  getIsCheckAuth,
  fetchAuthorization,
};
