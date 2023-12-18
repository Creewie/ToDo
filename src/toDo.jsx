import { useEffect, useState } from "react";

function czas() {
    var teraz = new Date()
    var rok = teraz.getFullYear()
    var miesiac = teraz.getMonth()+1
    var dzien = teraz.getDate()
    var godzina = teraz.getHours()
    var minuta = teraz.getMinutes()
    var sekunda = teraz.getSeconds()
    const FormatTime = (sec) => sec < 10 ? `0${sec}` : sec;
    var chwila = (`${rok}.${miesiac}.${dzien} ${godzina}:${FormatTime(minuta)}:${FormatTime(sekunda)}`)
    return(chwila)
}

const tasks = [
    {id:1, text:"Przykładowe Zadanie 1", time:czas(), completed:false},
    {id:2, text:"Przykładowe Zadanie 2", time:czas(), completed:true},
    {id:3, text:"Przykładowe Zadanie 3", time:czas(), completed:false},
]

const ToDo = () =>{
    const [todos, setToDos] = useState(JSON.parse(localStorage.getItem('Zapisywanie')) || tasks);

    useEffect(()=>{
        localStorage.setItem('Zapisywanie',JSON.stringify(todos))
    },[todos])

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
            time:czas(),
            completed: false,
        }
        setToDos([...todos, newTask])
    }
    return(
        <div style={{border:'solid #ba181b 3px', borderRadius:'15px', padding:'175px', background:'#161a1d', fontFamily:'Outfit'}}>
            <h1 style={{fontSize:'40px'}}>Lista Zadań</h1>
            <ul>
                {
                    todos.map(task => (
                        <li style={{color:"#ba181b", fontSize:"23px", margin:"10px",listStyleType:"none"}} 
                        key={task.id}>
                            {task.text}
                            <a style={{fontSize:'12px', color:"white"}}> ({task.time})</a>
                            <button style={{fontSize:'15px',margin:"10px", background:"darkred"}} onClick={()=>removeTasksHandler(task.id)}>Usuń</button>
                        </li>
                    ))
                }
            </ul>
                <button style={{border:'solid darkred 2px'}} onClick={addNewTaskHandler}>Dodaj nowe</button>
        </div>  
    );
}

export default ToDo