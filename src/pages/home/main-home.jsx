import React from "react";
import { Hero } from "./hero";
import { CurrentWorks } from "./current-works";
import { TopFreelancers } from "./top-freelancers";
import { Service } from "./service";
import { Begin } from "./begin";
import { Outlet } from "react-router-dom";
import { Header } from "../../layout/header";
import { Footer } from "../../layout/footer";
import "./hero/hero.css";
import "./current-works/current.css";

export const DefaultComponents = () => {
  return (
    <React.Fragment>
      <section className="hero">
        <div className="max-w-[1380px] mx-auto px-5">
          <Hero />
        </div>
      </section>
      <section className="current">
        <div className="max-w-[1380px] mx-auto px-5">
          <CurrentWorks />
        </div>
      </section>
      <section className="top_freelancers">
        <div className="max-w-[1380px] mx-auto px-5">
          <TopFreelancers />
        </div>
      </section>
      <section className="service p-[100px]">
        <div className="max-w-[1380px] mx-auto px-5">
          <Service />
        </div>
      </section>
      <section className="begin">
        <div className="max-w-[1380px] mx-auto px-5">
          <Begin />
        </div>
      </section>
    </React.Fragment>
  );
};

export const MainHome = () => {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
};
