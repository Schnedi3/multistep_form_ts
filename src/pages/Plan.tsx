import { NavLink } from "react-router-dom";

import { plan, plans } from "../data";
import "../css/plan.css";

export const Plan = () => {
  return (
    <>
      <section className="card_container">
        <div className="title">
          <h1>{plan.title}</h1>
          <p>{plan.desc}</p>
        </div>

        <form className="plan_form">
          {plans.map((plan) => (
            <div className="plan" key={plan.title}>
              <input type="radio" id={plan.title} name="plan" />
              <label htmlFor={plan.title}>
                <img src={plan.image} alt={`${plan.title} plan`} />
                <h4>{plan.title}</h4>
                <p>${plan.month}/mo</p>
              </label>
            </div>
          ))}
        </form>

        <div className="billing">
          <p>Monthly</p>
          <div className="slider">
            <span></span>
          </div>
          <p>Yearly</p>
        </div>
      </section>

      <footer className="plan_footer">
        <button className="plan_previous">
          <NavLink to="/">Go Back</NavLink>
        </button>

        <button className="plan_next">
          <NavLink to="/addons">Next Step</NavLink>
        </button>
      </footer>
    </>
  );
};
