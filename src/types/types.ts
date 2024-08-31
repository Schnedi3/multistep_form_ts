export interface IForm {
  email: string;
  name: string;
  phone: string;
}

export const IFormDefault = {
  name: "",
  email: "",
  phone: "",
};

export interface IPlan {
  image: string;
  title: string;
  month: number;
  year: number;
}

export const IDefaultPlan = {
  image: "",
  title: "",
  month: 0,
  year: 0,
};

export interface FormContextType {
  personalData: IForm;
  setPersonalData: (personalData: IForm) => void;
  planData: IPlan;
  setPlanData: (planData: IPlan) => void;
  billing: string;
  setBilling: (billing: string) => void;
}
