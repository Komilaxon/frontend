import { Projects } from "./projects";
import { StockHero } from "./stock-hero";

export const MainStock = () => {
  return (
    <main>
      <section className="stock_hero">
        <div className="container max-w-[1380px] mx-auto px-5">
          <StockHero />
        </div>
      </section>
      <section className="projects">
        <div className="container max-w-[1380px] mx-auto px-5">
          <Projects />
        </div>
      </section>
    </main>
  );
};
