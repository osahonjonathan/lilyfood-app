import React from "react";
import {
  Hero,
  NavBarSection,
  Sidebar,
  SpecialMeal,
  Newsletter,
  Footer,
  FooterLast,
} from "../components";

const Landing = () => {
  return (
    <>
      <section className="landing">
        <NavBarSection />
        <Sidebar />
        <Hero />
        <SpecialMeal />
        <Newsletter />
        <Footer />
        <FooterLast />
      </section>
    </>
  );
};

export default Landing;
