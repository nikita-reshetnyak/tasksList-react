import React from "react"
const CreateTask = ({addTask}) => {
    const [value, setValue] = React.useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(value);
        setValue("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={value}
                placeholder="Add new task"
                onChange={(e) => setValue(e.target.value)}
            />
        </form>
    )
}
export default CreateTask;