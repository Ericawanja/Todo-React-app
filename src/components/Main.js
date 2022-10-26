import { IconContext } from "react-icons";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
function Main() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="mainWrapper">
      {list.map((item, index) => {
        return (
          <div className="task low" key={index}>
            <div className="side">
      
              <span className="input">
                <input type="checkbox" name="state" className="checkbox" />
              </span>
              
            </div>
            <div className="taskDetails">
              <span className="title">Title</span>
              <span className="desc">Description of the task</span>
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
