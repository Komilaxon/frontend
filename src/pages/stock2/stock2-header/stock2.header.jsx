import { Link } from "react-router-dom";
import { CategoryButton } from "../../../components/buttons/category.button";
import { Skills } from "../../../components/skills";
import "./stock2.header.css";

export const Stock2Header = () => {
  return (
    <>
      <div className="stock2_header_block">
        <div>
          <form className="stock2_from">
            <input
              className="stock_hero_input py-[15px] px-5 rounded-full bg-[#f2f0fe]"
              type="text"
              placeholder="Какую работу ищете?"
            />
            <button className="stock2_btn hover:bg-[#e1924e]">Найти</button>
          </form>
        </div>
        <div className="stock2_box">
          <form className="">
            <input
              className="py-3 px-6 border border-[#F7F6FF] rounded-2xl bg-inherit outline-none"
              type="number"
              placeholder="Минимальная цена"
            />
            <span className="projects_line"></span>
            <input
              className="py-3 px-6 border border-[#F7F6FF] rounded-2xl bg-inherit outline-none"
              type="number"
              placeholder="Максимальная цена"
            />
          </form>
        </div>
        <div className="projects_item">
          <p className="projects_price">По возрастанию цены</p>
        </div>
      </div>
      <ul className="stock2_list">
        <li className="stock2_item">
          <Link to={"/stock"}>
            <p className="stock2_design">Дизайн</p>
          </Link>
        </li>
        <Skills />
        <CategoryButton />
      </ul>
    </>
  );
};
