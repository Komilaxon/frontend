import React from "react";
import orange_plus from "../../../../assets/icons/orange.plus.svg";
const TabOptions = () => {
  return (
    <div className="w-full">
      <div className="space-y-7">
        <h1 className="font-semibold text-2xl">Пакеты</h1>
        <div className="grid grid-cols-3 grid-rows-1">
          <div className="max-w-[420px] border border-black/5 text-center space-y-7 p-5 rounded-md">
            <h1 className="text-2xl font-semibold">Эконом</h1>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">Описание пакета</label>
              <textarea
                id="desc_text_area"
                placeholder="Описание пакета"
                className="w-full min-h-[141px] text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">Срок выполнения</label>
              <input
                id="desc_text_area"
                type="number"
                min={0}
                placeholder="Срок выполнения"
                className="w-full  text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">
                Количество доработок
              </label>
              <input
                id="desc_text_area"
                type="number"
                min={0}
                placeholder="Количество доработок"
                className="w-full  text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">Стоимость в тенге</label>
              <input
                id="desc_text_area"
                type="number"
                min={0}
                placeholder="Стоимость в тенге"
                className="w-full  text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <button className="w-full bg-[#EBE8FF] text-[#656084] py-[18px] text-center rounded-full font-semibold">
              Добавить опцию
            </button>
          </div>
          <div className="max-w-[420px] border border-black/5 text-center space-y-7 p-5 rounded-md">
            <h1 className="text-2xl font-semibold">Стандарт</h1>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">Описание пакета</label>
              <textarea
                id="desc_text_area"
                placeholder="Описание пакета"
                className="w-full min-h-[141px] text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">Срок выполнения</label>
              <input
                id="desc_text_area"
                type="number"
                min={0}
                placeholder="Срок выполнения"
                className="w-full  text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">
                Количество доработок
              </label>
              <input
                id="desc_text_area"
                type="number"
                min={0}
                placeholder="Количество доработок"
                className="w-full  text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">Стоимость в тенге</label>
              <input
                id="desc_text_area"
                type="number"
                min={0}
                placeholder="Стоимость в тенге"
                className="w-full  text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <button className="w-full bg-[#EBE8FF] text-[#656084] py-[18px] text-center rounded-full font-semibold">
              Добавить опцию
            </button>
          </div>
          <div className="max-w-[420px] border border-black/5 text-center space-y-7 p-5 rounded-md">
            <h1 className="text-2xl font-semibold">Бизнес</h1>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">Описание пакета</label>
              <textarea
                id="desc_text_area"
                placeholder="Описание пакета"
                className="w-full min-h-[141px] text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">Срок выполнения</label>
              <input
                id="desc_text_area"
                type="number"
                min={0}
                placeholder="Срок выполнения"
                className="w-full  text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">
                Количество доработок
              </label>
              <input
                id="desc_text_area"
                type="number"
                min={0}
                placeholder="Количество доработок"
                className="w-full  text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <div className="flex flex-col items-start gap-y-2">
              <label className="text-lg font-semibold">Стоимость в тенге</label>
              <input
                id="desc_text_area"
                type="number"
                min={0}
                placeholder="Стоимость в тенге"
                className="w-full  text-base placeholder:text-[#B0AAD0] border border-black/5 outline-none p-2 rounded-md"
              />
            </div>
            <button className="w-full bg-[#EBE8FF] text-[#656084] py-[18px] text-center rounded-full font-semibold">
              Добавить опцию
            </button>
          </div>
        </div>
        <h1 className="font-semibold text-2xl">Дополнительные опции</h1>
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
          <button
            type="button"
            className="rounded-md max-w-[307px] flex flex-col justify-center p-5 gap-y-2 items-center border border-black/5 "
          >
            <img src={orange_plus} alt="plus" />
            <span className="text-[#FBA457] text-lg font-semibold">
              Добавить новую опцию
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabOptions;
