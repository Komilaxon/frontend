import "./wallet.css";
import Qiwi from "../../assets/icons/qiwi.svg";
import WebMoney from "../../assets/icons/webmoney.svg";
import VisaImg from "../../assets/icons/visa.svg";
import Plus from "../../assets/icons/plus.svg";
import Check from "../../assets/icons/check.svg";
import Cart from "../../assets/icons/cart.svg";

const wallet = [
  { name: "Чистый доход", price: "1 000 000 тенге" },
  { name: "Выведено", price: "500 000 тенге" },
  { name: "Куплено", price: "40 000 тенге" },
  { name: "Ожидает разрешения", price: "50 000 тенге" },
];

const history = [
  {
    img: Plus,
    color: "#D7FFEC",
    name: "Пополнение баланса",
    date: "22 октября, 2021 года",
    price: "150 000 тенге",
    hash: "c2d5abbb5d87eb9d0378e187ff0e9df5a97adf68",
  },
  {
    img: Check,
    color: "#F2F0FE",
    name: "Вывод средств",
    date: "15 октября, 2021 года",
    price: "300 000 тенге",
    hash: "826ad6e3c5757747304a0c7aff4e00f6ffacd832",
  },
  {
    img: Cart,
    color: "#FFEDDD",
    name: "Покупка услуги",
    date: "14 сентября, 2021 года",
    price: "200 000 тенге",
    hash: "987829a3bdb628cb8bb69d4ad1eedce6193792ac",
  },
];
export const Wallet = () => {
  return (
    <main>
      <section className="bg-[#F6FAFD]">
        <div className="container">
          <h2 className="wallet_title py-10">
            Мой <span>кошелек</span>
          </h2>
          <div className="wallet_content flex justify-around gap-8">
            <div className="wallet_left_box">
              {wallet.map((item, i) => (
                <div key={i} className="wallet_text_box space-y-4">
                  <p className="wallet_text">{item.name}</p>
                  <p className="wallet_text">{item.price}</p>
                </div>
              ))}
            </div>
            <div className="wallet_right_box p-4">
              <div className="space-y-4">
                <p className="wallet_right_text">Доступна сумма для вывода</p>
                <p className="wallet_right_text text-[#1DBF73]">
                  250 000 тенге
                </p>
                <p className="wallet_right_text">Вывести средства на</p>
              </div>
              <div className="flex items-center gap-6 mt-[34px]">
                <div className="wallet_img_box w-[118px]">
                  <img
                    className="w-full h-full object-contain"
                    src={Qiwi}
                    alt="wallet_img"
                  />
                </div>
                <div className="wallet_img_box w-[143px]">
                  <img
                    className="w-full h-full object-contain"
                    src={WebMoney}
                    alt="wallet_img"
                  />
                </div>
                <div className="wallet_img_box w-[136px]">
                  <img
                    className="w-full h-full object-contain"
                    src={VisaImg}
                    alt="wallet_img"
                  />
                </div>
              </div>
            </div>
          </div>
          <h3 className="history_title">История</h3>
          <div className="pb-[60px]">
            <table className="w-full">
              <thead>
                <tr>
                  <th></th>
                  <th className="text-start pl-4 py-3">Операция</th>
                  <th className="text-start pl-4 py-3">Дата операции</th>
                  <th className="text-start pl-4 py-3">Сумма</th>
                  <th className="text-start pl-4 py-3">Hash операции</th>
                </tr>
              </thead>
              <tbody className="my-5">
                {history.map((item, i) => (
                  <tr key={i}>
                    <td
                      className={`bg-[${item.color}] p-5 rounded-full w-[60px] inline-block`}
                    >
                      <img src={item.img} alt="img" />
                    </td>
                    <td className="p-7">{item.name}</td>
                    <td className="p-7">{item.date}</td>
                    <td className="p-7">{item.price}</td>
                    <td className="p-7">{item.hash}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </main>
  );
};
