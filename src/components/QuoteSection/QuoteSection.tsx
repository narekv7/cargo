import React from "react";
import { AnimatedSection } from "../AnimatedSection/AnimatedSection";

export const QuoteSection: React.FC = () => {
  return (
    <section className="quote-section" id="contact">
      <div className="container">
        <AnimatedSection as="div" variant="up">
          <div className="quote-header">
            <h2 className="section-title">
              REQUEST A QUOTE
            </h2>
            <p className="section-sub">
              Fill out the form below and our team will get back to you within an
              hour.
            </p>
          </div>

          <div className="quote-card">
            <form className="quote-form" id="quote-form">
              <div className="form-row form-half">
                <div>
                  <label htmlFor="quote-name">
                    Full Name / Company Name<span className="field-required">*</span>
                  </label>
                  <input
                    id="quote-name"
                    name="name"
                    type="text"
                    placeholder="Full Name / Company Name"
                  />
                </div>
                <div>
                  <label htmlFor="quote-email">
                    Email Address<span className="field-required">*</span>
                  </label>
                  <input
                    id="quote-email"
                    name="email"
                    type="email"
                    required
                    placeholder="Email Address"
                  />
                </div>
              </div>

              <div className="form-row form-half">
                <div>
                  <label htmlFor="quote-phone">
                    Phone Number<span className="field-required">*</span>
                  </label>
                  <input
                    id="quote-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone Number"
                  />
                </div>
                <div>
                  <label htmlFor="quote-mode">
                    Transportation Type<span className="field-required">*</span>
                  </label>
                  <select id="quote-mode" name="mode" defaultValue="ground">
                    <option value="air">Air Freight</option>
                    <option value="sea">Sea Freight</option>
                    <option value="ground">Ground Freight</option>
                    <option value="multimodal">Multimodal</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div>
                  <label htmlFor="quote-notes">Message</label>
                  <textarea
                    id="quote-notes"
                    name="notes"
                    placeholder="Tell us about your special needs and concerns"
                  />
                </div>
              </div>
            </form>
          </div>

          <div className="quote-submit-wrap" id="quote">
            <button
              type="submit"
              className="btn btn-primary quote-submit"
              form="quote-form"
            >
              SUBMIT A REQUEST
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

