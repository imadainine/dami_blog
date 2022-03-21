import React from "react";
import "./App.scss";
import { Navbar } from "./components";
import {
  About,
  Footer,
  Header,
  Skills,
  Testimonial,
  ContactMe,
  Work,
} from "./container/index";

const App = () => {
  return (
    <div className="app ">
      <Navbar />
      <Header />
      <About />
      <Work />
      <Skills />
      <Testimonial />
      <ContactMe />
      <Footer />
    </div>
  );
};

export default App;
