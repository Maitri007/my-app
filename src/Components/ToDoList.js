import React, { useEffect, useState } from "react";

const ToDoList = () => {
  const defaultLog = [
    {
      old: 0,
      new: 1,
    },
  ];

  const [counter, setCounter] = useState(1);
  const [logs, setLogs] = useState(defaultLog);

  const incrementCounter = () => {
    let newObj = {
      old: counter,
      new: counter + 1
    }
    setLogs((preLogs) => [ ...preLogs, newObj ])
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("Mount");
    return () => {
        console.log("Unmount");
    }
  }, []);

  return (
    <div>
      <center>This is my TodoList</center>
      <button onClick={incrementCounter}>Click me</button>
      <h3>counter is : {counter}</h3>
      <ul>
        {logs.map((log, index) => (
          <li key={index}>
            {index + 1}. old: {log.old} new: {log.new}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
