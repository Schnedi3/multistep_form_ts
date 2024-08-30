import { NavLink } from "react-router-dom";

import { summary } from "../data";
import "../css/summary.css";

export const Summary = () => {
  return (
    <>
      <section className="card_container">
        <article className="title">
          <h1>{summary.title}</h1>
          <p>{summary.desc}</p>
        </article>

        <article className="summary">
          <div className="summary_plan">
            <div>
              <h4>Arcade (Monthly)</h4>
              <NavLink to="/plan">Change</NavLink>
            </div>
            <h3>$9/mo</h3>
          </div>

          <div className="summary_addon">
            <div>
              <p>Online service</p>
              <h3>+$1/mo</h3>
            </div>
            <div>
              <p>Larger storage</p>
              <h3>+$2/mo</h3>
            </div>
            <div>
              <p>Customizable profile</p>
              <h3>+$2/mo</h3>
            </div>
          </div>
        </article>

        <article className="total">
          <p>Total (per month)</p>
          <h3>+$12/mo</h3>
        </article>
      </section>

      <footer className="finish_footer">
        <button className="finish_previous">
          <NavLink to="/addons">Go Back</NavLink>
        </button>

        <button className="finish_next">
          <NavLink to="/thanks">Confirm</NavLink>
        </button>
      </footer>
    </>
  );
};
