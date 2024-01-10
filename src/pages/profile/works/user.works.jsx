import { Link } from "react-router-dom";
import UserWork from "../../../assets/img/user-works.jpg";
import { PaginationButton } from "../../../components/buttons/pagination.button";
import "./user.works.css";
import React from "react";
import { useGetWorksQuery } from "../../../redux/api/work";

export const UserWorks = () => {
  const { data: works } = useGetWorksQuery({
    user_id: "659e5fc98875ff89ed400d2a",
  });
  console.log(works);
  return (
    <React.Fragment>
      <h3 className="user_works_title">Мой ворки</h3>
      <ul className="user_works_list">
        <Link to={"/create_work"} className="user_works_item">
          <p className="create_work">Создать ворк</p>
        </Link>
        {works?.data?.results?.map((item) => (
          <li className="user_works_item2">
            <div>
              <img
                src={"http://localhost:4000/api/" + item.images[0]}
                alt="work_img"
              />
            </div>
            <div className="user_work_text_box">
              <p className="user_work_title">{item.title}</p>
              <p className="user_work_price">{item.sum} тенге</p>
            </div>
          </li>
        ))}
      </ul>
      <PaginationButton />
    </React.Fragment>
  );
};
