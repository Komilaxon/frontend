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
import Slider from "react-slick";
import { useGetWorksQuery } from "../../../redux/api/work";
import { useParams } from "react-router-dom";

export const MainWork = () => {
  const { data: works } = useGetWorksQuery({
    user_id: "659abb9680fc5376ed8930ac",
  });
  const { id } = useParams();
  const workData = works?.data?.filter(item => item._id === id)[0];
  console.log(workData);
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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

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
              <Slider {...settings}>
                {
                  workData?.images.map(image => <div class="h-[426px]">
                    <img src={"http://localhost:4000/api/" + image} alt="image" class="w-full object-contain h-full" />
                  </div>)
                }
              </Slider>
              <div className="p-5">
                <p className="text-base font-normal w-[718px] py-10"></p>
                <p className="text-xl font-semibold pb-5">
                  Часто задаваемые вопросы
                </p>
                {
                  workData?.questions?.map((q) => {
                    let qFromStr = JSON.parse(q);
                    return <div className=" flex flex-col justify-between border-b-2 py-3 text-lg font-medium">
                      <div className="flex justify-between items-center">
                        <p>{qFromStr.question}</p>
                        <button onClick={toogleShowInfo1} className="w-4">
                          {showInfo1 ? (
                            <img src={ReverseVektor} alt="img" />
                          ) : (
                            <img src={ProjectsLine} alt="img" />
                          )}
                        </button>
                      </div>
                      <p className={showInfo1 ? "text-base pt-3" : "hidden"}>
                        {qFromStr.answer}
                      </p>
                    </div>
                  })
                }
                <p className="text-xl font-semibold py-8">
                  Требоввания к заказчику
                </p>
                <div className="text-sm" dangerouslySetInnerHTML={{ __html: workData?.requirements }}></div>
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
                {workData?.skills.map((item, i) => (
                  <React.Fragment key={i._id}>
                    <p className="py-3 px-5 border border-[#F2F0FE] rounded-full">
                      {item.name}
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
