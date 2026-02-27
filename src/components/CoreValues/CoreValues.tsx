import React from "react";
import "./CoreValues.css";

const TOP_CARDS = [
  {
    title: "Competitive Rates",
    description: "We ensure every delivery meets our high standards, from start to finish",
  },
  {
    title: "Satisfaction",
    description: "Your needs are our priority — every mile of the journey.",
  },
  {
    title: "Tailored Solutions",
    description: "No two businesses are the same, and neither are their logistics needs.",
  },
] as const;

export const CoreValues: React.FC = () => {
  return (
    <section className="core-values" id="core-values">
      <div className="container">
        <div className="core-values-header">
          <div className="core-values-label">
            <span className="core-values-dot" />
            <span className="core-values-label-text">Our Core Values</span>
          </div>
          <h2 className="core-values-title">Built On Trust And Excellence</h2>
        </div>

        {/* Top row: Competitive 604×202, Satisfaction 285×294, Tailored 285×294 */}
        <div className="core-values-top">
          {TOP_CARDS.map((card) => (
            <div key={card.title} className="core-card core-card--text">
              <div className="core-card-header">
                <span className="core-icon">
                  <img src="/icons/check.svg" alt="" aria-hidden="true" />
                </span>
                <h3 className="core-card-title"><span className="core-card-title-pill">{card.title}</span></h3>
              </div>
              <p className="core-card-body">{card.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom row: vessel 286×454 | going global 286×454 | port 603×350 — three equal-sized columns for vessel & card */}
        <div className="core-values-bottom">
          <div className="core-block-image core-block-image--vessel">
            <img
              src="/images/vessel.png"
              alt="Cargo vessel at sea"
              width={286}
              height={454}
              loading="lazy"
            />
          </div>
          <div className="core-card core-card--text core-card--going-global">
            <div className="core-card-header">
              <span className="core-icon">
                <img src="/icons/check.svg" alt="" aria-hidden="true" />
              </span>
              <h3 className="core-card-title"><span className="core-card-title-pill">Going Global</span></h3>
            </div>
            <p className="core-card-body">
              With an extensive network spanning the globe, we connect you to
              key markets and emerging economies.
            </p>
          </div>
          <div className="core-block core-block--port">
            <div className="core-block-image core-block-image--port">
              <img
                src="/images/port.png"
                alt="Airport and cargo hub"
                width={603}
                height={350}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
