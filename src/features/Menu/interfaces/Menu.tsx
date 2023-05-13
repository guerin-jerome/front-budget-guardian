import { Outlet } from "react-router-dom";
import { useMenu } from "../hooks/useMenu";
import classNames from "classnames";
import "./style.css";

export const Menu = () => {
  const { menuItems, onClickItem } = useMenu();

  return (
    <>
      <nav className="navbar">
        <ul className="navbar-nav">
          {menuItems.map(({ text, href, isActive }) => (
            <li className="nav-item" key={text}>
              <a
                onClick={(event) => onClickItem(event, href)}
                className={classNames("nav-link", { active: isActive })}
                href={href}
              >
                {text.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Outlet />
    </>
  );
};
