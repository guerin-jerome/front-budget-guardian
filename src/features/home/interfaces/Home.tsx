import { Menu, Typography } from "@/common/components";
import { Outlet } from "react-router-dom";
import { useHome } from "../hooks/useHome";
import "./style.css";

const { Title } = Typography;

export const Home = () => {
  const { menuItems, pageTitle } = useHome();

  return (
    <>
      <Menu items={menuItems} />
      <div className="container">
        <Title level={2}>{pageTitle}</Title>
        <Outlet />
      </div>
    </>
  );
};
