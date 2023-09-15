import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  // State to manage tasks
  const [tasks, setTasks] = useState(TASKS);

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask} />
    </div>
  );

  // Function to add a new task
  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Function to delete a task by ID
  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }
}

export default App;
