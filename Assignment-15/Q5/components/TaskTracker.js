import React, { useState } from "react";
import "./TaskTracker.css";

const TaskTracker = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() === "") return;

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const completedTasksCount = tasks.filter((task) => task.completed).length;
  const pendingTasksCount = tasks.length - completedTasksCount;

  return (
    <div className="task-tracker">
      <h1>Task Tracker</h1>

      <div className="task-input">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div className="task-stats">
        <span>Total Tasks: {tasks.length}</span>
        <span>Completed: {completedTasksCount}</span>
        <span>Pending: {pendingTasksCount}</span>
      </div>

      <ul className="task-list">
        {tasks.map((task) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            <span
              onClick={() => toggleTaskCompletion(task.id)}
              className="task-text"
            >
              {task.text}
            </span>
            <button onClick={() => deleteTask(task.id)} className="delete-btn">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskTracker;
