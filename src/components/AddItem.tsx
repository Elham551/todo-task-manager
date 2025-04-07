import { useState } from "react"

type AddItemProperties = {
    onAdd: (title: string) => void
}
export const AddItem = (items: AddItemProperties) => {

    const [text, setText] = useState("")

    const handleClick = () => {
        items.onAdd(text)
        setText("")
    }
    return (<>
        <div className="mt-4 flex items-center gap-2">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Add new todo..."
                className="flex-1 border-2 border-gray-200 p-2 rounded focus:outline-none focus:border-indigo-500"
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