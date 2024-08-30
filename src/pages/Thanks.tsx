import { thanks } from "../data";
import "../css/thanks.css";

export const Thanks = () => {
  return (
    <section className="thanks_container">
      <div className="thanks_title">
        <img src={thanks.image} alt="thanks image" />
        <h1>{thanks.title}</h1>
        <p>{thanks.desc}</p>
      </div>
    </section>
  );
};
