export const SearchForm = () => {
  return (
    <form className="relative w-[532px] mb-[50px]">
      <input
        className="w-full py-[15px] px-5 rounded-full bg-[#f2f0fe] outline-none"
        type="text"
        placeholder="Что нужно сделать?"
      />
      <button className="text-[#f6fafd] font-bold text-base rounded-full py-4 px-12 border-[3px] border-[#f2f0fe] bg-[#fba457] absolute right-0 bottom-0 top-0 hover:bg-[#e1924e]">
        Найти
      </button>
    </form>
  );
};
