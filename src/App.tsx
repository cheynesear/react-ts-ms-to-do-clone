import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Universal elements */}
      <div className="side-bar">
        {/* container 1: header */}
        <div className="container">
          <div className="acc-circle">CS</div>
          <section>
            <p>Cheyne Sear</p>
            <p>cheynesear@gmail.com</p>
          </section>
        </div>
        {/* container 2: search bar and tabs */}
        <div className="container">
          <input type="text" />
          <ul>
            <li><img src="" alt="icon"/>My Day</li>
            <li><img src="" alt="icon"/>Planned</li>
            <li><img src="" alt="icon"/>All</li>
            <li><img src="" alt="icon"/>Flagged Email</li>
            <li><img src="" alt="icon"/>Tasks</li>
          </ul>
        </div>
      </div>
      <div className="add-task"></div>
      {/* My Day Page */}
      
      
    </div>
  );
}

export default App;
