import React from "react";
import "./styles.css";
const Task = (task) => {
  return (
    <div
      className="task"
      style={{
        backgroundColor: task.completed ? "blue" : "white",
      }}
    >
      <h3>{task.taskName}</h3>
      <button
        className="completed-btn"
        onClick={() => task.completeTask(task.id)}
      >
        completed
      </button>
      <button className="del-btn" onClick={() => task.deleteTask(task.id)}>
        delete
      </button>
    </div>
  );
};

export default Task;
