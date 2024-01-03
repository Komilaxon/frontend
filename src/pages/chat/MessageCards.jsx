import doc_image from "../../assets/img/doc2.png";
import { Link } from "react-router-dom";

const CurrentUserMessageCard = ({ text }) => {
  return (
    <div className="flex w-full items-center justify-end mt-8">
      <div className="bg-[#D7FFEC] py-3 px-6 rounded-l-5 rounded-[20px] rounded-tr-none max-w-[380px]">
        <p className="text-black">{text}</p>
      </div>
    </div>
  );
};
const CurrentUserPhotoMessageCard = ({ text, url }) => {
  return (
    <Link to={url} target="_blank" download={true}>
      <button className="flex w-full items-center justify-end mt-8">
        <div className="w-[80px] h-[80px]">
          <div className="w-[80px] h-[80x] rounded-l-5 rounded-[20px] rounded-tl-none max-w-[380px]">
            <img
              src={url}
              alt="image"
              className="w-full h-[80px] object-contain rounded-[20px] "
            />
          </div>
          <p className="text-ellipsis overflow-hidden whitespace-nowrap text-[10px]">
            {text}
          </p>
        </div>
      </button>
    </Link>
  );
};
const CurrentUserFileMessageCard = ({ text, url }) => {
  return (
    <Link to={url} download={true} target="_blank">
      <button className="flex w-full items-center justify-end mt-8">
        <div className="w-[80px] flex flex-col p-2  justify-center items-center rounded-[20px] rounded-tr-none bg-[#F2F0FE]">
          <div className="w-[50px] h-[50x]">
            <img src={doc_image} alt="image" className="w-full" />
          </div>
          <p className="text-ellipsis overflow-hidden whitespace-nowrap text-[10px]">
            {text}
          </p>
        </div>
      </button>
    </Link>
  );
};
const UserMessageCard = ({ text }) => {
  return (
    <div className="flex w-full items-center justify-start mt-8">
      <div className="bg-[#FFEDDD] py-3 px-6 rounded-l-5 rounded-[20px] rounded-tl-none max-w-[380px]">
        <p className="text-black">{text}</p>
      </div>
    </div>
  );
};
const UserPhotoMessageCard = ({ text, url }) => {
  return (
    <Link to={url} target="_blank" download={true}>
      <button className="flex w-full items-center justify-start mt-8">
        <div className="w-[80px]">
          <div className="w-[80px] h-[80x] rounded-l-5 rounded-[20px] rounded-tl-none max-w-[380px]">
            <img
              src={url}
              alt="image"
              className="w-full h-[80px] object-contain rounded-[20px] rounded-tl-none "
            />
          </div>
          <p className="text-ellipsis overflow-hidden whitespace-nowrap text-[10px]">
            {text}
          </p>
        </div>
      </button>
    </Link>
  );
};
const UserFileMessageCard = ({ text, url }) => {
  return (
    <Link to={url} download={true} target="_blank">
      <button className="flex w-full items-center justify-start mt-8">
        <div className="w-[80px] flex flex-col p-2  justify-center items-center rounded-[20px] rounded-tl-none bg-[#F2F0FE]">
          <div className="w-[50px] h-[50x]">
            <img src={doc_image} alt="image" className="w-full" />
          </div>
          <p className="text-ellipsis overflow-hidden whitespace-nowrap text-[10px]">
            {text}
          </p>
        </div>
      </button>
    </Link>
  );
};

export {
  UserMessageCard,
  UserPhotoMessageCard,
  CurrentUserMessageCard,
  CurrentUserPhotoMessageCard,
  UserFileMessageCard,
  CurrentUserFileMessageCard,
};
