import { useState } from "react"

type AddItemProperties = {
    onAdd: (title: string) => void
}
export const AddItem = (items: AddItemProperties) => {

    const [text, setText] = useState("")
    const [error, setError] = useState(false);

    const handleEnterClick = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") { handleClick() }
    }

    const handleClick = () => {
        if (text.trim()) {
            items.onAdd(text);
            setText("");
            setError(false);
        } else {
            setError(true);
        }
    }
    return (<>
        <div className="mt-4 flex items-center gap-2">
            <input
                type="text"
                value={text}
                onChange={(e) => {
                    setText(e.target.value);
                    setError(false);
                }}
                placeholder="Add new todo..."
                onKeyDown={handleEnterClick}
                className={`flex-1 border-2 p-2 rounded focus:outline-none ${error ? "border-red-500" : "border-gray-200 focus:border-indigo-500"
                    }`}
            />
            <button
                onClick={handleClick}
                className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600"
            >
                +
            </button>
        </div>
    </>)
}