import { Task } from "../types/Task";
import { useSelectedItem } from "../contexts/SelectedItemContext";

type TodoItemProperties = {
    onUpdate: (item: Task) => void;
    onDelete: (id: string) => any;
    item: Task
}
export const TodoItem = ({ item, onUpdate, onDelete }: TodoItemProperties) => {

    const { selectedItem, setSelectedItem } = useSelectedItem();
    const isSelected = selectedItem?.id === item.id;
    const handleStatus = () => {
        onUpdate({ ...item, done: !item.done })
    }
    return (<>
        <div
            className={`flex items-center justify-between group p-2 py-2 rounded transition w-full cursor-pointer ${isSelected ? "bg-indigo-100" : "hover:bg-indigo-100"
                }`}
            onClick={() => { selectedItem ? setSelectedItem(null) : setSelectedItem(item) }}
        >
            <div className="flex items-center gap-3">
                <input
                    type="checkbox"
                    checked={item.done}
                    onChange={handleStatus}
                    onClick={(e) => { e.stopPropagation() }}
                    className="w-5 h-5 rounded accent-indigo-500"
                />
                <span className={`text-lg ${item.done ? "line-through text-gray-400" : "text-gray-700"} select-none`}>
                    {item.text}
                </span>
            </div>

            <span
                className="text-red-500 text-sm cursor-pointer hidden group-hover:inline select-none"
                onClick={(e) => { e.stopPropagation(); onDelete(item.id) }}
            >
                Delete
            </span>
        </div>
    </>)
};