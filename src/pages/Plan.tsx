import { NavLink } from "react-router-dom";

import { plan, plans } from "../data";
import { IPlan } from "../types/types";
import { useFormContext } from "../context/useFormContext";

import "../css/plan.css";

export const Plan = () => {
  const { planData, setPlanData, billing, setBilling } = useFormContext();

  const handleSetPlan = (plan: IPlan) => {
    setPlanData(plan);
  };

  const handleBillingChange = () => {
    setBilling(billing === "Monthly" ? "Yearly" : "Monthly");
  };

  return (
    <>
      <section className="card_container">
        <div className="title">
          <h2>{plan.title}</h2>
          <p>{plan.desc}</p>
        </div>

        <form className="plan_form">
          {plans.map((plan) => (
            <article
              className={`plan${
                planData.title === plan.title ? " checked" : ""
              }`}
              key={plan.title}
            >
              <input
                type="radio"
                id={plan.title}
                name="plan"
                checked={planData.title === plan.title}
              />
              <label htmlFor={plan.title} onClick={() => handleSetPlan(plan)}>
                <img src={plan.image} alt={`${plan.title} plan`} />
                <div>
                  <h4>{plan.title}</h4>
                  {billing === "Yearly" ? <p>2 months free</p> : ""}
                </div>
                <p>
                  $
                  {billing === "Yearly"
                    ? plan.year + "/yr"
                    : plan.month + "/mo"}
                </p>
              </label>
            </article>
          ))}
        </form>

        <div
          className={`billing${billing === "Yearly" ? " yearly" : " monthly"}`}
        >
          <p>Monthly</p>
          <label className="switch">
            <input
              type="checkbox"
              value={billing}
              onChange={handleBillingChange}
              checked={billing === "Yearly" ? true : false}
            />
            <span
              className={`slider${
                billing === "Yearly" ? " slider_active" : ""
              }`}
            ></span>
          </label>
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
