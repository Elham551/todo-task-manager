export const TodoItem = ({ item }: any) => {
    return (<>
        <span>{item.text}</span>
        <input type="checkbox" checked={item.done} />
    </>)
};