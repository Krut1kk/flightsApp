// src/app/router/AppRouter.tsx

import { Routes, Route, Navigate } from "react-router-dom";
// Layout
import { HeaderLayout } from "@/app/layout/HeaderLayout";
// Страницы
import { FlightsPage } from "@/pages/flightsPage";
import { FlightDetailsPage } from "@/pages/flightDetailsPage";
import { CartPage } from "@/pages/cartPage";
// Константы маршрутов
import {
  getFlightsRoute,
  getFlightDetailsRoutePattern,
  getCartRoute,
} from "@/shared/libs/constants/routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<HeaderLayout />}>
        {/* Страница списка рейсов */}
        <Route path={getFlightsRoute()} element={<FlightsPage />} />

        {/* Страница деталей рейса, с параметром :id */}
        <Route
          path={getFlightDetailsRoutePattern()}
          element={<FlightDetailsPage />}
        />

        {/* Страница корзины */}
        <Route path={getCartRoute()} element={<CartPage />} />
      </Route>

      {/* Редирект для несуществующих маршрутов на страницу списка рейсов */}
      <Route path="*" element={<Navigate to={getFlightsRoute()} replace />} />
    </Routes>
  );
};
