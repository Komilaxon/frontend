import React from "react";
import Logo from "../../assets/icons/logo.svg";
import { Link, useLocation } from "react-router-dom";
import Star from "../../assets/icons/star.svg";
import Bell from "../../assets/icons/bell.svg";
import Message from "../../assets/icons/message.svg";
import User from "../../assets/img/user.svg";
import ProjectLine from "../../assets/icons/projects.line.svg";
import ReverseLine from "../../assets/icons/reverse.vektor.svg";
import "./header.css";

export const Header = () => {
  const { pathname } = useLocation();
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
      path: "/order/new",
      label: "Создать заказ",
    },
  ];
  const profileItems = [
    {
      path: "/user",
      label: "Мой кабинет",
    },
    {
      path: "/orders",
      label: "Мои заказы",
    },
    {
      path: "/history",
      label: "История",
    },
    {
      path: "/my_settings",
      label: "Мои настройки",
    },
    {
      path: "/logout",
      label: "Выйти из аккаунта",
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
          <div className="flex">
            {auth ? (
              <div className="flex items-center gap-3">
                <div className="flex">
                  <div className="icons_item">
                    <Link to={""}>
                      <img src={Star} alt="star-icon" />
                    </Link>+

                  </div>
                  <div className="icons_item">
                    <Link to={""}>
                      <img src={Bell} alt="bell-icon" />
                    </Link>
                  </div>
                  <div className="icons_item">
                    <Link to={"/chat"}>
                      <img src={Message} alt="message-icon" />
                    </Link>
                  </div>
                </div>
                <div
                  className={
                    profile
                      ? "flex flex-col justify-between border-b-2 text-lg font-medium border border-[#F2F0FE] rounded-2xl p-2 bg-[#F2F0FE]"
                      : "text-lg font-medium border border-[#F2F0FE] rounded-2xl p-2 ml-5 "
                  }
                >
                  <div className="header_user_box relative ">
                    <p className="user_name">Ернар Ибрагимов</p>
                    <div onClick={toogleAuth} className="user_img_box">
                      <Link to={"/user"}>
                        <img src={User} alt="user-img" />
                      </Link>
                    </div>
                    <button onClick={toogleProfil} className="profile_info">
                      {profile ? (
                        <img src={ReverseLine} alt="vektor" />
                      ) : (
                        <img src={ProjectLine} alt="vektor" />
                      )}
                    </button>
                    <div className={profile ? "space-y-2 left-[-3.5px] absolute z-10 bg-[#F2F0FE] top-full" : "hidden"}>
                      <div className="whitespace-nowrap">
                        <button className="text-base text-[#222] py-2 px-4 rounded-full hover:bg-[#FBA457] hover:text-[#fff] border border-[#F2F0FE]">
                          Я заказчик
                        </button>
                        <button className="text-base text-[#222] py-2 px-4 rounded-full hover:bg-[#FBA457] hover:text-[#fff] border border-[#F2F0FE] ml-3">
                          Я исполнитель
                        </button>
                      </div>
                      <ul className="p-5 space-y-2">
                        {profileItems.map((item) => (
                          <li
                            className="hover:text-[#FBA457] transition-all"
                            key={item.label}
                          >
                            <Link to={item.path}>{item.label}</Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
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
