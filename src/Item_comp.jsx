import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";

export default function Item_comp({ item, list, setList }) {
  function forDel(item) {
    // console.log("just deleted this function", item )
    setList(list.filter((i) => i !== item));
    
  }

  setTimeout(5000, forDel)

  function forMarked(name) {

    setList(list.map((list) =>
      list.name === name ? { ...list, done: !list.done } : list
    ));

  }

  let marked = item.done ? "mark" : ""
  
  return (
    <div className="item-block">
      <p className="item">
        <li className="text-list" onClick={() => forMarked(item.name)}>
          <span  className={marked}>{item.name} </span>{" "}
        </li>
        <span className="del" onClick={() => forDel(item)}>
          <FaTrashCan />
        </span>
      </p>
    </div>
  );
}
