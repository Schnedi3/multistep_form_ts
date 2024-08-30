import { NavLink } from "react-router-dom";

import "../css/menu.css";

export const Menu = () => {
  return (
    <nav className="menu container">
      <ul className="menu_links">
        <li>
          <NavLink to="/">1</NavLink>
        </li>
        <li>
          <NavLink to="/plan">2</NavLink>
        </li>
        <li>
          <NavLink to="/addons">3</NavLink>
        </li>
        <li>
          <NavLink to="/summary">4</NavLink>
        </li>
      </ul>
    </nav>
  );
};
