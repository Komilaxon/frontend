import TopImg from "../../../assets/img/top.svg";
import Stars from "../../../assets/icons/stars.svg";
import "./top.freelancers.css";

export const TopFreelancers = () => {
  return (
    <div>
      <h3 className="top_title">Топ фрилансеров</h3>
      <ul className="top_list">
        <li className="top_item">
          <div className="top_box">
            <div className="top_img">
              <img src={TopImg} alt="top-img" />
            </div>
            <div>
              <h4 className="top_user_name">Марина Королёва</h4>
              <p className="top_job">Разработчик PHP </p>
              <p className="top_projects">Выполено проектов: 65</p>
              <span className="top_star">
                <img src={Stars} alt="star-img" />
              </span>
            </div>
          </div>
          <button className="top_btn">Написать</button>
        </li>
        <li className="top_watch">
          <button className="top_btn2">Посмотреть всех ТОП фрилансеров</button>
        </li>
      </ul>
    </div>
  );
};
