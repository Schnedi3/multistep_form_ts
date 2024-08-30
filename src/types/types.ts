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

export interface FormContextType {
  personalData: IForm;
  setPersonalData: (personalData: IForm) => void;
}
