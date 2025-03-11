import React from "react";
import TaskContainer from "./TaskContainer";

const TaskBoard = ({ tasks, setTasks }) => {
  return (
    <main>
      <TaskContainer task_status={"To Do"} tasks={tasks} setTasks={setTasks} />
      <TaskContainer
        task_status={"In Progress"}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TaskContainer
        task_status={"In Review"}
        tasks={tasks}
        setTasks={setTasks}
      />
      <TaskContainer task_status={"Done"} tasks={tasks} setTasks={setTasks} />
    </main>
  );
};

export default TaskBoard;
