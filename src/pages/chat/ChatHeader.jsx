import React from "react";
import chat_user from "../../assets/img/chat_user.svg";

const ChatHeader = () => {
  return (
    <div className="w-full bg-[#F6FAFD] rounded-t-lg border-y border-[#dde7f3]  py-3.5 flex gap-5 px-8">
      <div className="w-[70px] h-[70px]">
        <img
          src={chat_user}
          alt="user"
          className="w-full object-contain select-none"
        />
      </div>
      <div className="space-y-3">
        <h6 className="text-lg text-black font-medium">Никита Евреев</h6>
        <p className="text-[#1DBF73] text-sm font-normal">Онлайн</p>
      </div>
    </div>
  );
};

export default ChatHeader;
