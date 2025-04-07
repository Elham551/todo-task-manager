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
        <input type="text"
            value={text}
            onChange={(e) => setText(e.target.value)} />
        <button onClick={handleClick}>+</button>
    </>)
}