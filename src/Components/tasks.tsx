import React from "react";
import "../App.css";

function Tasks() {
    return (
    <div className="tasks">
        <h1>Tasks</h1>
        <div className="task-card">
            <div className="task-card-check"></div>
            <p>Task #1</p>
        </div>
        <div className="task-card">
            <div className="task-card-check"></div>
            <p>Task #2</p>
        </div>
        <div className="task-card">
            <div className="task-card-check"></div>
            <p>Task #3</p>
        </div>
    </div>
    )
}

export default Tasks;