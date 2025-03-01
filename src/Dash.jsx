import React, { useState } from 'react';

function Dash() {
  let [userinp, setUserinp] = useState('');

  function addtodo () {
    setUserinp(userinp)
    console.log(userinp);
    setUserinp('')
    
  }
  return (
    <>
      <h1>Todo App</h1>
      <input type="text" value={userinp} onChange={(e)=> setUserinp(e.target.value)} />
      <button onClick={addtodo}>click</button>
    </>
  );
}

export default Dash;
