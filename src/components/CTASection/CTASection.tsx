import React from "react";
import { assetPath } from "../../utils/assetPath";
import { AnimatedSection } from "../AnimatedSection/AnimatedSection";

export const CTASection: React.FC = () => {
  const backgroundImageUrl = assetPath("images/transport-logistics.png");

  return (
    <section
      className="cta-block"
      id="contact-cta"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      aria-labelledby="cta-title"
    >
      <AnimatedSection as="div" variant="up" className="container">
        <h2 id="cta-title">
          Ready to move your cargo with confidence?
        </h2>
        <p>
          Fast, secure and reliable logistics solutions are just a click away.
        </p>
        <a href="#contact" className="btn cta-btn">
          Contact us
        </a>
      </AnimatedSection>
    </section>
  );
};

