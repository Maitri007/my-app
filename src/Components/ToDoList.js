import React, { useState } from 'react'

const ToDoList = () => {
    const [counter, setCounter] = useState(1);
    const incrementCounter = () => {
        setLogs([{old:counter, new:counter+1}]);
        setCounter(counter + 1);
    }
    const defaultLog = [
        {
            old: 1,
            new: 2,
        },
        {
            old: 2,
            new: 3,
        }
    ]
    const [logs, setLogs] = useState([]);
    return (
        <div>
            <center>This is my TodoList</center>
            <button onClick={incrementCounter}>Click me</button>
            <h3>counter is : {counter}</h3>
            <ul>
                {
                    logs.map((log, index) => {
                        return <li>{index + 1}. old: {log.old} new: {log.new}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default ToDoList
