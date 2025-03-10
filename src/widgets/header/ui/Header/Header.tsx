// ui
import { NavLink } from "@/shared/ui/NavLink";
// constanst
import { getFlightsRoute, getCartRoute } from "@/shared/libs/constants/routes";
// styles
import styles from "./Header.module.scss";

export const Header = ({}) => {
  return (
    <div className={styles.Header}>
      <NavLink to={getFlightsRoute()}>Flights</NavLink>
      <NavLink to={getCartRoute()}>Cart</NavLink>
    </div>
  );
};
