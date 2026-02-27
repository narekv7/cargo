import React from "react";
import { assetPath } from "../../utils/assetPath";
import { AnimatedSection } from "../AnimatedSection/AnimatedSection";

export const GlobalReach: React.FC = () => {
  return (
    <section className="global-reach" id="geography">
      <div className="container">
        <AnimatedSection
          as="div"
          variant="left"
          className="global-text"
        >
          <div className="about-label">
            <span className="about-dot" />
            <span className="about-label-text">Our Geography</span>
          </div>

          <h2 className="section-title global-title">
            <span>We Deliver in Over</span>
            <br />
            <span>120+ Countries</span>
          </h2>

          <p className="global-copy">
            CargoBulls carries out cargo transportation in more than 120
            countries worldwide, providing a full range of logistics services
            for air, sea, and land freight and ensuring fast, safe, and
            reliable delivery of your cargo.
          </p>

          <a href="#destinations" className="geo-btn">
            View destination list
          </a>
        </AnimatedSection>

        <AnimatedSection
          as="div"
          variant="right"
          className="global-reach-media"
          aria-hidden="true"
        >
          <img
            src={assetPath("images/map.png")}
            alt="World map with highlighted CargoBulls destinations"
            loading="lazy"
          />
        </AnimatedSection>
      </div>
    </section>
  );
};

