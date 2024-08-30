import { NavLink } from "react-router-dom";

import { addon, addons } from "../data";
import "../css/addons.css";

export const Addons = () => {
  return (
    <>
      <section className="card_container">
        <div className="title">
          <h1>{addon.title}</h1>
          <p>{addon.desc}</p>
        </div>

        <form className="addon_form">
          {addons.map((addon) => (
            <div className="addon" key={addon.title}>
              <input type="radio" id={addon.title} />
              <label htmlFor={addon.title}>
                <div className="addon_details">
                  <h4>{addon.title}</h4>
                  <p>{addon.desc}</p>
                </div>
                <h3>${addon.month}/mo</h3>
              </label>
            </div>
          ))}
        </form>
      </section>

      <footer className="addon_footer">
        <button className="addon_previous">
          <NavLink to="/plan">Go Back</NavLink>
        </button>

        <button className="addon_next">
          <NavLink to="/summary">Next Step</NavLink>
        </button>
      </footer>
    </>
  );
};
