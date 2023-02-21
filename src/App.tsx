/* eslint-disable import/extensions */
import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import
{
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';
// eslint-disable-next-line import/no-named-as-default-member
import RegisterScreen from './pages/register-screen';
// eslint-disable-next-line @typescript-eslint/semi
import { AppRoute } from './const.tsx'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.MAIN}>
          <Redirect to={AppRoute.SIGN_IN} />
        </Route>
        <Route exact path={AppRoute.SIGN_IN}>
          <RegisterScreen />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
