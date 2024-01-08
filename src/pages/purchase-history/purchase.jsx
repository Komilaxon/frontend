import "./purchase.css";
import Vektor from "../../assets/icons/vektor3.svg";
import Img from "../../assets/img/user-works.jpg";
import { PaginationButton } from "../../components/buttons/pagination.button";
const purchase = [
  {
    img: Img,
    name: "Дизайн сайта",
    category: "Стандарт пакет",
    price: "50 000 тенге",
    date: "26.03.2021",
    status: "Выполняется",
  },
];
export const PurchaseHistory = () => {
  return (
    <main>
      <section>
        <div className="container">
          <h2 className="purchase_title py-14 w-[334px] mx-auto">
            История <span>покупок</span>
          </h2>
          <ul className="flex items-center justify-between pb-12">
            <p className="purchase_text">Всего 65 сделок</p>
            <div className="flex items-center gap-4">
              <p className="purchase_watch">Показать только:</p>
              <span className="purchase_span"></span>
              <p className="purchase_text2">Выполняется</p>
              <span className="purchase_span"></span>
              <p className="purchase_text2">Завершено</p>
            </div>
            <div className="flex items-center py-3 px-5">
              <p className="purchase_text3 pr-2">По возрастанию цены</p>
              <p>
                <img src={Vektor} alt="img" />
              </p>
            </div>
          </ul>
          <ul className="grid grid-cols-4 gap-8">
            {purchase.map((item, i) => (
              <li key={i} className="w-[308px]">
                <div className="p-5 space-y-4 rounded-xl">
                  <div>
                    <img src={item.img} alt="img" />
                  </div>
                  <p className="text-lg text-[#222] font-semibold">
                    {item.name}
                  </p>
                  <p className="text-base text-[#B0AAD0] font-medium">
                    {item.category}
                  </p>
                  <span className="text-lg text-[#222] font-semibold">
                    {item.price}
                  </span>
                  <span className="text-base text-[#B0AAD0] font-medium inline-block">
                    {item.date}
                  </span>
                  <p className="text-lg text-[#FBA457] font-semibold">
                    {item.status}
                  </p>
                  <div className="flex items-center justify-between">
                    <button className="bg-[#D7FFEC] py-2 px-10 rounded-full text-base font-medium">
                      В чат
                    </button>{" "}
                    <button className=" bg-[#EBE8FF] text-base font-medium py-2 px-3 rounded-full">
                      Подробнее
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <PaginationButton />
        </div>
      </section>
    </main>
  );
};
