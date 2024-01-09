import React, { useContext } from "react";
import Select from "react-select";
import { useGetCategoriesQuery } from "../../../../redux/api/get.categories";
import { useGetSubCategoriesQuery } from "../../../../redux/api/sub_categories";
import { useGetSkillsQuery } from "../../../../redux/api/skills";
import { GlobalContext } from "../../../../context/GlobalContext";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: 44,
    minHeight: 44,
    borderRadius: state.isFocused ? "4px 4px 0 0" : "4px",
    borderColor: state.isFocused ? "#1a202c" : "#e2e8f0",
    boxShadow: state.isFocused ? "0 0 0 1px #1a202c" : null,
  }),
};

const TabBasic = () => {
  const { data: sub_categories } = useGetSubCategoriesQuery();
  const { data: categories } = useGetCategoriesQuery();
  const { data: skills } = useGetSkillsQuery();
  const { workState, setWorkState } = useContext(GlobalContext)
  const handleChange = (event) => {
    let def_skills = []
    if (Array.isArray(event)) {
      event.map(item => {
        def_skills.push(item.value);
      })
      setWorkState({ skills: def_skills })
    } else if (event.name) {
      setWorkState({ [event.name]: event.value })
    } else {
      setWorkState({ [event.target.name]: event.target.value })
    }
  }
  return (
    <div className="max-w-[645px] space-y-4">
      <div className="space-y-2">
        <div className="space-y-4">
          <label htmlFor="name_input">Название</label>
          <input
            id="name_input"
            type="text"
            placeholder="Название"
            className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
            name="title"
            onChange={handleChange}
          />

          <div className="flex w-full gap-x-3">
            <div className="w-1/2 space-y-1">
              <label htmlFor="category_select">Категория</label>
              <Select
                id="category_select"
                className="w-full outline-none border border-black/5 rounded-md"
                closeMenuOnSelect={true}
                options={categories?.data.map((item) => ({
                  label: item.name,
                  value: item._id,
                  name: "categories"
                }))}
                styles={customStyles}
                onChange={handleChange}
                placeholder="Категория"
              />
            </div>
            <div className="w-1/2 space-y-1">
              <label htmlFor="category_select">Подкатегория</label>
              <Select
                id="category_select"
                className="w-full outline-none border border-black/5 rounded-md"
                closeMenuOnSelect={true}
                options={sub_categories?.data.map((item) => ({
                  label: item.name,
                  value: item._id,
                  name: "sub_categories"
                }))}
                onChange={handleChange}
                styles={customStyles}
                placeholder="Подкатегория"
              />
            </div>
          </div>
          <div className="w-full space-y-1">
            <label htmlFor="category_select">Теги</label>
            <Select
              id="category_select"
              className="w-full outline-none border border-black/5 rounded-md"
              closeMenuOnSelect={false}
              options={skills?.data.map((item) => ({
                label: item.name,
                value: item._id,
                name: "skills"
              }))}
              onChange={handleChange}
              isMulti
              styles={customStyles}
              placeholder="Теги"
            />
          </div>
          <div className="flex flex-col items-start gap-y-2 w-1/2">
            <label >Цена в тенге</label>
            <input
              name="sum"
              type="number"
              onChange={handleChange}
              min={0}
              placeholder="Цена в тенге"
              className="w-full text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabBasic;
