//Sara Nechama Isenberg
//5/4/2025
import { useState } from "react"
import { ToDoItem } from "./ToDoItem"

export function ToDoApp() {
    const [taskList, setTaskList] = useState([]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => {
        setNewTask(event.target.value);
    }

    const handleTaskAdd = (event) => {
        event.preventDefault();
        if (newTask != null && newTask.trim !== '') {
            setTaskList([...taskList, newTask]);
        } else {
            alert("Fill out input field before adding task");
        }
        setNewTask('');
    }

    const removeTask = (indexToRemove) => {
        setTaskList(taskList => taskList.filter((_, index) => index !== indexToRemove));
    }
    
    return (
        <div className="container">
            <header className="header">
                <h1>My To Do List</h1>
            </header>
            <form className="form">
                <label htmlFor="newTask">New Task:</label>
                <input 
                    className="input-field"
                    value={newTask}
                    id="newTask"
                    type="text"
                    onChange={handleChange}
                />
                <button className="add-button" onClick={handleTaskAdd}>Add</button>
            </form>
            <ul className="task-list">
                { taskList.length === 0 ?
                    (<li>No tasks on your list</li>) :    
                    (taskList.map((task, index) => (
                        <ToDoItem key={index} name={task} remove={() => removeTask(index)}/>
                    )))
                }
            </ul>
        </div>
    );
}