import { UserHero } from "./hero";
import { UserWorks } from "./works";
import { Reviews } from "./reviews";

export const MainProfile = () => {
  return (
    <main>
      <section className="user_hero">
        <div className="container">
          <UserHero />
        </div>
      </section>
      <section className="user_works">
        <div className="container">
          <UserWorks />
        </div>
      </section>
      <section className="reviews">
        <div className="container">
          <Reviews />
        </div>
      </section>
    </main>
  );
};
