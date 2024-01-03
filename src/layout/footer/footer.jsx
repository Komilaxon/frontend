import { Link } from "react-router-dom";
import FaceBook from "../../assets/icons/facebook.svg";
import Twitter from "../../assets/icons/twitter.svg";
import Insta from "../../assets/icons/insta.svg";
import In from "../../assets/icons/in.svg";
import "./footer.css";
const categories = [
  "Тексты и переводы",
  "Разработка",
  "Дизайн",
  "Аудио, видео монтаж",
  "Соцсети и реклама",
  "Бизнес и жизнь",
  "SEO и оптимизация",
];

const aboutProjects = [
  "О Нас",
  "Как Это Работает",
  "Политика Приватности",
  "Правила Пользования",
  "Пресса о нас",
];
const support = ["Контакты", "Политика Безопасности", "FAQ"];

export const Footer = () => {
  return (
    <footer className="site_footer">
      <div className="max-w-[1380px] mx-auto px-5">
        <ul className="footer_list">
          <li className="footer_item">
            <h5 className="footer_title">Топ категории</h5>
            {categories.map((item, i) => (
              <Link key={i} className="footer_link">
                {item}
              </Link>
            ))}
          </li>
          <li className="footer_item">
            <h5 className="footer_title">О Проекте</h5>
            {aboutProjects.map((item, i) => (
              <Link key={i} className="footer_link">
                {item}
              </Link>
            ))}
          </li>
          <li className="footer_item">
            <h5 className="footer_title">Поддержка</h5>
            {support.map((item, i) => (
              <Link key={i} className="footer_link">
                {item}
              </Link>
            ))}
          </li>
          <li className="footer_item">
            <h5 className="footer_title">Follow</h5>
            <ul className="footer_site_list">
              <li className="footer_site">
                <a href="" className="footer_site_img">
                  <img src={FaceBook} alt="img" />
                </a>
              </li>
              <li className="footer_site">
                <a href="" className="footer_site_img">
                  <img src={Twitter} alt="img" />
                </a>
              </li>
              <li className="footer_site">
                <a href="" className="footer_site_img">
                  <img src={Insta} alt="img" />
                </a>
              </li>
              <li className="footer_site">
                <a href="" className="footer_site_img">
                  <img src={In} alt="img" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
        <p className="footer_end">
          Copyright @ 2021 | WorkTap – Worktap.KZ. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};
