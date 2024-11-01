import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
// import React, { useState } from 'react'

export default function Form({ list, setList }) {
  const [inp, setInp] = useState({name:"", done:false});

  function listAction(e) {
    e.preventDefault();
    setList([...list, inp]);
    setInp({name:"", done:false});
  }
  return (
    <div>
      <form onSubmit={listAction}>
        <div className="inp-block">
         <input placeholder="Add Items"
          onChange={(e) => setInp({name:e.target.value, done:false})}
          value={inp.name}
          type="text"
        />
        <button><FaPlus/></button>           
        </div>

      </form>
    </div>
  );
}
