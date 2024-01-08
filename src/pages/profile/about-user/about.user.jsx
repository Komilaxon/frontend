import React from "react";
import { UserInfo } from "./info/user.info";
import { UserInputInfo } from "./input-info/input.info";
import { UserJob } from "./job/user.job";
import { UserImg } from "./user-img/user.img";

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

          <div>
            <button type="submit" className="">
              Далее
            </button>
          </div>
          
        </div>
        <UserImg />
      </section>
    </main>
  );
};
