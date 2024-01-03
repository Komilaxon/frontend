import React, { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";
import orange_plus from "../../../../assets/icons/orange.plus.svg";

const TabDesc = () => {
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };
  return (
    <div className="space-y-2">
      <h1 className="text-[24px] font-semibold">Описание</h1>
      <div className="max-[758px]">
        <Editor
          apiKey="ecftg14yobx06muc0mjuqekqns1qogjy7gqnhjbokt3hdavn"
          onInit={(evt, editor) => (editorRef.current = editor)}
          placeholder="Кратко опишите свой ворк"
          init={{
            height: 218,
            width: 758,
            menubar: false,
            toolbar:
              "undo redo | formatselect | " +
              "bold italic backcolor | alignleft aligncenter " +
              "alignright alignjustify | bullist numlist outdent indent | " +
              "removeformat | help",
            content_style:
              "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
          }}
        />
      </div>
      <div className="!mt-7 space-y-7 ">
        <h1 className="font-semibold text-2xl">Часто задаваеммые вопросы</h1>
        <div className="flex gap-x-7">
          <div className=" space-y-7  w-[533px] rounded-md p-5 border border-black/5">
            <div className="space-y-1">
              <label htmlFor="name_input">Вопрос</label>
              <input
                id="name_input"
                type="text"
                placeholder="Вопрос"
                className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="name_input">Ответ</label>
              <input
                id="name_input"
                type="text"
                placeholder="Ответ"
                className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
              />
            </div>
            <button className="bg-[#FFDBDB] text-[20px] text-[#FF4343] hover:bg-[#f7a1a1] w-full rounded-full py-[15px] font-semibold">
              Удалить
            </button>
          </div>
          <button
            type="button"
            className="rounded-md max-w-[307px] flex flex-col justify-center p-5 gap-y-2 items-center border border-black/5 hover:bg-[#ffddc0]"
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

export default TabDesc;
