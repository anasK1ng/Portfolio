import React, { useState } from "react";

import CategoryExperienceItem from "./categoryExperienceItem.js";
import CategorySkillItem from "./categorySkillItem.js";
import CategoryEducationItem from "./categoryEducationItem.js";
function Category({
  categoryKey,
  data,
  categoryHiddenIndexState,
  checkedCategory,
}) {
  const [categoryHidden, setCategoryHidden] = useState(() => {
    return document.querySelectorAll(".about__category__item.hide");
  });
  
  return (
    <ul className={"about__category__item  about__cattegory__" + categoryKey}>
      {data.map((item, index) => {
        return (
          <>
            {categoryKey === "skill" ? (
              <div
                className={`about__category__item ${
                  checkedCategory != categoryKey ? "hide" : "display"
                }`}
              >
                <CategorySkillItem categoryKey={categoryKey} category={item} />
              </div>
            ) : categoryKey === "experience" ? (
              <>
                <ul
                  className={`about__category__item about__category__experience ${
                    checkedCategory != categoryKey ? "hide" : "display"
                  }`}
                >
                  <CategoryExperienceItem
                    hide={checkedCategory === categoryKey ? true : false}
                    categoryKey={categoryKey}
                    category={item}
                  />
                </ul>
              </>
            ) : (
              <ul
                className={`about__category__item about__category__education ${
                  checkedCategory != categoryKey ? "hide" : "display"
                }`}
              >
                <CategoryEducationItem
                  categoryKey={categoryKey}
                  category={item}
                />
              </ul>
            )}
          </>
        );
      })}
    </ul>
  );
}
export default Category;
