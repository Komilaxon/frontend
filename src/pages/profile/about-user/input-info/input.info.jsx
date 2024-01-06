import { useInputValue } from "../../../../hooks/use.input.value";

export const UserInputInfo = () => {
  const { value, changeValue } = useInputValue({
    region: "",
    study: "",
    sertificate: "",
    language: "",
  });
  const submit = (e) => {
    e.preventDefault();
    
  };

  return (
    <div className="max-w-[600px] py-1 flex">
      <form onSubmit={submit} className="flex justify-between gap-10">
        <div>
          <div className="space-y-1">
            <label htmlFor="name_input">Cтрана</label>
            <input
              onChange={changeValue}
              name="region"
              value={value.region}
              type="text"
              placeholder="Cтрана"
              className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="name_input">Образование</label>
            <input
              onChange={changeValue}
              name="study"
              value={value.study}
              type="text"
              placeholder="Образование"
              className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
            />
          </div>
        </div>

        <div>
          <div className="space-y-1">
            <label htmlFor="name_input">Сертификаты</label>
            <input
              onChange={changeValue}
              name="sertificate"
              value={value.sertificate}
              type="text"
              placeholder="Сертификаты"
              className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
            />
          </div>
          <div className="space-y-1">
            <label htmlFor="name_input">Знание языков</label>
            <input
              onChange={changeValue}
              name="language"
              value={value.language}
              type="text"
              placeholder="Знание языков"
              className="w-full h-[44px] outline-none border border-black/5 px-3 rounded-md placeholder:text-[#B0AAD0]"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
