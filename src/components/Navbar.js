import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoMdAdd } from "react-icons/io";
import { BiTaskX, BiTask } from "react-icons/bi";
import { BsListTask } from "react-icons/bs";
import "./styles.css";

export default function Navbar({ filterData, addTask }) {
  const [open, setOpen] = useState(false);

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [priority, setPriority] = useState("");

  const closeForm = () => {
    setOpen((prev) => !prev);
  };
  

  const createTaskDetails = (event) => {
    event.preventDefault();
    let id = Math.ceil(Math.random() * 100000000);
    let task = {
      id,
      title,
      desc,
      status: "pending",
      priority,
    };
    addTask(task)
    closeForm()
  };
  return (
    <>
      <div className="navWrapper">
        <div className="navContent">
          <div className="create" onClick={closeForm}>
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
            <span onClick={(e) => {e.preventDefault() 
              filterData("pending")}}>
              <IconContext.Provider value={{ color: "white", size: "30px" }}>
                <BiTaskX />
              </IconContext.Provider>
              <span className="iconName">Pending</span>
            </span>
            <span onClick={(e) =>
             {
              e.preventDefault() 
              filterData("done")}
              
              }>
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
      <div className="createForm">
        {open && (
          <form>
            <label for="title">Enter title</label>
            <br></br>
            <input
              type="text"
              name="title"
              id="title"
              onChange={(event) => setTitle(event.target.value)}
            />
            <br></br>
            <br></br>

            <label for="desc">Enter task description</label>
            <br></br>
            <input
              type="textarea"
              id="desc"
              onChange={(event) => setDesc(event.target.value)}
            />
            <br></br>
            <br></br>

            <p>Select priority level</p>
            <input type="radio" id="high" name="priority" value= 'high'onChange={(event)=> setPriority(event.target.value)} />
            <label for="high">High priority</label>
            <br></br>
            <br></br>

            <input type="radio" id="medium" name="priority" value= 'medium'onChange={(event)=> setPriority(event.target.value)} />
            <label for="medium">Medium priority</label>
            <br></br>
            <br></br>

            <input type="radio" id="low" name="priority" value='low' onChange={(event)=> setPriority(event.target.value)}/>
            <label for="low">Low priority</label>

            <div className="formBtns">
              <button onClick={closeForm}>Cancel</button>
              <button onClick={createTaskDetails}>Save</button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
