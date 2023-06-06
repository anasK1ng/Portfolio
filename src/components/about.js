import React, { useEffect, useRef, useState } from "react";
import { spliteDateToJson } from "../services/formatDate.js";
import "./about.css";
import Category from "./category";
// import CategoryItem from "./categoryItem.js";
import { User } from "./user";
function About() {
  // const [keyState, setKeyState] = useState(null);
  const [checkedCategory, setCheckedCategory] = useState(() => {
    return document.querySelectorAll(".about__nav__item.checked");
  });

  const [hideenCategory, setHiddenCategory] = useState(() => {});
  const [aboutNavItemActive, setAboutNavItemActive] = useState(2);
  const [categoryHiddenIndex, setCategoryHiddenIndex] = useState([0, 1]);
  const aboutNavItemChecked = useRef([]);
  const aboutNavItem = useRef([]);
  useEffect(() => {
    const checkedElements = document.querySelectorAll(
      ".about__nav__item.checked"
    );
    aboutNavItemChecked.current = [...checkedElements];
  }, []);
  useEffect(() => {});

  // const navAboutExperience = useRef();
  // const handleKeyState = (obj) => {
  //   const key = Object.keys(obj)[0];
  //   setkeyState(key);
  // };
  const removeCheckedClass = (e) => {
    aboutNavItemChecked.current.forEach((element) =>
      element.classList.remove("checked")
    );
  };
  const switchCheck = (key) => {
    setCheckedCategory(key);
  };
  const switchNav = (e) => {
    removeCheckedClass(e);
    e.target.classList.add("checked");
  };

  const calculateAge = () => {
    var { day, month, year } = spliteDateToJson(User.dateOfBirth);
    var birthdate = new Date(year, month, day);
    var today = new Date();
    var difference = today.getTime() - birthdate.getTime();
    var age = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    return age;
  };

  return (
    <section className="about__section section">
      <article className="about__container container">
        <div className="about__figure">
          <div className="about__figure__item first__figure"></div>
          <span className="about__figure__item second__figure"></span>
          <span className="about__figure__item third__figure"></span>
        </div>
        <div className="about__data">
          <h1 className="about__title">About me</h1>
          <p className="about__para">
            I m {User.familyName} {User.name} , i m {calculateAge()} junior full
            stak web developer from {User.country}
          </p>

          <div ref={aboutNavItem} className="about__nav">
            {Object.keys(User.personal).map((key, index) => {
              return (
                // console.log();
                <span
                  key={key + "" + index}
                  ref={(element) => (aboutNavItem.current[index] = element)}
                  onClick={() => {
                    switchCheck(key);
                  }}
                  className={`about__nav__item btn ${
                    index === aboutNavItemActive ? "checked" : ""
                  }`}
                >
                  <i className={User.personal[key].icon}></i>
                  {key}
                </span>
              );
            })}
          </div>
          <ul className="about__category">
            {
              Object.keys(User.personal).map((categoryKey, index) => {
                return (
                  <>
                    {console.log("the key " + categoryKey)}
                    {/* {console.log(Array.from(User.personal[key].data))} */}
                    <Category
                      categoryKey={categoryKey}
                      data={Array.from(User.personal[categoryKey].data)}
                      categoryHiddenIndexState={categoryHiddenIndex}
                      checkedCategory={checkedCategory}
                    />
                  </>
                );
              })
              //   User.personal.skill.data.map((skill, index) => {
              //   return (
              //     <>
              //       <span className="about__category__name">{skill.name}</span>
              //       <ul className="about__category__language">
              //         <CategoryItem
              //           categoryHiddenIndexState={categoryHiddenIndex}
              //           skill={skill.language}
              //           index={index}
              //         />
              //       </ul>
              //     </>
              //   );
              // })
            }
          </ul>
        </div>
      </article>
    </section>
  );
}

export default About;
