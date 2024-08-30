import { NavLink } from "react-router-dom";

import { personal } from "../data";
import "../css/personal.css";

export const Personal = () => {
  return (
    <>
      <section className="card_container">
        <div className="title">
          <h1>{personal.title}</h1>
          <p>{personal.desc}</p>
        </div>

        <form className="personal_form">
          <label>
            Name
            <input type="text" placeholder="e.g Stephen King" />
          </label>
          <label>
            Email Address
            <input type="email" placeholder="e.g stephenking@lorem.com" />
          </label>
          <label>
            Phone number
            <input type="tel" placeholder="e.g 123 456 789" />
          </label>
        </form>
      </section>

      <footer className="personal_footer">
        <button className="personal_next">
          <NavLink to="/plan">Next Step</NavLink>
        </button>
      </footer>
    </>
  );
};
