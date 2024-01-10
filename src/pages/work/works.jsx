import React from "react";
import UserWorks from "../../assets/img/user-works.jpg";
import UserImg from "../../assets/img/user2.svg";
import Stars from "../../assets/icons/stars.svg";
import { WorksCart } from "./components/works-cart";
import { SearchForm } from "../../components/search/search.form";
import { Categories } from "../../components/categories";
import { CategoryButton } from "../../components/buttons/category.button";
import { WorksSorting } from "../../components/stock/stock.search";
import { PaginationButton } from "../../components/buttons/pagination.button";
const cart = [
  {
    img: UserWorks,
    name: "Дизайн сайта",
    price: "50 000 тенге",
    user_img: UserImg,
    username: "Екатерина Иванова",
    projects: "Выполнено проектов: 45 ",
    stars: Stars,
  },
];

export const Work = () => {
  const [selectedCategory, setSelectedCategory] = React.useState(null);
  return (
    <main>
      <section className="navbar_list">
        <div className="container">
          <div className="w-[646px] mx-auto pt-10">
            <SearchForm />
          </div>
          <ul className="flex items-center justify-between">
            <Categories
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
            <CategoryButton />
          </ul>
        </div>
      </section>
      <section className="bg-[#F6FAFD]">
        <div className="container">
          <WorksSorting />
          <ul className="pb-14">
            {cart.map((item, i) => (
              <WorksCart key={i} {...item} />
            ))}
            <PaginationButton />
          </ul>
        </div>
      </section>
    </main>
  );
};
