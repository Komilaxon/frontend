import React from "react";
import { Stock2Projects } from "./projects/stock2.projects";
import { Stock2Header } from "./stock2-header/stock2.header";

export const MainStock2 = () => {
  return (
    <React.Fragment>
      <header className="py-[20px] bg-[#F7F6FF]">
        <div className="max-w-[1380px] mx-auto px-5">
          <Stock2Header />
        </div>
      </header>
      <main>
        <section className="stock2_projects">
          <div className="container">
            <Stock2Projects />
          </div>
        </section>
      </main>
    </React.Fragment>
  );
};
