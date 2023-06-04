import { Component } from "react";
import "./navbar.css";
import { dataMenu } from "./dataMenu";
export class NavBar extends Component {
  render() {
    return (
      <nav className="navbar container">
        <div className="back"></div>
        <h1 className="logo">
          <i className="fa-solid fa-crown"></i>
        </h1>
        <ul className="links">
          {dataMenu.map((item, index) => {
            return (
              <li key={index} className="nav-links">
                <a href={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
