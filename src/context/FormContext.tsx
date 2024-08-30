import { createContext, PropsWithChildren, useState } from "react";

import { FormContextType, IForm, IFormDeault } from "../types/types";

export const FormContext = createContext<FormContextType | undefined>(
  undefined
);

export const FormProvider = ({ children }: PropsWithChildren) => {
  const [personalData, setPersonalData] = useState<IForm>(IFormDefault);

  return (
    <FormContext.Provider value={{ personalData, setPersonalData }}>
      {children}
    </FormContext.Provider>
  );
};
