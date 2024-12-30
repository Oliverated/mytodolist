import React, { useState } from "react";
import "./App.css";
// import Item_comp from "./item_comp";
import Form from "./form";
import List from "./List";
// import { FaRegTrashAlt, FaTrashAlt } from "react-icons/fa";
// import { FaTrashCan } from "react-icons/fa6";

export default function App({ inp, setInp }) {
  const [list, setList] = useState([]);
  let completedTask = list.filter(i => i.done).length
  let task = list.length

  return (
    <main>
      <header className="header">
        <h3>
          {" "}
          Olive<u>Rated</u> List
        </h3>
      </header>

      <Form list={list}  setList={setList} />

      <List list={list} setList={setList}/>

      <footer>
        <div className="task">Task: <em>{task}</em> </div>      <div className="task">Task completed: <em>{completedTask}</em></div>
      </footer>
    </main>
  );
}
