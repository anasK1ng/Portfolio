import React from "react";
import "./about.css";
import { spliteDate } from "../services/formatDate.js";
function CategoryExperienceItem({
  category,
  categoryKey,
  index,
  CategoryHiddenIndexState
}) {
  return (
    <>
          <li key={index} className="about__experience__item">
        <span className="about__experience__date">
          {spliteDate(category.startDate)} - {spliteDate(category.finishDate)}
        </span>
        <span className="about__experience__company">
          {category.speciality} - {category.companyName}
        </span>
      </li>
    </>
  );
}

export default CategoryExperienceItem;
