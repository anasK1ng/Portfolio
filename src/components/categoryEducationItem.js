import React from "react";
import "./about.css";
import { spliteDate } from "../services/formatDate.js";
function CategoryEducationItem({
  category,
  categoryKey,
  index,
  CategoryHiddenIndexState,
  hide
}) {
  return (
    <>
      <li key={index} className={`about__education__item`}>
        <span className="about__education__date">
          {spliteDate(category.startDate)}-{spliteDate(category.finishDate)}
        </span>
        <span className="about__experience__name">
          {category.formation} - {category.establishment}
        </span>
      </li>
    </>
  );
}

export default CategoryEducationItem;
