import { NavLink } from "react-router-dom";

import { addon, addons } from "../data";
import { IAddon } from "../types/types";
import { useFormContext } from "../context/useFormContext";

import "../css/addons.css";
import "../css/common.css";

export const Addons = () => {
  const { addonData, setAddonData, billing } = useFormContext();

  const handleSetAddon = (addon: IAddon, isChecked: boolean) => {
    isChecked
      ? setAddonData([...new Set([...addonData, addon])])
      : setAddonData(addonData.filter((item) => item.title !== addon.title));
  };

  return (
    <section className="card_container">
      <form className="addon_form">
        <div className="title">
          <h2>{addon.title}</h2>
          <p>{addon.desc}</p>
        </div>

        {addons.map((addon) => (
          <article className="addon" key={addon.title}>
            <input
              type="checkbox"
              id={addon.title}
              checked={addonData.some((item) => item.title === addon.title)}
              onChange={(e) => handleSetAddon(addon, e.target.checked)}
            />
            <label htmlFor={addon.title} className="addon_details">
              <div>
                <h4>{addon.title}</h4>
                <p>{addon.desc}</p>
              </div>
              <h3>
                +$
                {billing === "Yearly"
                  ? addon.year + "/yr"
                  : addon.month + "/mo"}
              </h3>
            </label>
          </article>
        ))}
      </form>

      <footer className="footer">
        <button className="footer_previous">
          <NavLink to="/plan">Go Back</NavLink>
        </button>

        <button
          className={`footer_next${
            addonData.length < 1 ? " footer_disabled" : ""
          }`}
        >
          <NavLink to="/summary">Next Step</NavLink>
        </button>
      </footer>
    </section>
  );
};
