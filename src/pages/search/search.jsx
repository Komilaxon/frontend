import { Link } from "react-router-dom";
import React from "react";
import "./search.css";
import { SearchForm } from "../../components/search/search.form";
import { Categories } from "../../components/categories";
import { CategoryButton } from "../../components/buttons/category.button";

export const Search = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  return (
    <section className="search">
      <div className="container">
        <div>
          <Link to={"/user"} className="close_search">
            <button>x Закрыть быстрый поиск</button>
          </Link>
        </div>
        <h2 className="search_title">
          Ищите и находите подходящую работу среди <span>10,000+</span> проектов
          и покажите на что Вы способны!
        </h2>
        <div className="w-[645px] mx-auto">
          <SearchForm />
        </div>
        <ul className="search_list">
          <Categories
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <CategoryButton
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
        </ul>
      </div>
    </section>
  );
};
