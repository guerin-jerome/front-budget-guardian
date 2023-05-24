import { MenuProps } from "./menu.type";
import "./menu.css";
import classNames from "classnames";

export const Menu = ({ items }: MenuProps) => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {items.map(({ text, href, isActive, onClick }) => (
          <li className="nav-item" key={text}>
            <a
              onClick={onClick}
              className={classNames("nav-link", { active: isActive })}
              href={href}
            >
              {text.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
