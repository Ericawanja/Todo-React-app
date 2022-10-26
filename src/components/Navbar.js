import React from "react";
import { IconContext } from "react-icons";
import { IoMdAdd } from "react-icons/io";
import { BiTaskX, BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import "./styles.css";

export default function Navbar({filterData}) {
  return (
    <div className="navWrapper">
      <div className="navContent">
        <div className="create">
          <IconContext.Provider value={{ color: "white", size: "34px" }}>
            <IoMdAdd />
          </IconContext.Provider>
          <span className="iconName">Create</span>
        </div>
        <div className="menu">
          <span onClick= {()=>filterData('all')}>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <BsListTask />
            </IconContext.Provider>
            <span className="iconName">All</span>
          </span>
          <span onClick= {()=>filterData('pending')}>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <BiTaskX />
            </IconContext.Provider>
            <span className="iconName">Pending</span>
          </span>
          <span onClick= {()=>filterData('done')}>
            <IconContext.Provider value={{ color: "white", size: "30px" }}>
              <BiTask />
            </IconContext.Provider>
            <span className="iconName">Done</span>
          </span>

          <div className="priorityIndex">
            <div className="highIndex fill_name">
              <div className="highFill fill"></div>
              <div className="fill_name">High</div>
            </div>
            <div className="mediumIndex fill_name">
              <div className="mediumFill  fill"></div>
              <div className="fill_name">Medium</div>
            </div>
            <div className="lowIndex fill_name">
              <div className="lowFill fill"></div>
              <div className="fill_name">Low</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
