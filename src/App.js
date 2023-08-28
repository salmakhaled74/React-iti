import React from "react";
import "./index.css";
import Header from "./components/header";
import About from "./components/About";
import Skills from "./components/skills";
import Footer from './components/footer';
import Portofolio from "./components/portofolio";

function App() {
  return (
    <>
      <Header />
      <About />
      <Skills />
      <Portofolio/>
      <Footer />
    </>
  );
}

export default App;
