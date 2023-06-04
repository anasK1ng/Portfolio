import React from "react";
import CategoryExperienceItem from "./categoryExperienceItem.js";
import CategorySkillItem from "./categorySkillItem.js";
function Category({ categoryKey, data, categoryHiddenIndexState }) {
  return (
    <ul className={"about__cattegory__" + categoryKey}>
      {data.map((item, index) => {
        return (
          <>
            {categoryKey === "skill" ? (
              <>
                <CategorySkillItem categoryKey={categoryKey} category={item} />
              </>
            ) : categoryKey === "experience" ? (
              <>
                {console.log("item", item)}
                <span className="about__category__name">{item.name}</span>
                <ul className="about__category__experience">
                  <CategoryExperienceItem
                    categoryKey={categoryKey}
                    category={item}
                  />
                </ul>
              </>
            ) : (
              <div key={index}>education</div>
            )}
          </>
        );
      })}
    </ul>
  );
}
export default Category;
