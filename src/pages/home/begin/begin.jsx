import BeginImg from "../../../assets/img/begin.svg";
import "./begin.css";

export const Begin = () => {
  return (
    <div className="begin_box">
      <h4 className="begin_title">Как WorkTap помогает бизнесу?</h4>
      <div className="service_let_img">
        <img src={BeginImg} alt="begin-img1" />
      </div>
      <p className="begin_text">WorkTap — быстро, просто и безопасно!</p>
      <button className="begin_btn">Начать!</button>
    </div>
  );
};
