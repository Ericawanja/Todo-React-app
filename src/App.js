import React, {useState}from 'react'
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main';
import todo_data from './components/data';


function App() {
  const data = Array.from(todo_data)
  const [list, setList] = useState(data);
  const filterData = (status)=>{
    const filtered_data = todo_data.filter(item=> status === 'all'? true:item.status === status)
    setList(filtered_data)
  }
  const search= (value)=>{
    const task = todo_data.filter(item=> item.title.toUpperCase().includes(value.toUpperCase()) ? true :false)
    setList(task)
  }

  return (
    <div className='appContainer'>
      <Header search= {search}/>
      <div className='taskGrid'>
        <Navbar filterData ={filterData}/>
        <Main list = {list} setList= {setList}/>
      </div>
    </div>
  )
}

export default App