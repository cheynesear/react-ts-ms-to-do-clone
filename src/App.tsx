import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Components
import NavBar from "./Components/NavBar";
import MyDay from "./Components/MyDay";
import Planned from "./Components/Planned";
import All from "./Components/All";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <div className="App"> 
      <div><NavBar /></div>
      <BrowserRouter>
        <Routes>
          <Route index element={<MyDay />}></Route>
          <Route path="planned" element={<Planned />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
