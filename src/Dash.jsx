import React, { useState } from "react";
import './Dash.css'

function Dash() {
  let [userinp, setUserinp] = useState("");
  let [todos, settodo] = useState([]);

  function addtodo(e) {
    e.preventDefault();
    setUserinp(userinp);
    todos.push(userinp);
    setUserinp("");
  }
  
  
  
  
  
  
  
  
  return (
    <>
      <h1>Todo App</h1>
      <form className="form">
        <input
        className="title input"
          type="text"
          value={userinp}
          onChange={(e) => setUserinp(e.target.value)}
        />
        <button className="add-btn" onClick={addtodo}>click</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li className="todo-item">{todo} <span><button>delete</button><button>edit</button></span></li>
        ))}
      </ul>
    </>
  );
}

export default Dash;
