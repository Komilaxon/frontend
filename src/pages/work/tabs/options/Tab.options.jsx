import React from "react";
import orange_plus from "../../../../assets/icons/orange.plus.svg";
const TabOptions = () => {
  return (
    <div className="w-full">
      <div className="space-y-7">
        <h1 className="font-semibold text-2xl">Опции</h1>
        <div className="flex gap-x-[30px]">
          <div className="max-w-[533px] rounded-md p-5 border border-black/5 space-y-7">
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">Название</label>
              <input
                type="text"
                placeholder="Название"
                className="w-full text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">
                Подсказка для покупателя
              </label>
              <input
                type="text"
                placeholder="Подсказка для покупателя"
                className="w-full text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex items-center justify-between gap-x-7">
              <div className="flex flex-col items-start gap-y-2 w-1/2">
                <label className="text-lg font-semibold">Срок выполнения</label>
                <input
                  type="number"
                  min={0}
                  placeholder="Срок выполнения"
                  className="w-full text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
                />
              </div>
              <div className="flex flex-col items-start gap-y-2 w-1/2">
                <label className="text-lg font-semibold">Цена в тенге</label>
                <input
                  type="number"
                  min={0}
                  placeholder="Цена в тенге"
                  className="w-full text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
                />
              </div>
            </div>
            <button className="bg-[#FFDBDB] text-[20px] text-[#FF4343] w-full rounded-full py-[18px] font-semibold">
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabOptions;
