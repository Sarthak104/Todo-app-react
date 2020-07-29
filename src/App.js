import React from 'react';
import logo from './logo.svg';
import './App.css';
import  Todos from "./Todo.js";
import { Switch, Route, BrowserRouter as Router} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Todos/>
    </div>
  );
}

export default App;
