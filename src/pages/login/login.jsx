import Logo from "../../assets/icons/logo.svg";
import { useInputValue } from "../../hooks/use.input.value";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../redux/auth/auth";
import "./login.css";
import LoginImg from "../../assets/img/login-img.png";
import React from "react";

export const Login = ({ token, setToken }) => {
  const [remember, setRemember] = React.useState(false);
  const chechRemembering = () => setRemember(!remember);
  const { value, changeValue } = useInputValue({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const [loginMutate] = useLoginMutation();

  const submit = async (e) => {
    e.preventDefault();

    try {
      const res = await loginMutate(value).then((data) => {
        localStorage.setItem("token", JSON.stringify(data.data.data));
        setToken(data.data.data);
      });

      navigate("/user");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="login_block">
      <div className="max-w-[1380px] mx-auto px-5">
        <div className="login_logo">
          <Link to={"/"}>
            <img src={Logo} alt="logo-img" />
          </Link>
        </div>

        <div className="login_left_box">
          <p className="login_text">Добро пожаловать!</p>
          <h2 className="login_title">Войдите в свой аккаунт</h2>
          <form onSubmit={submit} className="login_form">
            <div className="input_box">
              <label>E-mail</label>
              <input
                onChange={changeValue}
                type="text"
                placeholder="E-mail"
                className="login_email"
                name="email"
              />
            </div>
            <div className="input_box">
              <label>Пароль </label>
              <input
                onChange={changeValue}
                type="password"
                placeholder="Пароль"
                className="login_password"
                name="password"
              />
            </div>
            <div className="login_inner_box">
              <button type="button" onClick={chechRemembering}>
                <span
                  className={remember ? "login_span2" : "login_span"}
                ></span>
              </button>
              <p className="login_rem">Запомнить меня</p>
              <Link to={"/recovery"} className="login_rem_pass">
                <p>Забыли пароль?</p>
              </Link>
            </div>
            <button className="login_btn">Войти</button>
            <button className="login_btn2">Или войдите с помощю Google</button>
          </form>
          <Link to={"/register"}>
            <p className="login_create">
              У Вас все еще нет аккауна?
              <span className="login_create_span">
                Зарегистрируйтесь бесплатно!
              </span>
            </p>
          </Link>
        </div>
      </div>
      <div className="login_img">
        <img src={LoginImg} alt="login_img" />
      </div>
    </div>
  );
};
