import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoMdAdd } from "react-icons/io";
import { BiTaskX, BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import "./styles.css";

export default function Navbar({
  filterData,
  closeForm,
  openStatus,
  formDetails,
  handleInputChange,
  handleEditOrCreateTask
}) {
  
  return (
    <>
      <div className="navWrapper">
        <div className="navContent">
          <div className="create" onClick={() => closeForm()}>
            <IconContext.Provider value={{ color: "white", size: "34px" }}>
              <IoMdAdd />
            </IconContext.Provider>
            <span className="iconName">Create</span>
          </div>
          <div className="menu">
            <span onClick={() => filterData("all")}>
              <IconContext.Provider value={{ color: "white", size: "30px" }}>
                <BsListTask />
              </IconContext.Provider>
              <span className="iconName">All</span>
            </span>
            <span
              onClick={(e) => {
                e.preventDefault();
                filterData("pending");
              }}
            >
              <IconContext.Provider value={{ color: "white", size: "30px" }}>
                <BiTaskX />
              </IconContext.Provider>
              <span className="iconName">Pending</span>
            </span>
            <span
              onClick={(e) => {
                e.preventDefault();
                filterData("done");
              }}
            >
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
      {openStatus && (
        <div className="modal-container">
          <form className="form-modal">
            <label htmlFor="title">Enter title</label>
            <br></br>
            <input
              type="text"
              name="title"
              id="title"
              value={formDetails.title}
              onChange={handleInputChange}
            />
            <br></br>
            <br></br>

            <label htmlFor="desc">Enter task description</label>
            <br></br>
            <textarea
              id="desc"
              name="desc"
              rows={3}
              value={formDetails.desc}
              onChange={handleInputChange}
            ></textarea>
            <br></br>
            <br></br>

            <p>Select priority level</p>
            <input
              type="checkbox"
              id="high"
              value="high"
              checked={formDetails.priority === "high"}
              name="priority"
              onChange={handleInputChange}
            />
            <label htmlFor="high">High priority</label>
            <br></br>
            <br></br>

            <input
              type="checkbox"
              id="medium"
              value="medium"
              checked={formDetails.priority === "medium"}
              name="priority"
              onChange={handleInputChange}
            />
            <label htmlFor="medium">Medium priority</label>
            <br></br>
            <br></br>

            <label htmlFor="low">
              <input
                type="checkbox"
                id="low"
                value="low"
                checked={formDetails.priority === "low"}
                name="priority"
                onChange={handleInputChange}
              />
              Low priority
            </label>

            <div className="formBtns">
              <button type="button" onClick={closeForm}>Cancel</button>
              <button onClick={handleEditOrCreateTask}>Save</button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
