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
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg p-6">
      <h1 className="text-2xl font-semibold text-gray-800 mb-4 text-center">My Todo App</h1>
      <TodoList todos={todos} onUpdate={updateList} />
      <AddItem onAdd={AddItemToList} />
    </div>
  );
}
