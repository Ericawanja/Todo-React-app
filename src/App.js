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
    editing: false,
  });

  const [openState, setOpen] = useState(false);
  const [formDetails, setFormDetails] = useState({
    title: "",
    desc: "",
    priority: "",
  });

  const closeForm = () => {
    if (openState) {
      setState((prev) => ({ ...prev, editing: false }));
      setFormDetails({
        title: "",
        desc: "",
        priority: "",
      });
    }
    setOpen((prev) => !prev);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDetails((prev) => ({ ...prev, [name]: value }));
  };

  const filterData = (status) => setState((prev) => ({ ...prev, status }));

  const handleSearch = (e) =>
    setState((prev) => ({ ...prev, search: e.target.value }));

  const handleEditOrCreateTask = (e) => {
    e.preventDefault();

    if (state.editing) {
      const newData = state.data.map((item) => {
        if (item.id === formDetails.id) return formDetails;
        return item;
      });
      const newFilteredData = state.filtered_data.map((item) => {
        if (item.id === formDetails.id) return formDetails;
        return item;
      });

      setState((prev) => ({
        ...prev,
        data: newData,
        filtered_data: newFilteredData,
      }));
      closeForm()
    } else {
      console.log("CREATING");
      let id = Math.ceil(Math.random() * 100000000);
      let task = {
        id,
        ...formDetails,
        status: "pending",
      };

      setState((prev) => ({
        ...prev,
        data: [task, ...prev.data],
        filtered_data: [task, ...prev.filtered_data],
      }));
      closeForm()
    }
  };

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
    // setFormDetails({title:'', desc:'', priority:''})
  }, []);

  console.log(formDetails);

  return (
    <div className="appContainer">
      <Header handleSearch={handleSearch} search={state.search} />
      <div className="taskGrid">
        <Navbar
          filterData={filterData}
          handleEditOrCreateTask={handleEditOrCreateTask}
          closeForm={closeForm}
          openStatus={openState}
          formDetails={formDetails}
          handleInputChange={handleInputChange}
        />

        <Main
          list={state.filtered_data}
          setState={setState}
          closeForm={closeForm}
          setFormDetails={setFormDetails}
        />
      </div>
    </div>
  );
};

export default App;
