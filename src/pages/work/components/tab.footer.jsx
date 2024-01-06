import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const TabFooter = ({ setTabIds }) => {
  const [searchParams, setSearchParam] = useSearchParams();
  const tabNumber = parseInt(searchParams.get("tab") || "1");
  const navigate = useNavigate();
  const handleNext = () => {
    setSearchParam({ tab: tabNumber + 1 });
    setTabIds((prev) => {
      if (!prev?.includes(tabNumber)) {
        return [...prev, tabNumber];
      } else {
        return prev;
      }
    });
  };
  const handleBack = () => {
    setSearchParam({ tab: tabNumber - 1 });
    setTabIds((prev) => prev.filter((item) => item != tabNumber - 1));
  };
  const handleToPublic = () => {
    navigate("/user");
  };
  return (
    <div
      className={`w-full flex items-center ${tabNumber == 1 ? "justify-end" : "justify-between"
        }`}
    >
      {tabNumber != 1 && (
        <button
          onClick={handleBack}
          className="bg-[#F2F0FE] text-[#656084] text-[20px] rounded-full py-3 max-w-[240px] px-14 font-semibold"
        >
          Назад
        </button>
      )}
      
      {tabNumber != 6 && (
        <button
          onClick={handleNext}
          className="bg-[#1DBF73] hover:bg-[#48d191] text-white text-[20px] rounded-full py-3 max-w-[240px] px-14 font-semibold"
        >
          Дальше
        </button>
      )}
      {tabNumber == 6 && (
        <button
          onClick={handleToPublic}
          className="bg-[#1DBF73] hover:bg-[#48d191] text-white text-[20px] rounded-full py-3 max-w-[240px] px-10 font-semibold"
        >
          Опубликовать
        </button>
      )}
    </div>
  );
};

export default TabFooter;
