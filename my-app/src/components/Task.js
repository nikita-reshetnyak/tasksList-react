import './Todo.css'
const Task = ({ task, index, completeTask,removeTask }) => {

    return (
        <div 
            className="task"
            style={{ textDecoration: task.completed ? " line-through" : "" }}>
            {task.title}

            <button style={{ background: "red" }} onClick={() => removeTask(index)}>x</button>

            <button data-testid="complete-task" onClick={() => completeTask(index)}>Complete</button>
        </div>
    )
};
export default Task;