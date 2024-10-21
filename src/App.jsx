import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";

import "./App.css";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const { data } = await axios.get(
        "https://jsonplaceholder.cypress.io/todos?_limit=10"
      );
      setTasks(data)
    };

    fetchTasks();
  }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if (task.id == taskId) return { ... task, completed: !task.completed } 

      return task;
    });

    setTasks(newTasks)
  }

  const handleTaskAdditional = (taskTitle) => {
    const newTask = [ ...tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]
    
    setTasks(newTask)
  }

  const handleTaskDeletion = (taskId) => {
    const newTasks = tasks.filter( task => task.id != taskId)
    setTasks(newTasks)
  }

  return (
    <Router>
      <div className="container">
        <Header />
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <AddTask handleTaskAdditional={handleTaskAdditional} />
                <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
              </>
            } 
          />
          <Route 
            path="/:taskTitle" 
            Component={
              TaskDetails
            } 
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App 