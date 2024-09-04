import React, { useState } from "react";

import "./App.css";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
    {
    id: '1',
    title: 'Estudando React',
    completed: false,
    },
    {
      id: '2',
      title: 'Ler livros',
      completed: true,
    }
  ]);
  return (
  
    <div>
      <div className="container">
        <Tasks tasks={tasks}/>
      </div>
    </div>
  );
};

export default App 