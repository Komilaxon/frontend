import upload_file from "../../../../assets/icons/upload.file.svg";
import doc_upload from "../../../../assets/icons/doc.upload.svg";

export const UserImg = () => {
  return (
    <div className="py-5 flex flex-col items-center  border border-black/5 rounded-md">
      <label className="flex justify-center items-center max-w-[322px] flex-col p-9 rounded-md border-dashed hover:bg-inherit hover:border hover:border-[#FBA457] transition-all bg-[#F2F0FE] gap-y-3 cursor-pointer mb-1">
        <input type="file" accept=".pdf, .doc, .docx" hidden />
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
        <div className="max-w-[322px] w-full py-3 rounded-md px-1 border border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-x-1  h-full">
            <img src={doc_upload} width={16} height={16} alt="image" />
            <span className="text-[14px] font-normal leading-[15.931px]">
              food.doc
            </span>
          </div>
        </div>
        <div className="max-w-[322px] w-full py-3 rounded-md px-1 border border-black/5 flex items-center justify-between">
          <div className="flex items-center gap-x-1  h-full">
            <img src={doc_upload} width={16} height={16} alt="image" />
            <span className="text-[14px] font-normal leading-[15.931px]">
              food.doc
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
