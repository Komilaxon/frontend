import { Link } from "react-router-dom";
import React from "react";
import HeroImg from "../../../assets/img/hero-img.svg";
import "./hero.css";
import { SearchForm } from "../../../components/search/search.form";
import { Categories } from "../../../components/categories";
import { CategoryButton } from "../../../components/buttons/category.button";

export const Hero = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  return (
    <div className="hero_block">
      <div className="hero_left_box">
        <h2 className="hero_title">
          Покупайте фриланс-услуги в
          <span className="text-global_green"> два клика</span>
        </h2>
        <p className="hero_text">
          Ворк — единица работы продавца, которую можно купить как товар в
          магазине
        </p>
        <SearchForm />
        <p className="hero_inner_text">Выберите рубрику, чтобы начать</p>
        <div className="grid grid-cols-3 gap-5">
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Link to={"/"}>
            <CategoryButton
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </Link>
        </div>
      </div>
      <div>
        <img src={HeroImg} alt="hero-img" />
      </div>
    </div>
  );
};
