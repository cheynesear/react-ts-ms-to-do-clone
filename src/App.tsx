import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "./App.css";

//Components
import MyDay from "./Components/MyDay";
import Planned from "./Components/Planned";
import All from "./Components/All";
import Tasks from "./Components/Tasks";
import FlaggedEmail from "./Components/FlaggedEmail";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCalendar,
  faInfinity,
  faFlag,
  faHouse,
  faList,
  faSearch,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="nav-bar">
          {/* SIDE BAR */}
          {/* container 1: header */}
          <div className="header container-column">
            <div className="acc-circle">CS</div>
            <div>
              <p>Cheyne Sear</p>
              <p className="subtext">cheynesear@gmail.com</p>
            </div>
          </div>
          {/* container 2: search bar */}
          <div className="search-bar">
            <form action="">
              <FontAwesomeIcon icon={faSearch} />
              <input type="search" placeholder="Search" />
            </form>
          </div>
          {/* container 3: search bar */}
          <div className="container">
            <ul>
              {/* Regular space: &nbsp;
                Two spaces gap: &ensp;
                Four spaces gap: &emsp; */}
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-bar-link-active" : "nav-bar-link"
                  }
                  to="/MyDay"
                >
                  <FontAwesomeIcon style={{ color: "#88949F" }} icon={faSun} />{" "}
                  &ensp; My Day
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-bar-link-active" : "nav-bar-link"
                  }
                  to="/Planned"
                >
                  <FontAwesomeIcon
                    style={{ color: "#8BD4CD" }}
                    icon={faCalendar}
                  />{" "}
                  &ensp; Planned
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-bar-link-active" : "nav-bar-link"
                  }
                  to="/All"
                >
                  <FontAwesomeIcon
                    style={{ color: "#FFE1BB" }}
                    icon={faInfinity}
                  />{" "}
                  &nbsp; All
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-bar-link-active" : "nav-bar-link"
                  }
                  to="/FlaggedEmail"
                >
                  <FontAwesomeIcon style={{ color: "#F5B5C2" }} icon={faFlag} />{" "}
                  &ensp; Flagged Email
                </NavLink>
              </li>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "nav-bar-link-active" : "nav-bar-link"
                  }
                  to="/Tasks"
                >
                  <FontAwesomeIcon
                    style={{ color: "#788CDE" }}
                    icon={faHouse}
                  />{" "}
                  &nbsp; Tasks
                </NavLink>
              </li>
            </ul>
          </div>
          {/* container 4: horizontal line */}
          <div className="container">
            <hr />
          </div>
          {/* container 5: task lists */}
          <div className="container">
            <ul>
              <li>
                <FontAwesomeIcon style={{ color: "#788CDE" }} icon={faList} />{" "}
                &nbsp; Untiled List
              </li>
            </ul>
          </div>
        </div>

        <div className="new-list">
          <FontAwesomeIcon icon={faPlus} /> New List
        </div>

        <div className="main-content">
          <Routes>
            <Route index element={<MyDay />}></Route>
            <Route path="myday" element={<MyDay />}></Route>
            <Route path="planned" element={<Planned />}></Route>
            <Route path="all" element={<All />}></Route>
            <Route path="flaggedemail" element={<FlaggedEmail />}></Route>
            <Route path="tasks" element={<Tasks />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
