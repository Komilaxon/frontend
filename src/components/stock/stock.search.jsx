import React from "react";
import ProjectsLine from "../../assets/icons/projects.line.svg";

export const WorksSorting = () => {
  return (
    <ul className="flex items-center justify-between py-12">
      <li className="projects_item">
        <p className="text-2xl font-semibold text[#222]">
          65 проектов по дизайну
        </p>
      </li>
      <li className="projects_item">
        <form className="projects_from flex items-center">
          <div>
            <input
              className="p-2 rounded-[20px] border border-[#f2f0fe] bg-inherit outline-none"
              type="number"
              placeholder="Минимальная цена"
            />
          </div>
          <span className="block w-[24px] h-4 text-black text-sm font-normal mx-2"></span>
          <div>
            <input
              className="p-2 rounded-[20px] border border-[#f2f0fe] bg-inherit outline-none"
              type="number"
              placeholder="Максимальная цена"
            />
          </div>
        </form>
      </li>
      <li className="projects_item ">
        <p className="text-lg font-semibold text-[#222] py-3 px-5 rounded-full border border-[#f2f0fe] flex items-center">
          По возрастанию цены
          <img className="ml-10" src={ProjectsLine} alt="img" />
        </p>
      </li>
    </ul>
  );
};
