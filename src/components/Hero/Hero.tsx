import React from "react";
import "./Hero.css";
import { assetPath } from "../../utils/assetPath";
import { AnimatedSection } from "../AnimatedSection/AnimatedSection";

export const Hero: React.FC = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <AnimatedSection as="div" variant="left" className="hero-content">
          <h1>
            <span className="w-blue">Delivering</span>
            <br />
            <span>
              <span className="w-red">More</span>{" "}
              <span className="w-blue">Than</span>
            </span>
            <br />
            <span className="w-blue">Just Freight.</span>
          </h1>
          <p>
            We prioritize reliability, precision, and strong partnerships in
            every shipment, ensuring a seamless and efficient logistics
            experience from start to finish.
          </p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">
              Our Services
            </a>
            <a href="#about" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </AnimatedSection>
        <AnimatedSection as="div" variant="right" className="hero-media">
          <img
            src={assetPath("images/containers.png")}
            alt="Stacked shipping containers at port"
            width={800}
            height={600}
          />
        </AnimatedSection>
      </div>
    </section>
  );
};
