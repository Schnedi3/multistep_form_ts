import { BrowserRouter, Route, Routes } from "react-router-dom";

import { FormProvider } from "./context/FormContext";

import { Menu } from "./components/Menu";
import { Personal } from "./pages/Personal";
import { Plan } from "./pages/Plan";
import { Addons } from "./pages/Addons";
import { Summary } from "./pages/Summary";
import { Thanks } from "./pages/Thanks";

import "./css/app.css";

export const App = () => {
  return (
    <main className="app container">
      <FormProvider>
        <BrowserRouter>
          <Menu />
          <figure className="header_img"></figure>

          <Routes>
            <Route path="/" element={<Personal />} />
            <Route path="/plan" element={<Plan />} />
            <Route path="/addons" element={<Addons />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/thanks" element={<Thanks />} />
          </Routes>
        </BrowserRouter>
      </FormProvider>
    </main>
  );
};
