import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RedirectForAuth, RedirectForNoAuth } from '../../../../modules/Authorization';
import { LoginPage } from '../../../../pages/LoginPage';
import { MainPage } from '../../../../pages/MainPage';
import { SettingPage } from '../../../../pages/SettingPage';
import { Loader } from '../../../../ui/Loader';
import Layout from '../../../Layout/Layout';

import { RoutePath } from '../config/routeConfig';

function AppRouter() {
  return (
    <Routes>
      <Route
        key="layout"
        path={RoutePath.main || RoutePath.setting}
        element={(
          <Suspense fallback={<Loader />}>
            <RedirectForNoAuth><Layout /></RedirectForNoAuth>
          </Suspense>
        )}
      >
        <Route
          key={RoutePath.main}
          path={RoutePath.main}
          element={(
            <Suspense fallback={<Loader />}>
              <MainPage />
            </Suspense>
          )}
        />
        <Route
          key={RoutePath.setting}
          path={RoutePath.setting}
          element={(
            <Suspense fallback={<Loader />}>
              <SettingPage />
            </Suspense>
        )}
        />
      </Route>
      <Route
        key={RoutePath.login}
        path={RoutePath.login}
        element={(
          <Suspense fallback={<Loader />}>
            <RedirectForAuth><LoginPage /></RedirectForAuth>
          </Suspense>
        )}
      />
    </Routes>
  );
}

export default AppRouter;
