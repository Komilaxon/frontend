export const CategoryButton = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <button className="py-3 px-5 text-[#fba457] text-sm font-medium rounded-full border border-[#fba457] hover:bg-[#fba457] hover:text-white">
      {selectedCategory ? "Все подкатегории" : "Все категории"}
    </button>
  );
};
