import React from "react";
import Select from "react-select";

const options = [
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock" },
  { value: "jazz", label: "Jazz" },
  { value: "orchestra", label: "Orchestra" },
];

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
  return (
    <div className="max-w-[645px] space-y-4">
      <div className="space-y-1">
        <label htmlFor="name_input">Название</label>
        <input
          id="name_input"
          type="text"
          placeholder="Название"
          className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
        />
      </div>
      <div className="flex w-full gap-x-3">
        <div className="w-1/2 space-y-1">
          <label htmlFor="category_select">Категория</label>
          <Select
            id="category_select"
            className="w-full outline-none border border-black/5 rounded-md"
            closeMenuOnSelect={true}
            options={options}
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
            options={options}
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
          options={options}
          isMulti
          styles={customStyles}
          placeholder="Теги"
        />
      </div>
    </div>
  );
};

export default TabBasic;
