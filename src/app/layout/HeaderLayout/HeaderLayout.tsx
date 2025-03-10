// widgets
import { Header } from "@/widgets/header";
// react
import { Outlet } from "react-router-dom";

export const HeaderLayout = ({}) => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
