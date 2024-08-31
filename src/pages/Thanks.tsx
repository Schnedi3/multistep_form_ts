import { NavLink } from "react-router-dom";

import { thanks } from "../data";
import "../css/thanks.css";

export const Thanks = () => {
  return (
    <section className="card_container">
      <article className="thanks_info">
        <img src={thanks.image} alt="thanks image" />
        <h2>{thanks.title}</h2>
        <p>{thanks.desc}</p>
      </article>

      <footer className="footer footer_right">
        <button className="footer_next">
          <NavLink to="/">Go to start</NavLink>
        </button>
      </footer>
    </section>
  );
};
