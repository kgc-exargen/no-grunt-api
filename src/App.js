import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import MainContent from './components/MainContent/MainContent';
import { useState } from 'react';
import './App.css';

function App() {


  const [sidebarNames, setSidebarNames] = useState([]);

  const addNameToSidebar = (name) => {
    if (name.trim()) {
      setSidebarNames([...sidebarNames, name]);
    }
  };
  return (
    <div className="App">
      <Navbar />
      <div className="app-body">
      <Sidebar  names={sidebarNames}/>
        <MainContent addNameToSidebar={addNameToSidebar}/>
      </div>
    </div>
  );
}

export default App;
