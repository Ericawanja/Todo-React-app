import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import todo_data from "./components/data";

function App() {
  // const data = Array.from(todo_data)
  const [list, setList] = useState([]);
  const [filtered, setFiltered] = useState();
  const [filtering, setFiltering] = useState(false);

  const filterData = (status) => {
    setFiltering(true);
    if (status === "all") {
      setFiltered(list.filter((item) => true));
    }
    if (status === "pending") {
      setFiltered(list.filter((item) => item.status === status));
    }
    if (status === "done") {
      setFiltered(list.filter((item) => item.status === status));
    }
  };
  const search = (value) => {
    const task = list.filter((item) =>
      item.title.toUpperCase().includes(value.toUpperCase()) ? true : false
    );
    setList(task);
  };
  const addData = (task) => {
    //console.log(task);
    setList([...list, task]);
  };
  console.log(list);

  return (
    <div className="appContainer">
      <Header search={search} />
      <div className="taskGrid">
        <Navbar filterData={filterData} addTask={addData} />
        <Main list={filtering ? filtered : list} setList={setList} />
      </div>
    </div>
  );
}

export default App;
