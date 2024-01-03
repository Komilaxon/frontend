import CurrentImg from "../../../assets/img/current-img.svg";
import "./current.css";

export const CurrentWorks = () => {
  return (
    <div>
      <h3 className="current_title">Актуальные ворки</h3>
      <ul className="current_list">
        <li className="current_item">
          <div className="current_box">
            <div className="current_img">
              <img className="w-full" src={CurrentImg} alt="current-img" />
            </div>
            <h4 className="current_text">Сделать дизайн интернет-магазина</h4>
          </div>
          <p className="current_inner_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed
            leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices
            mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla
            neque, interdum. At pharetra consectetur nec est convallis...
          </p>
          <button className="current_btn">Посмотреть</button>
        </li>
        <li className="current_watch">
          <button className="current_btn2">Смотреть все ворки</button>
        </li>
      </ul>
    </div>
  );
};
