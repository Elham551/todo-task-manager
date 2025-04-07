import { Todo } from "../types/Todo";

type TodoItemProperties = {
    onUpdate: (item: Todo) => void;
    item: Todo
}
export const TodoItem = ({ item, onUpdate }: TodoItemProperties) => {


    const handleStatus = () => {
        onUpdate({ ...item, done: !item.done })
    }
    return (<>
        <span>{item.text}</span>
        <input type="checkbox"
            checked={item.done}
            onChange={handleStatus} />
    </>)
};