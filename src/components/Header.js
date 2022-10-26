import React from "react";
import "./styles.css";
import { FaSearch } from "react-icons/fa";
import { IconContext } from "react-icons";
function Header() {
  return (
    <div className="headerWrapper">
      <div className="profile">
        <img src="images/person.png" alt="profile" />
        <span>Get it done ERICA</span>
      </div>
      <div className="searchBar">
        <div>
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Search task"
          />
          <span className="icon">
            <IconContext.Provider value={{ color: "#16213E", size: "30px" }}>
              <FaSearch />
            </IconContext.Provider>
          </span>
        </div>
      </div>
    </div>
  );
}

export default Header;
