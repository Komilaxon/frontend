import { Editor } from "@tinymce/tinymce-react";
import React, { useContext } from "react";
import { GlobalContext } from "../../../../context/GlobalContext";


const TabReq = () => {
  const { setWorkState } = useContext(GlobalContext)
  const handleEditorChange = (editor) => {
    setWorkState({ requirements: editor });
  };
  return (
    <div className="space-y-7">
      <h1 className="text-2xl font-semibold">Расскажите покупателю, что вам нужно для начала работы над заказом.</h1>
      <h4 className="text-lg font-semibold">Структурируйте свои инструкции для покупателя в виде произвольного текста.</h4>
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
  );
};

export default TabReq;
