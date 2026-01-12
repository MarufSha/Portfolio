"use client";
import Contact from "./Contact/Contact";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Resume from "./Resume/Resume";
import Services from "./Services/Services";
import Skills from "./Skills/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HomePage = () => {
  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({
        duration: 1000,
        easing: "ease",
        once: true,
        anchorPlacement: "top-bottom",
      });
    };

    initAOS();
  }, []);

  return (
    <div className="relative min-h-screen">
      <Hero />
      <Services />
      <Resume />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};
export default HomePage;
