import { Link } from "react-router-dom";
import UserWork from "../../../assets/img/user-works.jpg";
import { PaginationButton } from "../../../components/buttons/pagination.button";
import "./user.works.css";
import React from "react";

export const UserWorks = () => {
  return (
    <React.Fragment>
      <h3 className="user_works_title">Мой ворки</h3>
      <ul className="user_works_list">
        <Link to={"/create_work"} className="user_works_item">
          <p className="create_work">Создать ворк</p>
        </Link>
        <li className="user_works_item2">
          <div>
            <img src={UserWork} alt="work_img" />
          </div>
          <div className="user_work_text_box">
            <p className="user_work_title">Дизайн сайта</p>
            <p className="user_work_price">50 000 тенге</p>
          </div>
        </li>
      </ul>
      <PaginationButton />
    </React.Fragment>
  );
};
