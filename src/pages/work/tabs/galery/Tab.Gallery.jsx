import React, { useContext, useState } from "react";
import orange_plus from "../../../../assets/icons/orange.plus.svg";
import upload_file from "../../../../assets/icons/upload.file.svg";
import doc_upload from "../../../../assets/icons/doc.upload.svg";
import { toBase64 } from "../../../../utils/toBase64";
import { GlobalContext } from "../../../../context/GlobalContext";

const TabGallery = () => {
  const [images, setImages] = useState([]);
  const { workState, setWorkState } = useContext(GlobalContext);
  const [selectFiles, setSelectImages] = useState([]);
  const handleImageToBase64 = async (e) => {
    let newImages = Array.from(e.target.files);
    newImages.map(async (img) => {
      let imageBase64 = await toBase64(img);
      setImages((prev) => [...prev, imageBase64]);
    });
    setWorkState({ images: [...workState.images, ...newImages] });
  };
  const handleFileInputChange = async (e) => {
    setSelectImages((prev) => [...prev, ...Array.from(e.target.files)]);
    setWorkState({
      files: [...workState.files, ...Array.from(e.target.files)],
    });
  };
  console.log(workState);
  return (
    <div className="space-y-[60px] max-w-[50%]">
      <div className="space-y-7">
        <h1 className="font-semibold text-2xl">Создайте свою галерею</h1>
        <h4 className="font-semibold text-lg">
          Добавьте запоминающийся контент в свою галерею, чтобы выделиться среди
          конкурентов.
        </h4>
      </div>
      <div className="space-y-7">
        <h1 className="font-semibold text-2xl">Фотографии ворка</h1>
        <h4 className="font-semibold text-lg">
          Загрузите фотографии, которые описывают или имеют отношение к вашему
          ворку. Только файлы с расширением png, jpg, jpeg.
        </h4>
        <div className="grid grid-cols-3 gap-7">
          <label className="bg-[#E7E4FB] px-4 hover:bg-inherit hover:border-2 hover:border-[#FBA457] transition-all  cursor-pointer h-[195px]  rounded-[20px] flex items-center justify-center flex-col">
            <input
              onChange={handleImageToBase64}
              type="file"
              name="myImage"
              accept="image/png, image/gif, image/jpeg"
              hidden
              multiple
            />
            <img src={orange_plus} alt="plus" width={70} height={70} />
            <span className="text-[#FBA457] text-[20px] font-semibold text-center">
              Добавить фотографии
            </span>
          </label>

          {images.map((image, index) => (
            <div
              key={index}
              className="w-full h-[195px] rounded-[20px] border "
            >
              <img
                className="w-full h-full object-cover rounded-[20px]"
                src={image}
                alt="image"
              />
            </div>
          ))}
        </div>
        <div className="space-y-1 max-w-md">
          <label htmlFor="name_input">Ссылка на видео Youtube</label>
          <input
            id="name_input"
            type="text"
            placeholder="Ссылка на видео Youtube"
            className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
          />
        </div>
      </div>
      <div className="space-y-7">
        <h1 className="font-semibold text-2xl">Документы ворка</h1>
        <h4 className="font-semibold text-lg">
          Мы рекомендуем добавлять файл документа только в том случае, если он
          дополнительно разъясняет услугу, которую вы будете предоставлять.
        </h4>
        <div className="py-5 flex flex-col items-center  border border-black/5 rounded-md">
          <label className="flex justify-center items-center max-w-[322px] flex-col p-9 rounded-md border-dashed hover:bg-inherit hover:border hover:border-[#FBA457] transition-all bg-[#F2F0FE] gap-y-3 cursor-pointer mb-1">
            <input
              onChange={handleFileInputChange}
              type="file"
              accept=".pdf, .doc, .docx"
              hidden
              multiple
            />
            <img src={upload_file} width={42} height={42} alt="upload_file" />
            <h5 className="text-[11.053px] font-medium text-center">
              Перетащите файл сюда или нажмите <br />
              <span className="text-[#FBA457]">Загрузить</span>
            </h5>
          </label>
          <span className="text-[#909399] text-[9px]">
            Загружайте только файлы doc / pdf и не более 500 КБ
          </span>
          <div className="space-y-1 mt-3 w-full flex flex-col items-center">
            {selectFiles.map((file, index) => (
              <div
                key={index}
                className="max-w-[322px] w-full py-3 rounded-md px-1 border border-black/5 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-1  h-full">
                  <img src={doc_upload} width={16} height={16} alt="image" />
                  <span className="text-[14px] font-normal leading-[15.931px]">
                    {file.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabGallery;
