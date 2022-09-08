import {  Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Working from './components/Working';
import { useState,useEffect } from "react";
import AddingAttendant from "./components/AddingAttendant";

function App() {
  const [attendants, setAttendants] = useState([]);

  function updateAttendants(attendant) {
    setAttendants([...attendants, attendant]);
  }

    
  useEffect(() => {
    fetch("http://localhost:9292/attendants")
      .then((response) => response.json())
      .then((attendants) => setAttendants(attendants));
  }, []);


  function upDateAttendants(attendant) {
    setAttendants([...attendants, attendant]);
  }

  return (
    <div className="app">
         <Navbar />
      <Routes>
        <Route path="/" element={<Home  />} />
         <Route path="/working" element={<Working updateAttendants={updateAttendants} setAttendants={setAttendants} attendants={attendants}/>} />
         <Route path="/new" element={<AddingAttendant setAttendants={setAttendants} attendants={attendants} updateAttendants={upDateAttendants}/>} />
      </Routes>
      
     
    </div>
  );
}

export default App;
