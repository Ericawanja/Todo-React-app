import { IconContext } from "react-icons";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiEditAlt } from "react-icons/bi";
import todo_data from "./data";
import { useEffect, useState } from "react";
import ErrorHandling from "./ErrorHandling";

function Main({
  list,
  setState,
  closeForm,
  setFormDetails,
  status,
  filterData,
  data
}) {

  const [done, setDone] =useState(false)
  //invoked on check to change item status (pending|| done)
  const checkboxChange = (id) => {
    
    let items = data.map((item) => {
      if (item.id === id) {
        item.status = item.status === "pending" ? "done" : "pending";
      }
      return item;
    });

    //set the state with new changes
    setState((prev) => ({ ...prev, data: Array.from(items), filtered_data: Array.from(items) }));

    //making it to dynamically remove items when on filters (populating data)
    if (status !== "" && status !== 'all') {
      let displayItems = items.filter((item) =>
         item.status === status
      );
      setState((prev) => ({ ...prev, filtered_data: displayItems }));
    }
  };
  const handleDelete = (id) => {
    
    const items = list.filter((list_item) => list_item.id != id);
   
    setState((prev) => ({ ...prev, data: items, filtered_data: items }));
  };

  const handleEdit = (id) => {
    const item = list.find((t) => t.id === id);
    if (item.status==='done') return setDone(true)

    setFormDetails(item);
    setState((prev) => ({ ...prev, editing: true }));

    closeForm();
  };

  return (
    <>
      {list.length === 0 ? (
        <ErrorHandling />
      ) : (
        <div>
          <div className="TaskHeading">
            {status === " " ? "All " : status} Tasks
          </div>
          <div className="mainWrapper">
            {list.map((item, index) => {
              const { id, title, desc, status, priority } = item;

              return (
                <div className={`task`} key={id}>
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
                    <span className="priority_detail">
                      Priority:{" "}
                      <span className={`${priority}`}>{priority}</span>
                    </span>
                  </div>

                  <div className="edit_delete_icons">
                    <span className="edit" onClick={() => handleEdit(id)}>
                        <IconContext.Provider
                        value={{ color: "#b7b9bb", size: "30px" }}
                      >
                        <BiEditAlt />
                      </IconContext.Provider> 
                    </span>
                    <span className="delete" onClick={() => handleDelete(id)}>
                      <IconContext.Provider
                        value={{ color: "#b7b9bb", size: "30px" }}
                      >
                        <RiDeleteBin6Fill />
                      </IconContext.Provider>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
      {done && <div className="alertCompleted form-modal">
        <span>You cannot edit completed task</span>
        <span className="closeBtn"><button onClick={()=>setDone(false)}>Close</button></span>
      </div>}
    </>
  );
}

export default Main;
