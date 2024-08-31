import { NavLink } from "react-router-dom";

import "../css/menu.css";

export const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu_links">
        <li>
          <NavLink to="/">1</NavLink>
          <div>
            <p>step 1</p>
            <h3>Your info</h3>
          </div>
        </li>
        <li>
          <NavLink to="/plan">2</NavLink>
          <div>
            <p>step 2</p>
            <h3>Select plan</h3>
          </div>
        </li>
        <li>
          <NavLink to="/addons">3</NavLink>
          <div>
            <p>step 3</p>
            <h3>Add-ons</h3>
          </div>
        </li>
        <li>
          <NavLink to="/summary">4</NavLink>
          <div>
            <p>step 4</p>
            <h3>Summary</h3>
          </div>
        </li>
      </ul>
    </nav>
  );
};
