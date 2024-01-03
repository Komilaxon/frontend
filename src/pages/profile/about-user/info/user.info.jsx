import React from "react";
import { Editor } from "@tinymce/tinymce-react";

export const UserInfo = () => {
  const editorRef = React.useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div>
      <h2>Коротко о себе</h2>
      <Editor
        apiKey="ecftg14yobx06muc0mjuqekqns1qogjy7gqnhjbokt3hdavn"
        onInit={(evt, editor) => (editorRef.current = editor)}
        placeholder="Кратко опишите свой ворк"
        init={{
          height: 218,
          width: 658,
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
