import React from "react";
import file from "../../assets/icons/file.svg";
import bag from "../../assets/icons/bag.svg";
import image_add from "../../assets/icons/image.add.svg";
import doc_add from "../../assets/icons/doc.upload.svg";
import send_icon from "../../assets/icons/send.icon.svg";

const ToolBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleOpenToolBar = () => setIsOpen(!isOpen);

  return (
    <div
      className={`relative p-1.5 toolbar-shadow bg-white ${
        isOpen ? "rounded-b-[100px]" : "rounded-[100px]"
      }`}
    >
      <button
        type="button"
        onClick={toggleOpenToolBar}
        className="bg-[#FBA457] h-11 w-11 rounded-full flex items-center justify-center cursor-pointer"
      >
        <img src={file} alt="file" />
      </button>
      <div
        className={`${
          isOpen ? "block transition-all ease-in-out duration-300" : "hidden"
        } bg-white px-1.5 rounded-t-[100px] pt-1.5 w-full right-0 absolute bottom-full space-y-1.5`}
      >
        <button
          type="button"
          className="bg-[#F2F0FE] h-11 w-11 rounded-full flex items-center justify-center cursor-pointer"
        >
          <img src={bag} alt="bag" />
        </button>
        <button
          type="button"
          className="bg-[#F2F0FE] h-11 w-11 rounded-full flex items-center justify-center cursor-pointer"
        >
          <img src={image_add} alt="image_add" />
        </button>
        <button
          type="button"
          className="bg-[#F2F0FE] h-11 w-11 rounded-full flex items-center justify-center cursor-pointer"
        >
          <img src={doc_add} alt="doc_add" />
        </button>
      </div>
    </div>
  );
};

const ChatFooter = ({ setMessageArray }) => {
  const handleSend = (e) => {
    e.preventDefault();

    const message = e.target.text.value;
    let messageObj = {
      id: Math.random(1) * 23,
      user_id: 1,
      message_type: "text",
      text: message,
      url: null,
    };
    
    setMessageArray((prev) => [...prev, messageObj]);
    e.target.text.value = "";
  };
  return (
    <form
      onSubmit={handleSend}
      className="bg-[#F7F6FF] w-full py-3.5 flex items-center justify-between px-8 gap-x-5"
    >
      <ToolBar />
      <div className="bg-[#F2F0FE] w-full rounded-[100px]">
        <input
          name="text"
          type="text"
          placeholder="Введите Ваше сообщение"
          className="text-base font-normal w-full bg-transparent outline-none border-none py-3 px-4 rounded-[100px] placeholder:text-[rgb(176,170,208)] text-black"
        />
      </div>
      {/* desktop send button */}
      <button
        type="submit"
        className="bg-[#1DBF73] hidden lg:block text-white rounded-[50px] py-3 px-9"
      >
        Отправить
      </button>
      {/* mobile or tablet send button */}
      <button
        type="submit"
        className="bg-[#1DBF73] lg:hidden md:block text-white rounded-[50px] py-2 px-2"
      >
        <img src={send_icon} alt="send" width={50} className="ml-0.5" />
      </button>
    </form>
  );
};

export default ChatFooter;
