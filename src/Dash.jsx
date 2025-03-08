import React, { useState } from "react";
import "./Dash.css";

function Dash() {
  const [userinp, setUserinp] = useState("");
  const [todos, settodo] = useState([]);

  function addtodo(e) {
    e.preventDefault();
    if (userinp.trim() === "") return;
    settodo([...todos, userinp]);
    setUserinp("");
  }

  function delTodo(index) {
    todos.splice(index, 1);
    settodo([...todos]);
  }

  function editTodo(index) {
    let updatVal = prompt("enter a new value");
    if (!updatVal) {
      alert("enter a val");
      return;
    }

    todos[index] = updatVal;
    settodo([...todos]);
  }

  return (
    <>
      <h1>Todo App</h1>
      <form className="form" onSubmit={addtodo}>
        <input
          className="title input"
          type="text"
          value={userinp}
          onChange={(e) => setUserinp(e.target.value)}
        />
        <button className="add-btn" type="submit">
          Add Todo
        </button>
      </form>
      <div>
        {todos.length > 0 ? (
          <ul className="todo-list">
            {todos.map((item, index) => (
              <li className="todo-item" key={index}>
                {item}
                <span>
                  <button onClick={() => delTodo(index)}>Delete</button>
                  <button onClick={() => editTodo(index)}>Edit</button>
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <h1 style={{ marginTop: "40px" }}>Nothing To See...</h1>
        )}
      </div>
    </>
  );
}

export default Dash;
