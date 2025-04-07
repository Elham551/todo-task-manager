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
        <div className="flex items-center gap-3">
            <input
                type="checkbox"
                checked={item.done}
                onChange={handleStatus}
                className="w-5 h-5 rounded accent-indigo-500"
            />
            <span className={`text-lg ${item.done ? "line-through text-gray-400" : "text-gray-700"}`}>
                {item.text}
            </span>
        </div>
    </>)
};