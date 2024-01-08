import Logo from "../../assets/icons/logo.svg";
import { Link } from "react-router-dom";
import Img from "../../assets/img/login-img.png";
import { useInputValue } from "../../hooks/use.input.value";

export const PasswordRecovery = () => {
  const { value, changeValue } = useInputValue({
    email: "",
    password: "",
  });
  
  const submit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="flex">
      <div className="max-w-[1380px] mx-auto px-5">
        <div className="w-[195px] pt-5">
          <Link to={"/"}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>
        <div className="w-[509px] space-y-4 pt-[175px]">
          <p className="text-base text-[#2D3748]">
            Мы отправим Вам код для восстановления пароля
          </p>
          <h2 className="text-3xl font-bold text-[#1A202C] pb-5">
            Заполните поле ниже
          </h2>
          <form onSubmit={submit}>
            <div className="">
              <label className="text-lg font-medium">E-mail</label>
              <input
                onChange={changeValue}
                type="email"
                placeholder="E-mail"
                className="w-full border-b-2 border-b-[#f2f0fe] p-3 rounded-full outline-none"
              />
            </div>
            <div className="pt-8 pb-8">
              <label className="text-lg font-medium">Код</label>
              <input
                onChange={changeValue}
                type="password"
                placeholder="Код"
                className="w-full border-b-2 border-b-[#f2f0fe] p-3 rounded-full outline-none"
              />
            </div>
            <button className="text-lg font-bold bg-[#04C35C] rounded-full py-3 w-full text-white hover:text-[#04C35C] hover:bg-inherit border border-[#04C35C]">
              Отправить код
            </button>
          </form>
          <Link to={"/login"}>
            <p className="text-center text-base font-medium pt-5">
              Вспомнили пароль?
              <span className="text-[#FBA457]"> Войдите</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="w-[50%] h-full">
        <img className="w-full object-cover" src={Img} alt="login_img" />
      </div>
    </div>
  );
};
