import React from "react";
import chat_user from "../../assets/img/chat_user.svg";

const UserChatCard = () => {
  return (
    <div className="w-full  p-3.5 cursor-pointer flex items-center gap-x-5 hover:bg-[#D7FFEC] rounded-[20px]">
      <div className="w-[70px] h-[70px]">
        <img src={chat_user} alt="user" className="w-full object-contain select-none" />
      </div>
      <div className="space-y-3">
        <h6 className="text-base text-black font-medium">Никита Евреев</h6>
        <p className="text-[#656084] text-sm font-normal">Ну че там, сделал?</p>
      </div>
    </div>
  );
};
const ChatSider = () => {
  return (
    <aside className="w-[400px]">
      <div className="max-w-full bg-[#F7F6FF]">
        <input
          type="text"
          placeholder="Поиск"
          className="outline-none rounded-[50px] h-[60px] px-5 w-full text-base placeholder:text-[#656084] text-black font-medium"
        />
      </div>
      <div className="py-2 scroll-smooth h-[calc(100vh-178px)] overflow-y-auto">
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
        <UserChatCard />
      </div>
    </aside>
  );
};

export default ChatSider;
