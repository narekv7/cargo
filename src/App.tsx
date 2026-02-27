import React from "react";
import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Services } from "./components/Services/Services";
import { CoreValues } from "./components/CoreValues/CoreValues";

export const App: React.FC = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Services />
        <CoreValues />
      </main>
    </>
  );
};
