import React, { useState } from "react";
import "./Services.css";
import { assetPath } from "../../utils/assetPath";
import { AnimatedSection } from "../AnimatedSection/AnimatedSection";

const TABS = [
  { id: "air", label: "Air Freight" },
  { id: "sea", label: "Sea Freight" },
  { id: "ground", label: "Ground Freight" },
  { id: "multimodal", label: "Multimodal Freight" },
  { id: "other", label: "Other Solutions" },
] as const;

const SERVICES_CONTENT: Record<
  (typeof TABS)[number]["id"],
  { headline: string; paragraph: string; image: string; imageAlt: string }
> = {
  air: {
    headline: "Fast, reliable shipping for high-priority items across the globe.",
    paragraph:
      "When time is of the essence and your cargo cannot afford delays, air freight provides the ultimate solution for businesses and individuals who demand speed without compromising on security. This premium shipping method leverages the world's most extensive airline networks to transport everything.",
    image: assetPath("images/plane.png"),
    imageAlt: "Air freight cargo",
  },
  sea: {
    headline: "Cost-effective ocean freight for large and heavy shipments.",
    paragraph:
      "Sea freight is the backbone of global trade, offering unmatched capacity and economy for bulk cargo. We coordinate full container (FCL) and less than container (LCL) shipments with major carriers, ensuring your goods reach ports worldwide safely and on schedule.",
    image: assetPath("images/services-sea.jpg"),
    imageAlt: "Sea freight and containers",
  },
  ground: {
    headline: "Door-to-door road and rail solutions for regional distribution.",
    paragraph:
      "From local trucking to cross-border rail, our ground freight network connects warehouses, factories, and retail locations. We handle customs, documentation, and last-mile delivery so your supply chain stays seamless across regions.",
    image: assetPath("images/services-ground.jpg"),
    imageAlt: "Ground freight and trucking",
  },
  multimodal: {
    headline: "Combined air, sea, and ground for flexible end-to-end logistics.",
    paragraph:
      "Complex supply chains often need more than one mode. Our multimodal service designs routes that mix air, ocean, and road transport to optimize cost and speed. One point of contact, one invoice, and full visibility from origin to destination.",
    image: assetPath("images/services-multimodal.jpg"),
    imageAlt: "Multimodal logistics",
  },
  other: {
    headline: "Warehousing, packaging, and tailored logistics support.",
    paragraph:
      "Beyond transit we offer warehousing, pick and pack, labeling, and customs brokerage. Whether you need a one-off project or ongoing support, our team tailors solutions to your requirements and integrates with your existing processes.",
    image: assetPath("images/services-other.jpg"),
    imageAlt: "Logistics and warehousing",
  },
};

export const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]["id"]>("air");

  return (
    <section className="services" id="services">
      <div className="container">
        <AnimatedSection as="div" variant="up" className="services-header">
          <div className="services-label">
            <span className="services-dot" />
            <span className="services-label-text">Our Freight Solutions</span>
          </div>
          <h2 className="services-title">
            Expertly Managing Every Step From Transit To Warehousing
          </h2>
        </AnimatedSection>

        <div className="services-tabs" role="tablist" aria-label="Service types">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`panel-${tab.id}`}
              id={`tab-${tab.id}`}
              className={`services-tab ${activeTab === tab.id ? "is-active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="services-content">
          <div className="services-tab-panels">
            {TABS.map((tab) => {
              const content = SERVICES_CONTENT[tab.id];
              return (
                <div
                  key={tab.id}
                  id={`panel-${tab.id}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${tab.id}`}
                  className={`services-tab-panel ${activeTab === tab.id ? "is-active" : ""}`}
                >
                  <AnimatedSection
                    as="div"
                    variant="left"
                    className="services-panel-image"
                  >
                    <img
                      src={content.image}
                      alt={content.imageAlt}
                      width={560}
                      height={320}
                      loading="lazy"
                    />
                  </AnimatedSection>
                  <AnimatedSection
                    as="div"
                    variant="right"
                    className="services-panel-text"
                  >
                    <h3 className="services-panel-headline">{content.headline}</h3>
                    <p className="services-panel-para">{content.paragraph}</p>
                    <a href="#quote" className="btn services-btn">
                      Request a Quote
                    </a>
                  </AnimatedSection>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
