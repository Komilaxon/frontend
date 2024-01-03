import "./service.css";

export const Service = () => {
  return (
    <div>
      <h4 className="service_title">Как решать задачи на WorkTap?</h4>
      <p className="service_text">
        Идеально подходит для бизнеса и частных лиц
      </p>
      <ul className="service_list">
        <li className="service_item">
          <p className="service_inner_text">Выберите услугу</p>
          <p className="service_info">
            В супермаркете WorkTap представлен широкий выбор услуг от
            квалифицированных специалистов.
          </p>
        </li>
        <li className="service_item2">
          <p className="service_inner_text">Оплатите</p>
          <p className="service_info">
            Деньги будут перечислены продавцу после того, как он выполнит
            работу, и вы её одобрите.
          </p>
        </li>
        <li className="service_item3">
          <p className="service_inner_text">Получите результат</p>
          <p className="service_info">
            Наш супермаркет гарантирует вам возврат средств в полном объёме в
            случае невыполнения заказа.
          </p>
        </li>
      </ul>
    </div>
  );
};
