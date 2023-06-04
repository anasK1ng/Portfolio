import React from "react";
import "./skills.css";
import { skillsData } from "./skillsData";
function Skills() {
  return (
    <section className="skills__section container section">
      <h1 className="skills__title">My Skills</h1>
      <article className="skills__container">
        {skillsData.map((item, index) => {
          return (
            <div key={index} className="skill__item btn">
              <img
                className="skill__item__img"
                src={item.src}
                alt="dev language"
              />
              <span className="skill__item__name">{item.name}</span>
            </div>
          );
        })}

        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-plain.svg" />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            fill="#38B2AC"
            d="M107.52 433.33L168.17 64h26.66l60.94 240.02L317.63 64h26.66l60.65 369.33h-29.5L308.81 158.51 251.5 433.33z"
          />
        </svg>
      </article>
    </section>
  );
}

export default Skills;
