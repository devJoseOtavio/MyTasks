import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [message, setMessage] = useState("Hello World");
  return (
  
    <div>
      <div className="container">{message}</div>
      <button onClick={() => setMessage("Hello")}>
          Mudar msg
      </button>
    </div>
  );
};

export default App 