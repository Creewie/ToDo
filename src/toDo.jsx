import { useState } from "react";

const tasks = [
    {id:1, text:"Zadanie 1", completed:false},
    {id:2, text:"Zadanie 2", completed:true},
    {id:3, text:"Zadanie 3", completed:false},
]

const ToDo = () =>{
    const [todos, setToDos] = useState(tasks);

    const removeTasksHandler = (taskId)=>{
        setToDos(
            todos.filter(task =>{
                return task.id !== taskId;
            })
        )
    }
    const addNewTaskHandler = ()=>{
        var nazwa = prompt("Podaj nazwę zadania")
        const newTask={
            id: Math.random().toString(36).substring(7),
            text: nazwa,
            completed: false,
        }
        setToDos([...todos, newTask])
    }
    var teraz = new Date().getTime()
    return(
        
        <>
            <h1 style={{fontSize:'35px'}}>Lista Zadań {teraz}</h1>
            <ul>
                {
                    todos.map(task => (
                        <li style={{color:"#023047", fontSize:"14px", margin:"10px"}} 
                        key={task.id}>
                            {task.text}
                            <button style={{margin:"10px", background:"darkred"}} onClick={()=>removeTasksHandler(task.id)}>Usun zadanie {task.id}</button>
                        </li>
                    ))
                }
            </ul>
                <button  onClick={addNewTaskHandler}>Dodaj nowe</button>
        </>  
    );
}

export default ToDo