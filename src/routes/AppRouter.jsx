import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "../components/Layout";
import Signin from "./Signin";
import FAQ from "./FAQ";
import ContactUS from "./ContactUS";
import LearnReact from "./LearnReact";
import UseState from "./LearnReact/LearnUseState";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Signin />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="contact-us" element={<ContactUS />} />
        </Route>

        <Route path="/learn-react">
          <Route index element={<LearnReact />} />
          <Route path="useState" element={<UseState />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
