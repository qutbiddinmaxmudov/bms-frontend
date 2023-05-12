import React from 'react';
import { RouteProps } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage';
import { SettingPage } from 'pages/SettingPage';
import { MainPage } from 'pages/MainPage';
import { RedirectForAuth } from '../../../../modules/Authorization/hoc/RedirectForAuth/RedirectForAuth';
import { RedirectForNoAuth } from '../../../../modules/Authorization';

export enum AppRoutes {
  MAIN = 'main',
  LOGIN = 'login',
  SETTING = 'setting',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.LOGIN]: '/login',
  [AppRoutes.SETTING]: '/setting',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <RedirectForNoAuth><MainPage /></RedirectForNoAuth>,
  },
  [AppRoutes.LOGIN]: {
    path: RoutePath.login,
    element: <RedirectForAuth><LoginPage /></RedirectForAuth>,
  },
  [AppRoutes.SETTING]: {
    path: RoutePath.setting,
    element: <RedirectForNoAuth><SettingPage /></RedirectForNoAuth>,
  },
};
