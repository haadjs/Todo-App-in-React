import React, { useState } from "react";
import "./Dash.css";

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
        <button className="add-btn" onClick={addtodo}>
          click
        </button>
      </form>
      <div>
        {todos.length > 0 ? (
          todos.map((item, index) => {
            return (
              <>
                <ul className="todo-list">
                  <li className="todo-item">
                    {item}
                    <span>
                      <button>delete</button>
                      <button>edit</button>
                    </span>
                  </li>
                </ul>
              </>
            );
          })
        ) : (
          <h1 style={{ marginTop: "40px" }}>Nothing To See...</h1>
        )}
      </div>
    </>
  );
}

export default Dash;
