import React from "react";
import Item_comp from "./item_comp";
// import React, { useState } from 'react'

export default function List({ list, setList }) {
  let sortTask = list.slice().sort((a,b) => (Number(a.done) - Number(b.done)) )
  return (
    <div className="list-block">
      {sortTask.map((item) => (
        <Item_comp key={item.name} item={item} list={list} setList={setList} />
      ))}
    </div>
  );
}
