import React, { useContext } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { GlobalContext } from "../../../context/GlobalContext";
import { usePostWorkMutation } from "../../../redux/api/work";

const TabFooter = ({ setTabIds }) => {
  const [searchParams, setSearchParam] = useSearchParams();
  const tabNumber = parseInt(searchParams.get("tab") || "1");
  const { workState } = useContext(GlobalContext)
  const [postWork] = usePostWorkMutation()
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
    const formData = new FormData();
    Object.entries(workState).forEach(([key, value]) => {
      if (key === "files") {
        workState.files.map(file => {
          formData.append("files", file)
        })
      }
      else if (key === "images") {
        workState.images.map(file => {
          formData.append("images", file)
        })
      }
      else if (key === "questions") {
        workState.questions.map(q => {
          formData.append("questions", JSON.stringify(q))
        })
      }
      else if (key === "skills") {
        workState.skills.map(skill => {
          formData.append("skills", skill)
        })
      } else {
        formData.append(key, value)

      }
    });
    postWork({ work: formData, user_id: "659abb9680fc5376ed8930ac" }).then(() => navigate("/user"))
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

      {tabNumber != 5 && (
        <button
          onClick={handleNext}
          className="bg-[#1DBF73] hover:bg-[#48d191] text-white text-[20px] rounded-full py-3 max-w-[240px] px-14 font-semibold"
        >
          Дальше
        </button>
      )}
      {tabNumber == 5 && (
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
