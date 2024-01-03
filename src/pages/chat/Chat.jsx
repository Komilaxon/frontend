import React from "react";
import ChatSider from "./ChatSider";
import ChatHeader from "./ChatHeader";
import ChatFooter from "./ChatFooter";
import ChatBody from "./ChatBody";

const Chat = () => {
  const [messagesArray, setMessageArray] = React.useState([
    {
      id: 1,
      user_id: 1,
      message_type: "text",
      text: "Нужно сделать супер крутой дизайн для сайта Нужно сделать супер крутой",
      url: null,
    },
    {
      id: 2,
      user_id: 1,
      message_type: "image",
      text: "2c3c02786f6bab666f9ea49bff8b2eb6.webp",
      url: `https://firebasestorage.googleapis.com/v0/b/telegram-26a2c.appspot.com/o/chat_images%2F2c3c02786f6bab666f9ea49bff8b2eb6.webp?alt=media&token=fc52bcc6-32e8-4c59-9207-27e9e99d3f90`,
    },
    {
      id: 3,
      user_id: 1,
      message_type: "file",
      text: "тз.docx",
      url: `https://firebasestorage.googleapis.com/v0/b/telegram-26a2c.appspot.com/o/%2B998914444026%2F%D1%82%D0%B7.docx?alt=media&token=084cf589-fad4-457d-97dd-f10c3975904b`,
    },
    {
      id: 4,
      user_id: 2,
      message_type: "text",
      text: "Нужно сделать супер крутой дизайн для сайта Нужно сделать супер крутой",
      url: null,
    },

    {
      id: 6,
      user_id: 2,
      message_type: "file",
      text: "тз.docx",
      url: `https://firebasestorage.googleapis.com/v0/b/telegram-26a2c.appspot.com/o/%2B998914444026%2F%D1%82%D0%B7.docx?alt=media&token=084cf589-fad4-457d-97dd-f10c3975904b`,
    },
    {
      id: 7,
      user_id: 1,
      message_type: "text",
      text: "Нужно сделать супер крутой дизайн для сайта Нужно сделать супер крутой",
      url: null,
    },
  ]);

  return (
    <main className="chat-container bg-[#F6FAFD]">
      <div className="flex gap-7 max-w-[1380px] h-[calc(100vh-84px)] mx-auto px-5 py-5">
        <ChatSider />
        <div className="w-[calc(100%-420px)] flex flex-col justify-between rounded-t-lg border-b border-r border-l border-[#dde7f3]">
          <ChatHeader />
          <ChatBody
            setMessageArray={setMessageArray}
            messagesArray={messagesArray}
          />
          <ChatFooter setMessageArray={setMessageArray} />
        </div>
      </div>
    </main>
  );
};

export default Chat;
