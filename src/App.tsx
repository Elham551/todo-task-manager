import { useState } from "react";
import "./styles.scss";
import { TodoList } from "./components/TodoList";
import { AddItem } from "./components/AddItem";
import { Todo } from "./types/Todo";


import "./styles.scss";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: "Buy milk", done: true },
    { id: 2, text: "Buy bread", done: false },
  ]);

  const AddItemToList = (title: string) => {
    setTodos([...todos, { id: 3, text: title, done: false }])
  }

  const updateList = (item: Todo) => {
    const updated = todos.map((todo) => todo.id == item.id ? todo = item : todo)
    setTodos(updated);

  }

  return (
    <div className="todoListApp">
      <div className="forsta-logo" />
      <TodoList todos={todos} onUpdate={updateList} />
      <AddItem onAdd={AddItemToList} />
    </div>
  );
}
