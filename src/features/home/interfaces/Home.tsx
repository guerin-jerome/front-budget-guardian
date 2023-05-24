import { Menu } from "@/common/components";
import { Outlet } from "react-router-dom";
import { useHome } from "../hooks/useHome";

export const Home = () => {
  const { menuItems } = useHome();

  return (
    <>
      <Menu items={menuItems} />
      <Outlet />
    </>
  );
};
