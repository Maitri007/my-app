import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ToDoList = () => {

  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");
  const [taskError, setTaskError] = useState("");

  const handleTaskChange = (value) => {
    if (value?.trim()) {
      setTaskError("");
    }
    setTask(value);
  };

  const handleAddTask = () => {
    if (!task?.trim()) {
      setTaskError("Enter valid task");
      return;
    }
    setTaskList((preData) => ([ ...preData, task ]));
    setTask("");
  };

  return (
    <Box>
      <Typography m={4} variant="h4">
        <center>This is my TodoList</center>
      </Typography>
      <Typography component="center">
        <Box width={"60vw"}>
          <Box
            p={2}
            gap={4}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <TextField value={task} onChange={(e) => handleTaskChange(e.target.value)} variant="outlined" placeholder="Enter your task" error={taskError} helperText={taskError} />
            <Button variant="outlined" color="primary" onClick={handleAddTask} disabled={!task?.trim()}>
              Add
            </Button>
          </Box>
          <Box p={2}>
            <Stack direction={"column"} rowGap={4}>
              {taskList.map((task, index) => (
                <Stack key={index} border={1} borderRadius={6} display="block">
                  <Typography fontSize={22} justifyContent={"start"}>{task}</Typography>
                </Stack>
              ))}
            </Stack>
          </Box>
        </Box>
      </Typography>
    </Box>
  );
};

export default ToDoList;
