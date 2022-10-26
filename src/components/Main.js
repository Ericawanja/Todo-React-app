import { IconContext } from "react-icons";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import todo_data from "./data";
import { useEffect, useState } from "react";
function Main() {
  const [list, setList]=  useState(todo_data)
  
  const checkboxChange = (index)=>{
    list[index].status = list[index].status === 'pending' ? 'done': 'pending'
    console.log(list[index].status)
    setList(list)
    console.log(list[index].status)

  }
  return (
    <div className="mainWrapper">
      {list.map((item, index) => {
        const {id,title, desc, status, priority} = item;

        return (
          <div className={`task ${priority}`}  key={id}>
            <div className="side">
      
              <span className="input">
                <input type="checkbox" name="state" className="checkbox" checked= {status === 'pending' ? false : true} onChange = {()=> checkboxChange(index) }/>
              </span>
              
            </div>
            <div className="taskDetails"> 
              <span className="title">{title}</span>
              <span className="desc">{desc}</span>
            </div>
            <div className="edit_delete_icons">
              <span className="edit">
                <IconContext.Provider value={{ color: "#f6f8fb", size: "30px" }}>
                  <BiEditAlt />
                </IconContext.Provider>
              </span>
              <span className="delete">
                <IconContext.Provider value={{ color: "#f6f8fb", size: "30px" }}>
                  <RiDeleteBin6Fill />
                </IconContext.Provider>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Main;
