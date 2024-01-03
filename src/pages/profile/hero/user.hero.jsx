import React from "react";
import "./user.css";
import UserImg from "../../../assets/img/profile.svg";
import { Link } from "react-router-dom";
import City from "../../../assets/icons/city.svg";
import Site from "../../../assets/icons/site.svg";
import Study from "../../../assets/icons/study.svg";
import Language from "../../../assets/icons/language.svg";
import Sertificate from "../../../assets/icons/sertificate.svg";
import ProjectLine from "../../../assets/icons/projects.line.svg";
import ReverseLine from "../../../assets/icons/reverse.vektor.svg";

const skills = [
  "Figma",
  "Adobe photoshop",
  "Adobe illustrator",
  "Corel draw",
  "Adobe After Effects",
  "HTML/CSS",
];

const info = [
  { img: City, name: "Страна:" },
  { img: Site, name: "На сайте:" },
  { img: Study, name: "Образование:" },
  { img: Language, name: "Знание языков:" },
  { img: Sertificate, name: "Сертификаты:" },
];

export const UserHero = () => {
  const [showUserInfo, setShowUserInfo] = React.useState(false);
  const toogleShowUserInfo = () => setShowUserInfo(!showUserInfo);

  return (
    <div className="user_hero_block">
      <div className="user_hero_letf_box">
        <p className="user_hero_category_name">Дизайнер</p>
        <h2 className="user_hero_username">
          <span>Ернар</span> Ибрагимов
        </h2>
        <p className="user_hero_text">
          Работаю дизайнером с 1999 года. Был опыт в газетах, журналах,
          типографиях, рекламных агентствах, издательских домах... Порядка 8
          лет, занимаюсь логотипами и фирменными стилями.
        </p>
        <ul className="user_hero_skills_list">
          {skills.map((item, i) => (
            <li key={i} className="user_hero_skills_item">
              <span className="user_hero_skills">{item}</span>
            </li>
          ))}
        </ul>
        <div className="user_hero_info flex">
          <div className="flex items-center justify-between">
            <div>
              <button
                onClick={toogleShowUserInfo}
                className="user_hero_info_label"
              >
                {showUserInfo
                  ? "Скрыть подробную информацию"
                  : "Показать подробную информацию"}
              </button>
            </div>
            <button onClick={toogleShowUserInfo}>
              {showUserInfo ? (
                <img src={ReverseLine} alt="vektor" />
              ) : (
                <img src={ProjectLine} alt="vektor" />
              )}
            </button>
          </div>
          <div className={showUserInfo ? "user_hero_info_content" : "hidden"}>
            <ul className="info_list">
              <li className="info_item">
                {info.map((item, i) => (
                  <React.Fragment key={i}>
                    <div className="flex items-center">
                      <img className="pr-3 mb-5" src={item.img} alt="img" />
                      <p className="mb-5 text-lg">{item.name} </p>
                    </div>
                  </React.Fragment>
                ))}
              </li>
              <li className="info_item">
                <p className="pb-5 text-base">Казахстан, Алматы</p>
                <p className="pb-5 text-base">3 года</p>
                <div className="pb-2">
                  <p className="text-base">1. Казахстан, КазНУ, Бакалавр</p>
                  <p className="text-base">2. Казахстан, КБТУ, Магистратура</p>
                </div>
                <div className="pb-2">
                  <p className="text-base">1. Казахский</p>
                  <p className="text-base">2. Русский</p>
                </div>
                <div className="pb-2">
                  <p className="text-base">1. Сертификат 1, 2020 года </p>
                  <p className="text-base">2. Сертификат 2, 2021 года</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="user_hero_img_box">
        <img src={UserImg} alt="user_img" />
      </div>
      <Link to={"/search"}>
        <button className="search_works_btn">
          <p className="search_vektor">Быстрый поиск ворков</p>
        </button>
      </Link>
    </div>
  );
};
