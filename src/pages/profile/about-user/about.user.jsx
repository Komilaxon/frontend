import React from "react";
import { UserInfo } from "./info/user.info";
import { UserInputInfo } from "./input-info/input.info";
import { UserJob } from "./job/user.job";
import { UserImg } from "./user-img/user.img";
import { Link } from "react-router-dom";

export const AboutUser = () => {
  return (
    <main>
      <section className="py-[100px] bg-[#F6FAFD]">
        <div className="container">
          <div className="flex justify-between">
            <UserInfo />
            <div>
              <UserJob />
              <UserInputInfo />
            </div>
          </div>
          <UserImg />
          <div>
            <Link to={"/user"}>
              <button
                type="submit"
                className=" bg-[#1DBF73] hover:bg-[#48d191] text-white text-[20px] max-w-[240px] py-5 px-10  rounded-full block ml-auto font-semibold"
              >
                Далее
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};
