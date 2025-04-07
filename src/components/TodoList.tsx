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
    <ul className="todoList">
      {todos.map((item, i) => (
        <li key={i}>
          <TodoItem
            item={item}
            onUpdate={handleUpdate} />
        </li>
      ))}
    </ul>
  );
};
