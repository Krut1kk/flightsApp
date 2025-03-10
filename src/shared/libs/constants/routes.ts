import { routeConfig } from "@/app/config/route";

export const getFlightsRoute = () => routeConfig.flights;

export const getCartRoute = () => routeConfig.cart;

export const getFlightDetailsRoute = (id: string) =>
  routeConfig.flightDetails.replace(":id", id);

export const getFlightDetailsRoutePattern = () => routeConfig.flightDetails;
