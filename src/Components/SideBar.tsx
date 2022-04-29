import React from 'react';

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

function SideBar() {
    return (
      <div className="side-bar">
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
          <div className = "search-bar">
            <form action="">
              <FontAwesomeIcon icon={faSearch} />
              <input type="search" placeholder="Search"/>
            </form>
          </div>
          {/* container 3: search bar */}
          <div className="container">
            {/* ACTION: get colour of icons working */}
            <ul>
                {/* Regular space: &nbsp;
                Two spaces gap: &ensp;
                Four spaces gap: &emsp; */}
              <li>
                <FontAwesomeIcon icon={faSun} /> &ensp; My Day
              </li>
              <li>
                <FontAwesomeIcon icon={faCalendar} /> &ensp; Planned
              </li>
              <li>
                <FontAwesomeIcon icon={faInfinity} /> &nbsp; All
              </li>
              <li>
                <FontAwesomeIcon icon={faFlag} /> &ensp; Flagged Email
              </li>
              <li>
                <FontAwesomeIcon icon={faHouse} /> &nbsp; Tasks
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

          <div className="new-list">
        <FontAwesomeIcon icon={faPlus} /> New List
        </div>
        </div>

    );
  };

export default SideBar;