import React from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { CoreValues } from "./components/CoreValues/CoreValues";
import { CTASection } from "./components/CTASection/CTASection";
import { GlobalReach } from "./components/GlobalReach/GlobalReach";
import { QuoteSection } from "./components/QuoteSection/QuoteSection";
import { HowWeWork } from "./components/HowWeWork/HowWeWork";
import { Footer } from "./components/Footer/Footer";

export const App: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <CoreValues />
        <CTASection />
        <GlobalReach />
        <HowWeWork />
        <QuoteSection />
      </main>
      {/* <Footer /> */}
    </>
  );
};
