import { TodoItem } from "../components/TodoItem"

type TodoListProps = {
  todos: any[];
};
export const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul className="todoList">
      {todos.map((item, i) => (
        <li key={i}>
          <TodoItem item={item}></TodoItem>
        </li>
      ))}
    </ul>
  );
};
