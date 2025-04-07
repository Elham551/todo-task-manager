import React, { useState } from "react";

import { TodoList } from "./components/TodoList";

import "./styles.scss";

export default function App() {
  const [todos] = useState([
    { id: 1, text: "Buy milk", done: true },
    { id: 2, text: "Buy bread", done: false },
  ]);

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList todos={todos} />
    </div>
  );
}
