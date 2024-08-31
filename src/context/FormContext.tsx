import { createContext, PropsWithChildren, useState } from "react";

import {
  FormContextType,
  IForm,
  IFormDefault,
  IPlan,
  IDefaultPlan,
} from "../types/types";

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export const FormProvider = ({ children }: PropsWithChildren) => {
  const [personalData, setPersonalData] = useState<IForm>(IFormDefault);

  const [planData, setPlanData] = useState<IPlan>(IDefaultPlan);
  const [billing, setBilling] = useState<string>("Monthly");

  return (
    <FormContext.Provider
      value={{
        personalData,
        setPersonalData,
        planData,
        setPlanData,
        billing,
        setBilling,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
