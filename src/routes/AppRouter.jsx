import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "../components/Layout";
import Signin from "./Signin";
import FAQ from "./FAQ";
import ContactUS from "./ContactUS";
import LearnReact from "./LearnReact";
import UseState from "./LearnReact/LearnUseState";
import LearnUseEffect from "./LearnReact/learn-useEffect";
import LearnUseRef from "./LearnReact/learn-useRef";
import LearnUseMemo from "./LearnReact/learn-useMemo";
import Todo from "./todo";
import PDSample from "./LearnReact/props-drilling/sample1";
import PropsDrilling2 from "./LearnReact/props-drilling";
import RandomNumber from "./random-number";
import { useMyContext } from "../contextApi/ContextProvider";

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
          <Route path="useEffect" element={<LearnUseEffect />} />
          <Route path="useRef" element={<LearnUseRef />} />
          <Route path="useMemo" element={<LearnUseMemo />} />
          <Route path="props-drilling" element={<PDSample />} />
        </Route>
        <Route path="todo" element={<Todo />} />
        <Route path="props-drilling2" element={<PropsDrilling2 />} />
        <Route path="/randomnumber" element={<RandomNumber />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
