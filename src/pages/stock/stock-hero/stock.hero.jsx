import { Link } from "react-router-dom";
import "./stock.hero.css";
import Vektor from "../../../assets/icons/stock.vektor.svg";
import { SearchForm } from "../../../components/search/search.form";
import { Categories } from "../../../components/categories";
import { CategoryButton } from "../../../components/buttons/category.button";

export const StockHero = () => {
  return (
    <div className="stock_hero_block">
      <h2 className="stock_hero_title">
        Ищите и находите подходящую работу среди
        <span className="text-global_green">10,000+</span> проектов и покажите
        на что Вы способны!
      </h2>
      <div className="w-[600px] mx-auto ">
        <SearchForm />
      </div>
      <ul className="w-[680px] mx-auto flex flex-wrap gap-5 justify-between mb-10">
        <Categories />
        <CategoryButton />
      </ul>
      <p className="stock_hero_text">
        Ниже все заказы по <span className="stock_hero_span">дизайну</span>
      </p>
      <div className="stock_vektor">
        <Link to={"/stock2"}>
          <img src={Vektor} alt="vektor" />
        </Link>
      </div>
    </div>
  );
};
