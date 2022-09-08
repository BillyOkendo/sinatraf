import {  Routes, Route } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Working from './components/Working';
import { useState,useEffect } from "react";
// import Reviews from "./components/Reviews";

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


  
  return (
    <div className="app">
         <Navbar />
      <Routes>
        <Route path="/" element={<Home  />} />
         <Route path="/working" element={<Working updateAttendants={updateAttendants} setAttendants={setAttendants} attendants={attendants}/>} />
         {/* <Route path="/reviews" element={<Reviews setProducts={setProducts} products={products} />} /> */}
      </Routes>
      
     
    </div>
  );
}

export default App;
