import UserWorks from "../../assets/img/user-works.jpg";
import UserImg from "../../assets/img/user2.svg";
import Stars from "../../assets/icons/stars.svg";
import { WorksCart } from "../work/components/works-cart";
import { PaginationButton } from "../../components/buttons/pagination.button";

export const FavoriteWorks = () => {
  const cart = [
    {
      img: UserWorks,
      name: "Дизайн сайта",
      price: "50 000 тенге",
      user_img: UserImg,
      username: "Екатерина Иванова",
      projects: "Выполнено проектов: 45 ",
      stars: Stars,
    },
  ];

  return (
    <main>
      <section className="bg-[#F6FAFD]">
        <div className="container">
          <h2 className="text-center text-4xl font-semibold text-[#222] py-14">
            <span className="text-[#FBA457]">Избранные</span> ворки
          </h2>
          <ul className="py-14">
            {cart.map((item, i) => (
              <WorksCart key={i} {...item} />
            ))}
            <PaginationButton />
          </ul>
        </div>
      </section>
    </main>
  );
};
