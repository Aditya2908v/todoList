import React, { useState } from "react";
import "./styles.css";
import Task from "./Task";
const App = () => {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodoList((prevTodoList) =>
      prevTodoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        }
        return task;
      })
    );
  };

  return (
    <>
      <h1 className="main-heading">Todo List</h1>
      <div className="App">
        <div>
          <div className="addTask">
            <input
              placeholder="add task..."
              className="inputBox"
              onChange={handleChange}
            />
            <button className="add-btn" onClick={addTask}>
              Add Task
            </button>
          </div>
          <div className="list">
            {todoList.map((task) => {
              return (
                <Task
                  taskName={task.taskName}
                  id={task.id}
                  deleteTask={deleteTask}
                  completeTask={completeTask}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
