import "./styles.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import TaskList from "./components/TaskList/TaskList.js";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <TaskList title="Clique para aumentar" />
      </div>
    </div>
  );
}
