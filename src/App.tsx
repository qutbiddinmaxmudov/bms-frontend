import React from 'react';
import
{
  Switch,
  Route,
  BrowserRouter,
  Redirect,
} from 'react-router-dom';
import RegisterScreen from './pages/RegisterScreen';
import { AppRoute } from './const';

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
