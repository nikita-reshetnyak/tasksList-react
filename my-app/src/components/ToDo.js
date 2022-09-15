import React, { useEffect, useState } from "react";
import './Todo.css';
import Task from './Task'
import CreateTask from "./CreateTask";
import FilterButton from "./FilterButton";
const FILTER_MAP = {
    All: () => true,
    Active: task => !task.completed,
    Completed: task => task.completed
};
const FILTER_NAMES = Object.keys(FILTER_MAP);


const Todo = () => {
    const [taskRemaining, setTaskRemaining] = useState(0)
    const [filter, setFilter] = useState("All");
    const [tasks, setTasks] = useState([
        {
            title: "Купить Хлеб",
            completed: true
        },
        {
            title: "Помыть машину",
            completed: false
        },
        {
            title: "Сходить в спортзал",
            completed: false
        },

    ]);
    useEffect(() => setTaskRemaining(tasks.filter(task => !task.completed).length))
    const addTask = (title) => {
        let newTask = [...tasks, { title, completed: false }]
        setTasks(newTask)
    };
    const completeTask = (index) => {
        let newTasks = [...tasks];
        newTasks[index].completed = true;
        setTasks(newTasks)

    };
    const removeTask = (index) => {
        let newTasks = [...tasks];
        newTasks.splice(index, 1);
        setTasks(newTasks);

    }



    return (
        <div className="todo-container">
            <div className="header">Pending tasks {taskRemaining}  </div>
            <div className="header__wrapper">
                {FILTER_NAMES.map(name => {
                    return <FilterButton
                        key={name}
                        name={name}
                        isPressed={name === filter}
                        setFilter={setFilter}
                    />
                })}


            </div>

            <div className="tasks">
                {tasks.filter(FILTER_MAP[filter]).map((item, index) => {
                    return <Task
                        key={index}
                        index={index}
                        task={item}
                        completeTask={completeTask}
                        removeTask={removeTask}
                    />
                })}
            </div>
            <div className="create-task">
                <CreateTask addTask={addTask} />
            </div>
        </div>
    )
};
export default Todo;