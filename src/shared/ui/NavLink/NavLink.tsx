// react
import { FC, ReactNode } from "react";
import { NavLink as ReactRouterLink } from "react-router-dom";
// styles
import "./NavLink.scss";

interface NavLinkProps {
  to: string;
  children: ReactNode;
}

export const NavLink: FC<NavLinkProps> = ({ to, children }) => {
  return (
    <ReactRouterLink
      to={to}
      className={({ isActive }) => (isActive ? "active" : "")}
    >
      {children}
    </ReactRouterLink>
  );
};
