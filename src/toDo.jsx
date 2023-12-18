import { useState } from "react";

const tasks = [
    {id:1, text:"Przykładowe Zadanie 1", completed:false},
    {id:2, text:"Przykładowe Zadanie 2", completed:true},
    {id:3, text:"Przykładowe Zadanie 3", completed:false},
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
    
        function name(params) {
            
        }
        var teraz = new Date()
        var rok = teraz.getFullYear()
        var miesiac = teraz.getMonth()+1
        var dzien = teraz.getDate()
        var godzina = teraz.getHours()
        var minuta = teraz.getMinutes()
        var sekunda = teraz.getSeconds()
        var chwila = (`${rok}.${miesiac}.${dzien} ${godzina}:${minuta}:${sekunda}`)

    return(
        
        <>
            <h1 style={{fontSize:'35px'}}>Lista Zadań</h1>
            <p>{chwila}</p>
            <ul>
                {
                    todos.map(task => (
                        <li style={{color:"#023047", fontSize:"20px", margin:"10px"}} 
                        key={task.id}>
                            {task.text}
                            <button style={{fontSize:'15px',margin:"10px", background:"darkred"}} onClick={()=>removeTasksHandler(task.id)}>Usuń</button>
                        </li>
                    ))
                }
            </ul>
                <button onClick={addNewTaskHandler}>Dodaj nowe</button>
        </>  
    );
}

export default ToDo