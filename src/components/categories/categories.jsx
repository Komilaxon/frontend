import React from "react";
import LeftVektor from "../../assets/icons/left_vektor.svg";
import { useGetCategoriesQuery } from "../../redux/api/get.categories.js";

export const Categories = ({ selectedCategory, setSelectedCategory }) => {
  const { data } = useGetCategoriesQuery();

  const handleCategoryClick = (category) =>
    setSelectedCategory(
      selectedCategory?._id == category?._id ? null : category
    );

  const handleHiddenCategory = () => setSelectedCategory(null);

  return (
    <React.Fragment>
      {selectedCategory ? (
        <>
          <div className="flex items-center justify-center">
            <div>
              <img src={LeftVektor} alt="img" />
            </div>
            <button
              onClick={handleHiddenCategory}
              className="text-sm font-semibold text-[#1DBF73] pl-1"
            >
              {selectedCategory?.name}
            </button>
          </div>

          {data?.data
            .filter((subCat) => subCat._id == selectedCategory?._id)
            .map((item) =>
              item.subCategories.map((el) => (
                <button
                  className="text-center rounded-full border border-[#f2f0fe] p-2 text-sm text-[#222]"
                  key={el._id}
                >
                  {el.name}
                </button>
              ))
            )}
        </>
      ) : (
        data?.data.map((item) => (
          <button
            onClick={() => handleCategoryClick(item)}
            key={item._id}
            className={`text-center rounded-full border border-[#f2f0fe] p-2`}
          >
            <p className="text-sm text-[#222] font-normal">{item.name}</p>
          </button>
        ))
      )}
    </React.Fragment>
  );
};
