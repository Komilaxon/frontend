import React, { useContext, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import orange_plus from "../../../../assets/icons/orange.plus.svg";
import { GlobalContext } from "../../../../context/GlobalContext";

const TabDesc = () => {
  const [questions, setQuestions] = useState([]);
  const { workState, setWorkState } = useContext(GlobalContext)
  const handleEditorChange = (editor) => {
    setWorkState({ desc: editor });
  };
  const handleAddQuetion = () => {
    setQuestions(prev => [...prev, {
      question: "",
      answer: ""
    }])
  }
  const handleGetInputValue = (e, index) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [e.target.name]: e.target.value,
    };
    setQuestions(updatedQuestions);
    setWorkState({ questions: updatedQuestions });
  };
  return (
    <div className="space-y-2">
      <h1 className="text-[24px] font-semibold">Описание</h1>
      <div className="max-[758px]">
        <Editor
          apiKey="ecftg14yobx06muc0mjuqekqns1qogjy7gqnhjbokt3hdavn"
          onEditorChange={handleEditorChange}
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
        <div className="gap-x-7 flex">
          <div className="grid grid-cols-3 gap-2">
            {
              questions.map((q, index) => <div key={index} className=" space-y-7   rounded-md p-5 border border-black/5">
                <div className="space-y-1">
                  <label htmlFor="name_input">Вопрос</label>
                  <input
                    id="name_input"
                    type="text"
                    onChange={(e) => handleGetInputValue(e, index)}
                    name="question"
                    placeholder="Вопрос"
                    className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
                  />
                </div>
                <div className="space-y-1">
                  <label htmlFor="name_input">Ответ</label>
                  <input
                    id="name_input"
                    type="text"
                    onChange={(e) => handleGetInputValue(e, index)}
                    name="answer"
                    placeholder="Ответ"
                    className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
                  />
                </div>
                <button className="bg-[#FFDBDB] text-[20px] text-[#FF4343] hover:bg-[#f7a1a1] w-full rounded-full py-[15px] font-semibold">
                  Удалить
                </button>
              </div>)
            }
          </div>
          <button
            onClick={handleAddQuetion}
            type="button"
            className="rounded-md max-w-[307px] h-[200px] flex flex-col justify-center p-5 gap-y-2 items-center border border-black/5 hover:bg-[#ffddc0]"
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
