import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/icons/logo.svg";
import LoginImg from "../../assets/img/login-img.png";
import Balls from "../../assets/icons/dot.svg";
import { useRegisterMutation } from "../../redux/auth/auth";

import "../login/login.css";

export const Register = ({ token, setToken }) => {
  const [registerMutate] = useRegisterMutation();
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      let obj = {};

      for (let i = 0; i < e.target.length; i++) {
        let item = e.target[i];
        obj[item.name] = item.value;
      }
      const res = await registerMutate(obj).then((data) => {
        localStorage.setItem("token", JSON.stringify(data.data.data));
        setToken(data.data.data);
      });

      navigate("/login");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="flex">
      <div className="max-w-[1380px] mx-auto px-5">
        <div className="w-[195px] pt-5">
          <Link to={"/"}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>
        <div className="w-[509px] py-14">
          <p className="text-base text-[#2d3748] pb-3">
            Давайте создадим Вам аккаунт
          </p>
          <h2 className="text-3xl font-bold text-[#1a202c]">
            Заполните все поля
          </h2>
          <form onSubmit={submit}>
            <div className="input_box">
              <label className={"text-lg font-medium"}>Ваше имя
              <input
                type="text"
                required={true}
                pattern="^[0-9A-Za-z]{6,16}\d+$"
                placeholder="Имя"
                className="w-full border-b-2 border-b-[#f2f0fe] p-3 rounded-full outline-none"
                name="fullname"
              />
              
              </label>
              
            </div>
            <div className="input_box">
              <label className="text-lg font-medium">Ваше фамилия</label>
              <input
                type="text"
                required={true}
                placeholder="Фамилия"
                className="w-full border-b-2 border-b-[#f2f0fe] p-3 rounded-full outline-none"
                name="lastname"
              />
            </div>
            <div className="input_box">
              <label className="text-lg font-medium">E-mail</label>
              <input
                type="email"
                required={true}
                placeholder="E-mail"
                className="w-full border-b-2 border-b-[#f2f0fe] p-3 rounded-full outline-none"
                name="email"
                min={6}
              />
            </div>
            <div className="input_box">
              <label className="text-lg font-medium">Телефон номер</label>
              <input
                type="text"
                required={true}
                placeholder="Телефон"
                className="w-full border-b-2 border-b-[#f2f0fe] p-3 rounded-full outline-none"
                name="phone"
              />
            </div>
            <div className="input_box">
              <label className="text-lg font-medium">Пароль</label>
              <input
                type="password"
                required={true}
                placeholder="Пароль"
                className="w-full border-b-2 border-b-[#f2f0fe] p-3 rounded-full outline-none"
                name="password"
              />
            </div>
            <div className="input_box">
              <label className="text-lg font-medium">Повтарите пароль</label>
              <input
                type="password"
                required={true}
                placeholder="Пароль"
                className="w-full border-b-2 border-b-[#f2f0fe] p-3 rounded-full outline-none"
                name="confirm_password"
              />
            </div>
            <div className="flex items-center gap-5 py-5">
              <div className="flex items-center gap-2">
                <div>
                  <img src={Balls} alt="img" />
                </div>
                <p className="text-lg ">Я исполнитель</p>
              </div>
              <div className="flex items-center gap-2">
                <div>
                  <img src={Balls} alt="img" />
                </div>
                <p className="text-lg ">Я заказчик</p>
              </div>
            </div>
            <button className="text-lg font-bold bg-[#04C35C] rounded-full py-3 w-full text-white hover:text-[#04C35C] hover:bg-inherit border border-[#04C35C]">
              Зарегестрироваться
            </button>
          </form>
          <Link to={"/login"}>
            <p className="text-[#616161] text-center text-base font-medium pt-5">
              У Вас есть аккаунт?{" "}
              <span className="text-[#fba457]">Войдите</span>
            </p>
          </Link>
        </div>
      </div>
      <div className="register_img">
        <img src={LoginImg} alt="login_img" />
      </div>
    </div>
  );
};
