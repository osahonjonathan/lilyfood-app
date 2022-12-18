import React from "react";
import hero from "../images/hero.png";
import HeroWrapper from "../wrappers/HeroWrapper";

const Hero = () => {
  return (
    <HeroWrapper>
      <section className="hero">
        <div className="hero-text">
          <div>
            <h3>
              Order <span>Food</span> anytime, anywhere.
            </h3>
            <p>
              Browse from our lists of specials to place your oder and have your
              food delivered to you in no time. Affordable, tasty and fast!
            </p>
          </div>
        </div>
        <div className="hero-image-container">
          <img src={hero} alt="" className="hero-img" />
        </div>
      </section>
    </HeroWrapper>
  );
};

export default Hero;
