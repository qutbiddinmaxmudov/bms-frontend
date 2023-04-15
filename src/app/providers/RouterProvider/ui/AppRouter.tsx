import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Loader } from '../../../../ui/Loader';

import { routeConfig } from '../config/routeConfig';

function AppRouter() {
  return (
    <Routes>
      {Object.values(routeConfig).map(({ element, path }) => (
        <Route
          key={path}
          path={path}
          element={(
            <Suspense fallback={<Loader />}>
              {element}
            </Suspense>

                )}
        />
      ))}
    </Routes>
  );
}

export default AppRouter;
