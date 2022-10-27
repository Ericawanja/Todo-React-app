import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import todo_data from "./components/data";

const App = () => {
  const [state, setState] = useState({
    data: [],
    filtered_data: [],
    status: "",
    search: "",
  });

  const filterData = (status) => setState((prev) => ({ ...prev, status }));

  const handleSearch = (e) =>
    setState((prev) => ({ ...prev, search: e.target.value }));

  const addData = (task) =>{
    setState((prev) => ({ ...prev, data: [task, ...prev.data], filtered_data:[task, ...prev.filtered_data] }));
    
    console.log(state)
  }


  useEffect(() => {
    if (state.status !== "") {
      let data = state.data.filter((item) =>
        state.status === "all" ? true : item.status === state.status
      );
      setState((prev) => ({ ...prev, filtered_data: data }));
    }
  }, [state.status]);

  useEffect(() => {
    if (state.search !== "") {
      let data = state.data.filter(
        (item) =>
          item.title.toLowerCase().includes(state.search.toLowerCase()) ||
          item.desc.toLowerCase().includes(state.search.toLowerCase())
      );
      setState((prev) => ({ ...prev, filtered_data: data }));
    } else {
      setState((prev) => ({ ...prev, filtered_data: todo_data }));
    }
  }, [state.search]);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      data: todo_data,
      filtered_data: todo_data,
    }));
  }, []);

  return (
    <div className="appContainer">
      <Header handleSearch={handleSearch} search={state.search} />
      <div className="taskGrid">
        <Navbar filterData={filterData} addTask={addData} />

        <Main list={state.filtered_data} setState= {setState} />
      </div>
    </div>
  );
};

export default App;
