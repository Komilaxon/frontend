import React from "react";
import Logo from "../../assets/icons/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Star from "../../assets/icons/star.svg";
import Bell from "../../assets/icons/bell.svg";
import Message from "../../assets/icons/message.svg";
import User from "../../assets/img/user.svg";
import ProjectLine from "../../assets/icons/projects.line.svg";
import ReverseLine from "../../assets/icons/reverse.vektor.svg";
import { useModal } from "../../hooks/useModal";
import "./header.css";

import { RegisterModal } from "../../components/register-modal/register.modal";

export const Header = () => {
  const { pathname } = useLocation();
  const { close, open, isOpen, toggle } = useModal();
  if (pathname == "/stock2") {
    return null;
  }
  const [profile, setProfile] = React.useState(false);
  const toogleProfil = () => setProfile(!profile);

  const [auth, setAuth] = React.useState(false);
  const toogleAuth = () => setAuth(!auth);

  const menuItems = [
    {
      path: "/stock",
      label: "Биржа",
    },
    {
      path: "/works",
      label: "Ворки",
    },
    {
      path: "/stock",
      label: "Конкурсы",
    },
    {
      path: "/stock",
      label: "Создать ворк",
    },
    {
      path: "/stock",
      label: "Создать заказ",
    },
  ];
  return (
    <header className="py-[20px] bg-[#F7F6FF]">
      <div className="max-w-[1380px] mx-auto px-5">
        <div className="flex items-center justify-between">
          <div className="w-[195px]">
            <Link to={"/"}>
              <img className="w-full" src={Logo} alt="logo-img" />
            </Link>
          </div>
          <ul className="flex items-center gap-x-10">
            {menuItems.map((item) => (
              <li className="" key={item.label}>
                <Link to={item.path} className="header_link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div>
            {auth ? (
              <ul className="icons_box">
                <li className="icons_item">
                  <Link to={""}>
                    <img src={Star} alt="star-icon" />
                  </Link>
                </li>
                <li className="icons_item">
                  <Link to={""}>
                    <img src={Bell} alt="bell-icon" />
                  </Link>
                </li>
                <li className="icons_item">
                  <Link to={""}>
                    <img src={Message} alt="message-icon" />
                  </Link>
                </li>
                <div className="header_user_box">
                  <p className="user_name">Ернар Ибрагимов</p>
                  <div onClick={toogleAuth} className="user_img_box">
                    <Link to={"/user"}>
                      <img src={User} alt="user-img" />
                    </Link>
                  </div>
                  <button onClick={toogleProfil} className="profile_info">
                    {profile ? (
                      <img src={ProjectLine} alt="vektor" />
                    ) : (
                      <img src={ReverseLine} alt="vektor" />
                    )}
                  </button>
                </div>
              </ul>
            ) : (
              <>
                {/* <Link to={"/register"}> */}
                <button className="text-global_green py-2.5 px-7 rounded-full bg-[#f2f0fe] font-semibold text-base header_btn2">
                  Регистрация
                </button>
                {/* </Link> */}
                {/* <Link to={"/login"}> */}
                <button
                  onClick={toogleAuth}
                  className="bg-global_green py-2.5 px-7 rounded-full text-white ml-7 font-semibold text-base header_btn"
                >
                  Войти
                </button>
                {/* </Link> */}
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
