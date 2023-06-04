import React from "react";
import "./about.css";
function CategorySkillItem({
  category,
  categoryKey,
  index,
  CategoryHiddenIndexState
}) {
  return (
    <>
      <span className="about__category__name">{category.name}</span>
      <ul className="about__category__language">
        {category.language.map((language) => {
          return (
            <li key={index + language} className="about__language__item">
              <img
                className="about__language__img"
                key={language.name}
                src={language.src}
                alt={language.name + "logo"}
              />
              <span className="about__language__tooltip">{language.name}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CategorySkillItem;
