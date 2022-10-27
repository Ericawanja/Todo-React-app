import { IconContext } from "react-icons";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import todo_data from "./data";
import { useEffect, useState } from "react";
function Main({ list, setList }) {
  const checkboxChange = (id) => {
    let items = list.map((item) => {
      if (item.id === id) {
        item.status = item.status === "pending" ? "done" : "pending";
      }
      return item;
    });
    setList(items);
  };
  const handleDelete = (id) => {
    const items = list.filter((list_item) => list_item.id != id);
    setList(items);
  };
  return (
    <>
      <div className="mainWrapper">
        {list.map((item, index) => {
          const { id, title, desc, status, priority } = item;

          return (
            <div className={`task ${priority}`} key={id}>
              <div className="side">
                <span className="input">
                  <input
                    type="checkbox"
                    name="state"
                    className="checkbox"
                    checked={status === "pending" ? false : true}
                    onChange={() => checkboxChange(id)}
                  />
                </span>
              </div>
              <div className="taskDetails">
                <span className="title">{title}</span>
                <span className="desc">{desc}</span>
              </div>
              <div className="edit_delete_icons">
                <span className="edit">
                  <IconContext.Provider
                    value={{ color: "#f6f8fb", size: "30px" }}
                  >
                    <BiEditAlt />
                  </IconContext.Provider>
                </span>
                <span className="delete" onClick={() => handleDelete(id)}>
                  <IconContext.Provider
                    value={{ color: "#f6f8fb", size: "30px" }}
                  >
                    <RiDeleteBin6Fill />
                  </IconContext.Provider>
                </span>
              </div>
            </div>
          );
        })}
      </div>
      
    </>
  );
}

export default Main;
