import React from "react";
import ReactDOM from "react-dom";
import "./App.css";

//Font Awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSun,
  faCalendar,
  faInfinity,
  faFlag,
  faHouse,
  faList,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      {/* Universal elements */}
      <div className="side-bar">
        {/* container 1: header */}
        <div className="header">
          <div className="acc-circle">CS</div>
          <section>
            <p>Cheyne Sear</p>
            <p>cheynesear@gmail.com</p>
          </section>
        </div>
        {/* container 2: search bar */}
        <div className="container">
          <input type="text" />
        </div>
        {/* container 3: search bar */}
        <div className="container">
          {/* ACTION: get colour of icons working */}
          <ul>
            <li>
              <FontAwesomeIcon icon={faSun} /> My Day
            </li>
            <li>
              <FontAwesomeIcon icon={faCalendar} /> Planned
            </li>
            <li>
              <FontAwesomeIcon icon={faInfinity} /> All
            </li>
            <li>
              <FontAwesomeIcon icon={faFlag} /> Flagged Email
            </li>
            <li>
              <FontAwesomeIcon icon={faHouse} /> Tasks
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
              <FontAwesomeIcon icon={faList} /> Untiled List
            </li>
          </ul>
        </div>
      </div>

      {/* My Day Page */}
    </div>
  );
}

export default App;
