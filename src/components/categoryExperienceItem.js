import React from "react";
import "./about.css";
function CategoryExperienceItem({
  category,
  categoryKey,
  index,
  CategoryHiddenIndexState
}) {
  const spliteDate = (date) => {
    const year = date.split("/")[2];
    return year;
  };
  return (
    <>
      {console.log("ex", category)}
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
