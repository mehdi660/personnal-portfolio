import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import Project from "../components/Project";
import ContactMe from "../components/ContactMe";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Project />
      <ContactMe />
    </div>
  );
};

export default Home;
