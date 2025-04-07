import { Task } from "../types/Task";
import closeIcon from "../assets/close.svg"
import { useEffect, useState } from "react";
import { useSelectedItem } from "../contexts/SelectedItemContext";

interface TaskDetailProps {
    onDetailUpdated: (task: Task) => void;
    show: boolean;
}

export const TaskDetail = ({ onDetailUpdated, show }: TaskDetailProps) => {

    const { selectedItem } = useSelectedItem();
    const [showSidebar, setShowSidebar] = useState(show)
    const [text, setText] = useState<string>("");
    function closeSidebar(): void {
        setShowSidebar(false);
    }
    const handleUpdate = () => {
        if (selectedItem) {
            onDetailUpdated({ ...selectedItem, text });
        }
    };

    useEffect(() => {
        if (selectedItem)
            setText(selectedItem?.text)
    }, [selectedItem])

    return (
        <>
            {showSidebar && (
                <div className="space-y-6 fixed top-0 right-0 w-1/3 max-w-md h-full bg-white shadow-2xl transition-transform duration-300 translate-x-0 p-6 border-l border-gray-200 z-50">

                    {/* Header with close icon */}
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-semibold text-gray-800">Edit Task</h2>
                        <img
                            src={closeIcon}
                            alt="Close"
                            onClick={closeSidebar}
                            className="w-5 h-5 cursor-pointer hover:opacity-60"
                        />
                    </div>

                    {/* Input field */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Task Name</label>
                        <input
                            type="text"
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 transition"
                            placeholder="Edit task title..."
                        />
                    </div>

                    {/* Save button */}
                    <div className="pt-2">
                        <button
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg shadow-md transition duration-200"
                            onClick={handleUpdate}
                        >
                            Save Changes
                        </button>
                    </div>
                </div>
            )}

        </>
    )
}