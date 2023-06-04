import React from "react";
import "./header.css";
function Header() {
  return (
    <section className="header container">
      <div className="header__data section">
        <h1>
          I<span className="apostrophe">'</span> m{" "}
          <span className="name">
            Anas<i class="fa-solid fa-crown"></i>
          </span>
        </h1>
        <span className="title">Junior Full Stack Web Developer</span>
        <div className="header__buttons">
          <a href="anas.com" className="header__cv btn">
            my CV<i class="fa-solid fa-file-lines"></i>
          </a>
          <a href="facebook.com" className="header__contact__link btn">
            Contact me<i class="fa-solid fa-light fa-envelope-open"></i>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Header;
