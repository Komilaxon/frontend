import UserImg from "../../../assets/img/user2.svg";
import Stars from "../../../assets/icons/stars.svg";
import { PaginationButton } from "../../../components/buttons/pagination.button";
export const Stock2Projects = () => {
  return (
    <ul className="projects_list2">
      <li className="projects_item2">
        <div className="projects_top_box">
          <h3 className="projects_title">
            Нужно сделать Дизайн сайта по тематике авто{" "}
          </h3>
          <p className="projects_text">Бюджет: 50 000 тенге</p>
        </div>
        <p className="projects_time">4 часа 28 минут назад</p>
        <div className="projects_innerbox">
          <div className="projects_user_img">
            <img src={UserImg} alt="user_img" />
          </div>
          <div>
            <h4 className="projects_username">Екатерина Иванова</h4>
            <p className="projects_username">Размещено проектов на бирже: 25</p>
            <span className="projects_stars">
              <img src={Stars} alt="stars" />
            </span>
            <span className="projects_reviews">15 отзывов</span>
          </div>
        </div>
        <p className="projects_offers">Предложений: 50</p>
      </li>
      <PaginationButton />
    </ul>
  );
};
