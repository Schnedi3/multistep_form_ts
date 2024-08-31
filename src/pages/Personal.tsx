import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { personal } from "../data";
import { IForm } from "../types/types";
import { personalSchema } from "../schemas/personalSchema";
import { useFormContext } from "../context/useFormContext";

import "../css/personal.css";
import "../css/common.css";

export const Personal = () => {
  const { personalData, setPersonalData } = useFormContext();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<IForm>({
    resolver: zodResolver(personalSchema),
    mode: "onChange",
    defaultValues: personalData,
  });

  const onSubmit = (data: IForm) => {
    if (isValid) {
      setPersonalData(data);
      navigate("/plan");
    }
  };

  return (
    <section className="card_container">
      <form
        id="myform"
        className="personal_form"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="title">
          <h1>{personal.title}</h1>
          <p>{personal.desc}</p>
        </div>

        <label>
          Name
          {errors.name && <span className="error">{errors.name.message}</span>}
          <input
            type="text"
            placeholder="John Doe"
            {...register("name")}
            className={errors.name ? "input_error" : ""}
          />
        </label>
        <label>
          Email Address
          {errors.email && (
            <span className="error">{errors.email.message}</span>
          )}
          <input
            type="email"
            placeholder="johndoe@lorem.com"
            {...register("email")}
            className={errors.email ? "input_error" : ""}
          />
        </label>
        <label>
          Phone number
          {errors.phone && (
            <span className="error">{errors.phone.message}</span>
          )}
          <input
            type="tel"
            placeholder="123 456 789"
            {...register("phone")}
            className={errors.phone ? "input_error" : ""}
          />
        </label>
      </form>

      <footer className="footer footer_right">
        <button type="submit" form="myform" className="footer_next">
          Next Step
        </button>
      </footer>
    </section>
  );
};
