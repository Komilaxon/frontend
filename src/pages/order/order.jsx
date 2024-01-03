import Img from "../../assets/icons/vektor3.svg";

export const Order = () => {
  return (
    <main>
      <section className="bg-[#F6FAFD]">
        <div className="container">
          <h2 className="text-[#222] font-semibold text-4xl w-[228px] mx-auto py-16">
            Мои <span className="text-[#FBA457]">заказы</span>
          </h2>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-semibold text-[#222]">
              Всего 10 заявок
            </p>
            <div className="flex items-center py-3 px-5">
              <p className="text-lg font-semibold text-[#222]">
                По возрастанию цены
              </p>
              <div className="pl-2">
                <img src={Img} alt="vektor_img" />
              </div>
            </div>
          </div>
          <ul className="gap-8 py-14">
            <li className="py-5 px-5 space-y-4 rounded-3xl border-[#F2F0FE] drop-shadow-sm">
              <div className="flex justify-between items-center">
                <h3 className="text-2xl font-semibold">
                  Нужно сделать Дизайн сайта по тематике авто
                </h3>
                <p className="text-2xl font-semibold text-[#1DBF73]">
                  Бюджет: 50 000 тенге
                </p>
              </div>
              <p className="text-right text-[#656084] font-normal text-sm">
                4 часа 28 минут назад
              </p>
              <div className="w-[850px]">
                <p className="font-normal text-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus
                  volutpat sollicitudin in ligula. Massa in ultricies vitae
                  varius habitasse. Est lacus eros nec fermentum, id gravida.
                  Dui aliquet dolor convallis mauris. Massa in ultricies vitae
                  varius habitasse. Est lacus eros nec fermentum...
                </p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-lg font-semibol text-[#FBA457]">
                  Прием ставок
                </p>
                <p className="font-normal text-lg text-[#656084]">Предложений: 50</p>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
};
