import React from "react";
import { assetPath } from "../../utils/assetPath";

export const Footer: React.FC = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-col-social">
          <a href="#hero" className="logo-link">
            <img
              src={assetPath("logo.svg")}
              alt="CARGOBULLS"
              width={150}
              height={60}
            />
          </a>
          <p>
            Reliable logistics partner for air, sea, and ground freight,
            connecting your cargo with key markets worldwide.
          </p>
          <div className="footer-social">
            <a href="#" aria-label="LinkedIn">
              <span />
            </a>
            <a href="#" aria-label="Facebook">
              <span />
            </a>
            <a href="#" aria-label="Instagram">
              <span />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3 className="footer-heading">Company</h3>
          <ul className="footer-nav">
            <li>
              <a href="#about">About us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#geography">Our geography</a>
            </li>
          </ul>
        </div>

        <div className="footer-links">
          <h3 className="footer-heading">Support</h3>
          <ul className="footer-nav">
            <li>
              <a href="#how-we-work">How we work</a>
            </li>
            <li>
              <a href="#contact">Request a quote</a>
            </li>
          </ul>
        </div>

        <div className="footer-col-contact">
          <h3 className="footer-heading">Contact</h3>
          <a href="tel:+37493001123" className="footer-phone">
            +374 93 001123
          </a>
          <a href="mailto:info@cargobulls.am" className="footer-email">
            info@cargobulls.am
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} CARGOBULLS. All rights reserved.</span>
      </div>
    </footer>
  );
};

