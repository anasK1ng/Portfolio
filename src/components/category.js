import React ,{useState} from "react";

import CategoryExperienceItem from "./categoryExperienceItem.js";
import CategorySkillItem from "./categorySkillItem.js";
import CategoryEducationItem from "./categoryEducationItem.js";
function Category({ categoryKey, data, categoryHiddenIndexState ,checkedCategory}) {
 const [categoryHidden , setCategoryHidden] = useState( ()=>{
   return document.querySelectorAll('ul.hide')
 })
  return (
    <ul className={"about__cattegory__" + categoryKey}>
      {
      
      data.map((item, index) => {
        return (
          <>
          {console.log("ppp",categoryKey)}
            {categoryKey === "skill" ? (
              <div className={` ${checkedCategory != categoryKey? "hide":"display"}`}>
                <CategorySkillItem categoryKey={categoryKey} category={item} />
              </div>
            ) : categoryKey === "experience" ? (
              <>
                
                <ul className={`about__category__experience ${checkedCategory != categoryKey? "hide":"display"}`} >
                  <CategoryExperienceItem
                     hide={ checkedCategory === categoryKey? true :false} 
                    categoryKey={categoryKey}
                    category={item}
                  />
                </ul>
              </>
            ) : (
              <ul className={`about__category__education ${checkedCategory != categoryKey? "hide":"display"}`}>
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
