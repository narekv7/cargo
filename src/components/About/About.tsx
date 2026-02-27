import React from "react";
import "./About.css";
import { assetPath } from "../../utils/assetPath";

export const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="container about-layout">
        <div className="about-text">
          <div className="about-label">
            <span className="about-dot" />
            <span className="about-label-text">About Us</span>
          </div>
          <h2 className="about-title">
            <span>Beyond Just Shipping.</span>
            <br />
            <span>Tailored Logistics Solutions</span>
            <br />
            <span>for a Connected World.</span>
          </h2>
          <p className="about-copy">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form, by
            injected humour, or randomised words which don't look even
            slightly believable.
          </p>
          <p className="about-copy">
            If you are going to use a passage of Lorem Ipsum, you need to be
            sure.
          </p>
        </div>
        <div className="about-grid">
          <div className="about-card about-card--stat">
            <div className="about-card-number">15+</div>
            <div className="about-card-label">Years Of Experience</div>
          </div>
          <div className="about-card about-card--stat">
            <div className="about-card-number">50K+</div>
            <div className="about-card-label">Tons Of Cargo</div>
          </div>
          <div className="about-card about-card--image">
            <img
              src={assetPath("images/au_1.png")}
              alt="Cargo plane and pallets on tarmac"
              width={180}
              height={160}
              loading="lazy"
            />
          </div>
          <div className="about-card about-card--image">
            <img
              src={assetPath("images/au_2.png")}
              alt="Truck and shipping containers"
              width={180}
              height={160}
              loading="lazy"
            />
          </div>
          <div className="about-card about-card--stat">
            <div className="about-card-number">120+</div>
            <div className="about-card-label">Global Partners</div>
          </div>
          <div className="about-card about-card--image">
            <img
              src={assetPath("images/au_3.png")}
              alt="Airplane over cargo port"
              width={180}
              height={160}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
