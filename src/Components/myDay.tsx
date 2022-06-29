import React from "react";
import "../App.css";

import backgroundImage from '../Static/Images/background-MyDay.png';

// potentially use toLocaleString in future
const dayNames = [
  "Monday",
  "Tuesday",
  "Wednedsay",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function convertDate(day: number, date: number, month: number) {
  return `${dayNames[day - 1]}, ${date} ${monthNames[month]}`;
}

const date = new Date();
const dDay = date.getDay();
const dDate = date.getDate();
const dMonth = date.getMonth();

console.log(convertDate(dDay, dDate, dMonth));

function MyDay() {
  return (
      <div className="my-day">
        <h1>My Day</h1>
        <h2>{convertDate(dDay, dDate, dMonth)}</h2>
        <div className="add-a-task-bar">
            <form action="">
              {/* <FontAwesomeIcon icon={faSearch} /> */}
              <input type="search" placeholder="Search" />
            </form>
          </div>
      </div>
  );
}

export default MyDay;
