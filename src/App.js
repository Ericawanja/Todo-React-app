import React from 'react'
import './App.css';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main';

function App() {
  return (
    <div className='appContainer'>
      <Header/>
      <div className='taskGrid'>
        <Navbar/>
        <Main/>
      </div>
    </div>
  )
}

export default App