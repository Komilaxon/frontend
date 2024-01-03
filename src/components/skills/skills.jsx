import React from "react";

const skills = [
  "Дизайн сайтов",
  "Дизайн логотипа",
  "Арт и иллюстрации",
  "Флаера и брошюры",
  "Дизайн визиток",
  "Баннеры и стенды",
  "Дизайн презентации",
];

export const Skills = () => {
  return (
    <React.Fragment>
      {skills.map((item, i) => (
        <li
          key={i}
          className="text-center rounded-full border border-[#f2f0fe] p-2"
        >
          <p className="text-sm text-[#222] font-normal">{item}</p>
        </li>
      ))}
    </React.Fragment>
  );
};
