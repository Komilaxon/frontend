import UserImg from "../../../assets/img/user2.svg";
import Stars from "../../../assets/icons/stars.svg";
import { PaginationButton } from "../../../components/buttons/pagination.button";
import "./reviews.css";

export const Reviews = () => {
  return (
    <div>
      <h3 className="reviews_title">Отзывы</h3>
      <span className="reviews_positive">Положительные (65)</span>
      <span className="reviews_negative">Отрицательные(10)</span>
      <ul className="reviews_list">
        <li className="reviews_item">
          <div className="reviews_top_box">
            <div>
              <img src={UserImg} alt="img" />
            </div>
            <div>
              <h4 className="reviews_user">Никита Евреев</h4>
              <span>
                <img src={Stars} alt="stars-img" />
              </span>
            </div>
          </div>
          <p className="reviews_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            tincidunt eget eu, eget commodo condimentum non, fringilla
            fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In
            egestas cursus orci dignissim in lectus nulla.{" "}
          </p>
        </li>
      </ul>
      <PaginationButton />
    </div>
  );
};
