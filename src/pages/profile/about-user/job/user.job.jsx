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

export const UserJob = () => {
  return (
    <div className="w-[645px] space-y-4">
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
      <div className="w-full space-y-1 ">
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
