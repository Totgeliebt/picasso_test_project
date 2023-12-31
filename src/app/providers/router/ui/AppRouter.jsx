import React, { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import {routeConfig} from "../../../../shared/config/routeConfig/routeConfig";
import PageLoader from "../../../../shared/ui/PageLoader/PageLoader";

const AppRouter = () => {
  const renderWithWrapper = useCallback((route) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        {route.element}
      </Suspense>
    );
    return (
      <Route
        key={route.path}
        path={route.path}
        element={element}
      />
    );
  }, []);
  return (
    <Routes>
      {Object.values(routeConfig)
        .map(renderWithWrapper)}
    </Routes>

  );
};

export default memo(AppRouter);
