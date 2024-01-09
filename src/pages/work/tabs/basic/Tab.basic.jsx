import React from "react";
import Select from "react-select";
import { useInputValue } from "../../../../hooks/use.input.value";
import { useGetCategoriesQuery } from "../../../../redux/api/get.categories";
import { useGetSubCategoriesQuery } from "../../../../redux/api/sub_categories";
import { useGetSkillsQuery } from "../../../../redux/api/skills";
import { usePostWorkMutation } from "../../../../redux/api/work";
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
  const [postWork] = usePostWorkMutation();
  const { value, changeValue } = useInputValue({});
  const { data: sub_categories } = useGetSubCategoriesQuery();
  const { data: categories } = useGetCategoriesQuery();
  const { data: skills } = useGetSkillsQuery();
  const [selectedFiles, setSelectedFiles] = React.useState([]);

  const handlePost = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const formElements = e.target.elements;
    for (let i = 0; i < formElements.length; i++) {
      const el = formElements[i];
      if (el.type !== "submit" && el.value !== "") {
        formData.append(el.name, el.value, value);
      }
    }
    console.log(formData);
    postWork({ work: formData, userId: "659a7cddfa21d2b3445c5e9a" })
      .then((res) => console.log(res.data))
      .catch((error) => console.error(error));
  };

  return (
    <div className="max-w-[645px] space-y-4">
      <div className="space-y-2">
        <form onSubmit={handlePost} className="space-y-4">
          <label htmlFor="name_input">Название</label>
          <input
            id="name_input"
            type="text"
            placeholder="Название"
            className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
            name="title"
            onChange={changeValue}
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
                }))}
                styles={customStyles}
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
                }))}
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
              }))}
              isMulti
              styles={customStyles}
              placeholder="Теги"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TabBasic;
