import { TodoItem } from "../components/TodoItem"

type TodoListProps = {
  todos: any[];
  onUpdate: (items: any) => void
};
export const TodoList = ({ todos, onUpdate }: TodoListProps) => {
  const handleUpdate = (item: any) => {
    onUpdate({ ...item })
  }
  return (
    <ul className="space-y-2">
      {todos.map((item) => (
        <li key={item.id} className="flex items-center justify-between bg-gray-100 p-3 rounded">
          <TodoItem item={item} onUpdate={handleUpdate} />
        </li>
      ))}
    </ul>
  );
};
