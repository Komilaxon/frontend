import Logo from "../../assets/icons/logo.svg";
import Img from "../../assets/img/login-img.png";
import { Link } from "react-router-dom";

export const PasswordRecovery2 = () => {
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
            Давайте восстановим Вам пароль
          </p>
          <h2 className="text-3xl font-bold text-[#1A202C] pb-5">
            Придумайте новый пароль
          </h2>
          <form>
            <div className="">
              <label className="text-lg font-medium">Пароль</label>
              <input
                type="text"
                placeholder="Пароль"
                className="w-full border-b-2 border-b-[#f2f0fe] p-3 rounded-full outline-none"
              />
            </div>
            <div className="pt-8 pb-8">
              <label className="text-lg font-medium">Повтарите пароль</label>
              <input
                type="text"
                placeholder="Пароль"
                className="w-full border-b-2 border-b-[#f2f0fe] p-3 rounded-full outline-none"
              />
            </div>
            <button className="text-lg font-bold bg-[#04C35C] rounded-full py-3 w-full text-white hover:text-[#04C35C] hover:bg-inherit border border-[#04C35C]">
              Изменить пароль
            </button>
          </form>
        </div>
      </div>
      <div className="w-[50%] h-full">
        <img className="w-full object-cover" src={Img} alt="login_img" />
      </div>
    </div>
  );
};
