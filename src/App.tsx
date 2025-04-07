import { useEffect, useState } from "react";
import "./styles.scss";
import { TodoList } from "./components/TodoList";
import { AddItem } from "./components/AddItem";
import { Task } from "./types/Task";
import { TaskDetail } from "./components/TaskDetail";
import { useSelectedItem } from "./contexts/SelectedItemContext";

export default function App() {

  const initialTodos: Task[] = [
    { id: "c8088529-8382-4c25-bbee-e526af316a28", text: "Buy milk", done: true },
    { id: "0b24ced7-34ce-4c11-9912-b8acf8c9742f", text: "Buy bread", done: false },
  ];

  const [todos, setTodos] = useState<Task[]>(() => {
    const localData = localStorage.getItem("Todos");
    return localData ? JSON.parse(localData) : initialTodos;
  });

  const { selectedItem } = useSelectedItem();

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(todos));
  }, [todos]);

  const AddItemToList = (title: string) => {
    setTodos([...todos, { id: crypto.randomUUID(), text: title, done: false }])
  }

  const updateList = (item: Task) => {
    setTodos(prev => prev.map(todo => todo.id === item.id ? item : todo));

  }

  const handleDelete = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id));
  }

  return (
    <>
      <div className="max-w-xl w-full mx-auto p-5">
        <h1 className="text-3xl font-bold text-left mb-4"> Todo App</h1>
        <TodoList todos={todos} onUpdate={updateList} onDelete={(id) => { handleDelete(id) }} />
        <AddItem onAdd={AddItemToList} />
      </div>
      <TaskDetail
        key={selectedItem?.id}
        onDetailUpdated={updateList}
        show={selectedItem != null}
      />
    </>
  );
}
