//Sara Nechama Isenberg
//5/4/2025

export function ToDoItem(props) {
    return(
        <li key={props.key} className="task-item">
            {props.name}
            <button className="remove-button" onClick={props.remove}>Remove</button>
        </li>
    )
}