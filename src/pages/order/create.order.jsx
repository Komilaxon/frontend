import React, { useState } from "react";
import Select from "react-select";
import upload_file from "../../assets/icons/upload.file.svg";
import doc_upload from "../../assets/icons/doc.upload.svg";
import { toBase64 } from "../../utils/toBase64";
import { usePostOrderMutation } from "../../redux/api/order";
import { useGetCategoriesQuery } from "../../redux/api/get.categories";
import { useGetSubCategoriesQuery } from "../../redux/api/sub_categories";

const options = [
  { value: "blues", label: "Blues" },
  { value: "rock", label: "Rock" },
  { value: "jazz", label: "Jazz" },
  { value: "orchestra", label: "Orchestra" },
];

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    height: 44,
    minHeight: 44,
    borderRadius: state.isFocused ? "4px 4px 0 0" : "4px",
    borderColor: state.isFocused ? "#1a202c" : "#e2e8f0",
    boxShadow: state.isFocused ? "0 0 0 1px #1a202c" : null,
  }),
};
const CreateOrder = () => {
  const [createOrder] = usePostOrderMutation();
  const { data: categories } = useGetCategoriesQuery();
  const { data: sub_categories } = useGetSubCategoriesQuery();
  const [selectedFiles, setSelectedFiles] = useState([])
  const handlePostOrder = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const formElements = e.target.elements;
    for (let i = 0; i < formElements.length; i++) {
      const element = formElements[i];
      if (element.type === 'file') {
        formData.append(element.name, element.files[0]);
      } else if (element.type !== "submit" && element.value !== '') {
        formData.append(element.name, element.value);
      }
    }
    createOrder({ order: formData, user_id: "659abb9680fc5376ed8930ac" })
      .then(res => {
        console.log(res.data);
      })
      .catch(error => {
        console.error("Error from Backend:", error);
      });
  }
  const handleFileInputChange = async (e) => {
    setSelectedFiles(prev => [...prev, { name: e.target.files[0].name }])
  }
  return (
    <main>
      <section className="bg-[#F6FAFD]  py-2">
        <form onSubmit={handlePostOrder} className="container">
          <div className="max-w-[644px] space-y-7 py-2">
            <h1 className="text-[24px] font-semibold mb-14">
              Опубликуйте ваш заказ
            </h1>
            <div className="space-y-1">
              <label htmlFor="name_input">Название </label>
              <input
                id="name_input"
                type="text"
                name="title"
                placeholder="Название"
                className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="name_input">Описание</label>
              <textarea
                id="name_input"
                type="text"
                name="caption"
                placeholder="Кратко опишите свой ворк"
                className="w-full min-h-[109px] max-h-[218px] outline-none border border-black/5 px-3 py-4 rounded-md placeholder:text-[#B0AAD0]"
              />
            </div>
            <div className="flex w-full gap-x-3">
              <div className="w-1/2 space-y-1">
                <label htmlFor="category_select">Категория</label>
                <Select
                  id="category_select"
                  name="categories"
                  className="w-full outline-none border border-black/5 rounded-md"
                  closeMenuOnSelect={true}
                  options={categories?.data.map(item => ({ label: item.name, value: item._id }))}
                  styles={customStyles}
                  placeholder="Категория"
                />
              </div>
              <div className="w-1/2 space-y-1">
                <label htmlFor="category_select">Подкатегория</label>
                <Select
                  id="category_select"
                  className="w-full outline-none border border-black/5 rounded-md"
                  closeMenuOnSelect={true}
                  options={sub_categories?.data.map(item => ({ label: item.name, value: item._id }))}
                  name="subcategories"
                  styles={customStyles}
                  placeholder="Подкатегория"
                />
              </div>
            </div>
            <div className="space-y-1">
              <label htmlFor="name_input">Срок выполнения работы в днях</label>
              <input
                id="name_input"
                type="text"
                name="time"
                placeholder="Срок"
                className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
              />
            </div>
            <div className="py-5 flex flex-col items-center  border border-black/5 rounded-md">
              <label className="flex justify-center items-center max-w-[322px] flex-col p-9 rounded-md border-dashed hover:bg-inherit hover:border hover:border-[#FBA457] transition-all bg-[#F2F0FE] gap-y-3 cursor-pointer mb-1">
                <input onChange={handleFileInputChange} name="image" type="file" accept=".pdf, .doc, .docx" hidden />
                <img
                  src={upload_file}
                  width={42}
                  height={42}
                  alt="upload_file"
                />
                <h5 className="text-[11.053px] font-medium text-center">
                  Перетащите файл сюда или нажмите <br />
                  <span className="text-[#FBA457]">Загрузить</span>
                </h5>
              </label>
              <span className="text-[#909399] text-[9px]">
                Загружайте только файлы doc / pdf и не более 500 КБ
              </span>
              <div className="space-y-1 mt-3 w-full flex flex-col items-center">
                {
                  selectedFiles.map(file => <div className="max-w-[322px] w-full py-3 rounded-md px-1 border border-black/5 flex items-center justify-between">
                    <div className="flex items-center gap-x-1  h-full">
                      <img src={doc_upload} width={16} height={16} alt="image" />
                      <span className="text-[14px] font-normal leading-[15.931px]">
                        {file.name}
                      </span>
                    </div>
                  </div>)
                }
              </div>
            </div>
          </div>
          <button type="submit" className="bg-[#1DBF73] ml-auto block hover:bg-[#48d191] text-white text-[20px] rounded-full py-3 max-w-[240px] px-10 font-semibold">
            Опубликовать
          </button>
        </form>
      </section>
    </main>
  );
};

export default CreateOrder;
