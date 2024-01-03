import Stars from "../../assets/icons/stars.svg";
import UserImg from "../../assets/img/user2.svg";

export const Reviews = () => {
  return (
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
        tincidunt eget eu, eget commodo condimentum non, fringilla fermentum.
        Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus
        orci dignissim in lectus nulla.{" "}
      </p>
    </li>
  );
};
