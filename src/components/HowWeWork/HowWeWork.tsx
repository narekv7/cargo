import React from "react";
import { assetPath } from "../../utils/assetPath";

const STEPS = [
  {
    key: "request",
    title: "Request",
    description: "After request we check the products to ship.",
    icon: assetPath("icons/request_box.svg"),
  },
  {
    key: "planning",
    title: "Planning",
    description: "Quantity and quality are checked and sent to warehouse.",
    icon: assetPath("icons/target_box.svg"),
  },
  {
    key: "packaging",
    title: "Packaging & Distribution",
    description: "Additional checkings are carried out.",
    icon: assetPath("icons/away_box.svg"),
  },
  {
    key: "transportation",
    title: "Transportation",
    description:
      "The cargo is ready to transport in a customer-friendly way.",
    icon: assetPath("icons/car.svg"),
  },
];

export const HowWeWork: React.FC = () => {
  return (
    <section className="why-choose" id="how-we-work">
      <div className="container">
        <div className="services-header">
          <div className="about-label">
            <span className="about-dot" />
            <span className="about-label-text">How We Work</span>
          </div>
          <h2 className="section-title">
            Fast and Reliable Shipping
          </h2>
        </div>

        <div className="features-grid">
          {STEPS.map((step) => (
            <article key={step.key} className="feature-card">
              <div>
                <img
                  src={step.icon}
                  alt=""
                  aria-hidden="true"
                  className="feature-icon"
                />
                <h3>{step.title}</h3>
              </div>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

