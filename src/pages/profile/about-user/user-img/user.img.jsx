import React from "react";
import orange_plus from "../../../../assets/icons/orange.plus.svg";
import { toBase64 } from "../../../../utils/toBase64";

export const UserImg = () => {
  const [images, setImages] = React.useState([]);
  const handleImageToBase64 = async (e) => {
    let imageBase64 = await toBase64(e.target.files[0]);
    setImages((prev) => [...prev, imageBase64]);
  };
  return (
    <div className="flex gap-7">
      <label className="bg-[#E7E4FB] px-4 hover:bg-inherit hover:border-2 hover:border-[#FBA457] transition-all  cursor-pointer h-[195px] w-[250px] rounded-[20px] flex items-center justify-center flex-col">
        <input
          onChange={handleImageToBase64}
          type="file"
          name="myImage"
          accept="image/png, image/gif, image/jpeg"
          hidden
        />
        <img src={orange_plus} alt="plus" className="w-[70px] h-[70px]" />
        <span className="text-[#FBA457] text-[20px] font-semibold text-center">
          Добавить фотографии
        </span>
      </label>
      <div className="w-full h-[195px] rounded-[20px]">
        <img
          className="w-[200px] h-full object-cover rounded-[20px]"
          src={
            "https://img02.flagma.uz/photo/novy-kompyuter-garantiya-1-god-1952924_big.jpg"
          }
          alt="image"
        />
      </div>
      {images.map((image) => (
        <div className="w-full h-[195px] rounded-[20px]">
          <img
            className="w-full h-full object-cover rounded-[20px]"
            src={image}
            alt="image"
          />
        </div>
      ))}
    </div>
  );
};
