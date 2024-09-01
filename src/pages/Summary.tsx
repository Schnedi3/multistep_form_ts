import { NavLink } from "react-router-dom";

import { summary } from "../data";
import { useFormContext } from "../context/useFormContext";

import "../css/summary.css";
import "../css/common.css";

export const Summary = () => {
  const { planData, addonData, billing, handleCleanForm } = useFormContext();

  const planCost = billing === "Yearly" ? planData.year : planData.month;
  const addonsCost = addonData.reduce((total, addon) => {
    return total + (billing === "Yearly" ? addon.year : addon.month);
  }, 0);
  const totalCost = planCost + addonsCost;

  return (
    <section className="summary_container">
      <article className="title">
        <h2>{summary.title}</h2>
        <p>{summary.desc}</p>
      </article>

      <article className="summary">
        <div className="summary_plan">
          <div>
            <h4>
              {planData.title} ({billing})
            </h4>
            <NavLink to="/plan">Change</NavLink>
          </div>
          <h3>${billing === "Yearly" ? planData.year : planData.month}</h3>
        </div>

        {addonData.map((addon) => (
          <div className="summary_addon">
            <p>{addon.title}</p>
            <h3>+${billing === "Yearly" ? addon.year : addon.month}</h3>
          </div>
        ))}
      </article>

      <article className="total">
        <p>Total ({billing === "Yearly" ? "per year" : "per month"})</p>
        <h3>
          ${totalCost}
          {billing === "Yearly" ? "/yr" : "/mo"}
        </h3>
      </article>

      <footer className="footer">
        <button className="footer_previous">
          <NavLink to="/addons">Go Back</NavLink>
        </button>

        <button className="footer_next" onClick={handleCleanForm}>
          <NavLink to="/thanks">Confirm</NavLink>
        </button>
      </footer>
    </section>
  );
};
