import WorkSmallVektor from "../../../assets/icons/work.vektor.svg";
import WorkMainImg from "../../../assets/img/main-work.jpg";
import React from "react";
import Slider2 from "../../../assets/img/slider2.jpg";
import Slider3 from "../../../assets/img/slider3.jpg";
import Slider4 from "../../../assets/img/slider4.jpg";
import Slider5 from "../../../assets/img/slider5.jpg";
import ProjectsLine from "../../../assets/icons/projects.line.svg";
import ReverseVektor from "../../../assets/icons/reverse.vektor.svg";
import UserImg from "../../../assets/img/user2.svg";
import Stars from "../../../assets/icons/stars.svg";
import { PaginationButton } from "../../../components/buttons/pagination.button";
import ReviewsUserImg from "../../../assets/icons/rev.user.svg";

const userCategory = [
  "Дизайн сайта",
  "Веб дизайн",
  "UX/UI дизайн",
  "Web дизайн ",
];

export const MainWork = () => {
  const [showInfo1, setShowInfo1] = React.useState(false);
  const [showInfo2, setshowInfo2] = React.useState(false);
  const [showInfo3, setshowInfo3] = React.useState(false);
  const [showEconom, setShowEconom] = React.useState(false);
  const [showStandart, setShowStandart] = React.useState(false);
  const [showPremium, setShowPremium] = React.useState(false);
  const [showEconomOptions3, setShowEconomOptions3] = React.useState(!false);

  const toogleShowInfo1 = () => setShowInfo1(!showInfo1);
  const toggleShowInfo2 = () => setshowInfo2(!showInfo2);
  const toggleShowInfo3 = () => setshowInfo3(!showInfo3);
  const toggleShowEconom = () => setShowEconom(!showEconom);
  const toggleShowStandart = () => setShowStandart(!showStandart);
  const toggleShowPremium = () => setShowPremium(!showPremium);
  const toogleOptions3 = () => setShowEconomOptions3(!showEconomOptions3);

  return (
    <main>
      <section className="bg-[#F6FAFD]">
        <div className="container">
          <h2 className="text-2xl font-semibold py-5">Дизайн сайта</h2>
          <p className="flex items-center gap-2 text-[#B0AAD0] text-sm pb-5">
            Дизайн <img src={WorkSmallVektor} alt="line" /> Веб и мобильный
            дизайн <img src={WorkSmallVektor} alt="line2" />
            Веб-дизайн
          </p>
          <div className="flex gap-8">
            {/* left-box */}
            <div className="w-[758px]">
              <div className="w-full">
                <img
                  className="object-cover"
                  src={WorkMainImg}
                  alt="work_img"
                />
              </div>
              <div className="p-5">
                <p className="text-base font-normal w-[718px] py-10"></p>
                <p className="text-xl font-semibold pb-5">
                  Часто задаваемые вопросы
                </p>
                <div className=" flex flex-col justify-between border-b-2 py-3 text-lg font-medium">
                  <div className="flex justify-between items-center">
                    <p>Исходники будут?</p>
                    <button onClick={toogleShowInfo1} className="w-4">
                      {showInfo1 ? (
                        <img src={ReverseVektor} alt="img" />
                      ) : (
                        <img src={ProjectsLine} alt="img" />
                      )}
                    </button>
                  </div>
                  <p className={showInfo1 ? "text-base pt-3" : "hidden"}>
                    Мы создаем продукт, а не баннер для рекламы. При созданий
                    продукта которыми будут пользоваться люди в первую очередь
                    нужно обратить внимание на удобство. Это не значит что
                    дизайн будет уродским, нет он будет приятен глазу и будет
                    подходит тематике сайта.
                  </p>
                </div>
                <div className=" flex flex-col justify-between border-b-2 py-2 text-lg font-medium">
                  <div className="flex justify-between items-center">
                    <p>А в каком формате я получу исходники?</p>
                    <button onClick={toggleShowInfo2} className="w-4">
                      {showInfo2 ? (
                        <img src={ReverseVektor} alt="img" />
                      ) : (
                        <img src={ProjectsLine} alt="img" />
                      )}
                    </button>
                  </div>
                  <p className={showInfo2 ? "text-base pt-3" : "hidden"}>
                    Мы создаем продукт, а не баннер для рекламы. При созданий
                    продукта которыми будут пользоваться люди в первую очередь
                    нужно обратить внимание на удобство. Это не значит что
                    дизайн будет уродским, нет он будет приятен глазу и будет
                    подходит тематике сайта.
                  </p>
                </div>
                <div className=" flex flex-col justify-between border-b-2 py-3 text-lg font-medium">
                  <div className="flex justify-between items-center">
                    <p>А что если мне не понравиться дизайн?</p>
                    <button onClick={toggleShowInfo3} className="w-4">
                      {showInfo3 ? (
                        <img src={ReverseVektor} alt="img" />
                      ) : (
                        <img src={ProjectsLine} alt="img" />
                      )}
                    </button>
                  </div>
                  <p className={showInfo3 ? "text-base pt-3" : "hidden"}>
                    Мы создаем продукт, а не баннер для рекламы. При созданий
                    продукта которыми будут пользоваться люди в первую очередь
                    нужно обратить внимание на удобство. Это не значит что
                    дизайн будет уродским, нет он будет приятен глазу и будет
                    подходит тематике сайта.
                  </p>
                </div>
                <p className="text-xl font-semibold py-8">
                  Требоввания к заказчику
                </p>
                <p className="text-sm">
                  1. Предоставить Техническое задание где есть текста для сайта
                  и все необходимые медиа(фото, видео и т.п.) <br />
                  2.Требование 2
                </p>
                <ul className="gap-10 pb-10">
                  <h3 className="text-2xl font-semibold pt-10">Отзывы</h3>
                  <span className="text-base font-semibold text-[#1DBF73] py-7 inline-block">
                    Положительные (65)
                  </span>
                  <span className="text-base ml-10">Отрицательные(10)</span>
                  <li className="p-5 border border-[#F2F0FE] rounded-2xl mb-5">
                    <div className="flex items-center gap-5 pb-5">
                      <div className="">
                        <img src={ReviewsUserImg} alt="img" />
                      </div>
                      <div>
                        <h4 className="reviews_user">Никита Евреев</h4>
                        <span>
                          <img src={Stars} alt="stars-img" />
                        </span>
                      </div>
                    </div>
                    <p className="reviews_text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Tellus tincidunt eget eu, eget commodo condimentum non,
                      fringilla fermentum. Morbi sed enim facilisis metus
                      pretium leo, mauris. In egestas cursus orci dignissim in
                      lectus nulla.{" "}
                    </p>
                  </li>
                  <PaginationButton />
                </ul>
              </div>
            </div>
            {/* right-box */}
            <div className="w-full space-y-4">
              <div
                className={
                  showEconom
                    ? "flex flex-col justify-between border-b-2 text-lg font-medium border border-[#F2F0FE] rounded-2xl p-5 bg-[#F2F0FE]"
                    : "text-lg font-medium border border-[#F2F0FE] rounded-2xl p-5"
                }
              >
                <div className="flex justify-between items-center">
                  <p>Эконом пакет </p>
                  <button onClick={toggleShowEconom} className="w-4">
                    {showEconom ? (
                      <img src={ReverseVektor} alt="img" />
                    ) : (
                      <img src={ProjectsLine} alt="img" />
                    )}
                  </button>
                </div>
                <div
                  className={showEconom ? "text-base pt-3 space-y-4" : "hidden"}
                >
                  <p className="text-base">
                    Дизайн лэндинга с мобильной и компьютерной версией дизайна.
                  </p>
                  <div className="flex justify-between">
                    <p className="text-xl font-semibold text-[#1DBF73]">
                      50 000 ТГ
                    </p>
                    <p className="text-lg font-medium">Сделаю за 5 дней</p>
                  </div>
                  <p className="text-lg font-medium">
                    Количество доработок: 5 <br /> Переменная 1: Значение 1
                    <br />
                    Переменная 2: Значение 2
                  </p>
                  <div className=" flex flex-col justify-between py-5 text-lg font-medium space-y-3">
                    <p className="text-xl font-semibold">
                      Дополнительные опции
                    </p>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-medium">Планшетная версия</p>
                      <button onClick={toogleShowInfo1} className="w-4">
                        {showInfo1 ? (
                          <img src={ReverseVektor} alt="img" />
                        ) : (
                          <img src={ProjectsLine} alt="img" />
                        )}
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-medium">Перенести в фотошоп</p>
                      <button onClick={toogleShowInfo1} className="w-4">
                        {showInfo1 ? (
                          <img src={ReverseVektor} alt="img" />
                        ) : (
                          <img src={ProjectsLine} alt="img" />
                        )}
                      </button>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-xl font-medium">
                        Подготовка к верстке
                      </p>
                      <button onClick={toogleOptions3} className="w-4">
                        {showEconomOptions3 ? (
                          <img src={ReverseVektor} alt="img" />
                        ) : (
                          <img src={ProjectsLine} alt="img" />
                        )}
                      </button>
                    </div>
                    <div
                      className={
                        showEconomOptions3
                          ? "text-base pt-3 pb-10 bg-[]"
                          : "hidden"
                      }
                    >
                      <p className="text-base pb-6">
                        Настройка всех слоев и назвать так чтобы было понятно
                        верстальщику. Цена за 1 страницу
                      </p>
                      <p className="text-base font-medium pb-2">
                        Срок выполнения: 1 день <br />
                        Цена: 5000 тенге
                      </p>
                      <button className="text-base font-semibol text-[#1DBF73] w-full border border-[#1DBF73] rounded-full py-3 hover:bg-[#1DBF73] hover:text-white">
                        Добавить к заказу
                      </button>
                    </div>
                  </div>
                  <button className="w-full py-3 text-base font-semibold text-[#F6FAFD] bg-[#1DBF73] rounded-full border border-[#1DBF73] hover:bg-inherit hover:text-[#1DBF73]">
                    Купить за 50 000 тенге
                  </button>
                </div>
              </div>
              <div className=" flex flex-col justify-between border-b-2 text-lg font-medium border border-[#F2F0FE] rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <p>Стандартный пакет</p>
                  <button onClick={toggleShowStandart} className="w-4">
                    {showStandart ? (
                      <img src={ReverseVektor} alt="img" />
                    ) : (
                      <img src={ProjectsLine} alt="img" />
                    )}
                  </button>
                </div>
                <p className={showStandart ? "text-base pt-3" : "hidden"}>
                  Мы создаем продукт, а не баннер для рекламы. При созданий
                  продукта которыми будут пользоваться люди в первую очередь
                  нужно обратить внимание на удобство. Это не значит что дизайн
                  будет уродским, нет он будет приятен глазу и будет подходит
                  тематике сайта.
                </p>
              </div>
              <div className=" flex flex-col justify-between border-b-2 text-lg font-medium border border-[#F2F0FE] rounded-2xl p-5">
                <div className="flex justify-between items-center">
                  <p>Премиум пакет</p>
                  <button onClick={toggleShowPremium} className="w-4">
                    {showPremium ? (
                      <img src={ReverseVektor} alt="img" />
                    ) : (
                      <img src={ProjectsLine} alt="img" />
                    )}
                  </button>
                </div>
                <p className={showPremium ? "text-base pt-3" : "hidden"}>
                  Мы создаем продукт, а не баннер для рекламы. При созданий
                  продукта которыми будут пользоваться люди в первую очередь
                  нужно обратить внимание на удобство. Это не значит что дизайн
                  будет уродским, нет он будет приятен глазу и будет подходит
                  тематике сайта.
                </p>
              </div>
              <div className="flex items-center gap-5 border border-[#F2F0FE] rounded-2xl p-5">
                <div className="w-[120px]">
                  <img src={UserImg} alt="user_img" />
                </div>
                <div className="space-y-2">
                  <h4 className="text-lg font-medium">Екатерина Иванова</h4>
                  <p className="text-lg font-medium">Закрыто сделок: 25</p>
                  <div className="flex gap-5">
                    <div className="projects_stars">
                      <img src={Stars} alt="stars" />
                    </div>
                    <p className="">15 отзывов</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap gap-5">
                {userCategory.map((item, i) => (
                  <React.Fragment key={i}>
                    <p className="py-3 px-5 border border-[#F2F0FE] rounded-full">
                      {item}
                    </p>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
