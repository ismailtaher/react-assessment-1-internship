import React, { useCallback } from "react";
import TaskCard from "./TaskCard";
import api from "../api/tasks";

const TaskContainer = ({ task_status, tasks, setTasks }) => {
  const onDrop = useCallback(
    async (e) => {
      console.log("onDrop");
      e.preventDefault();
      const taskId = e.dataTransfer.getData("taskId");
      console.log("Task ID from Drag Event:", taskId);

      if (!taskId) {
        console.error("No taskId");
        return;
      }

      // Finding the task to update
      const taskToUpdate = tasks.find((task) => task.id === taskId);

      if (!taskToUpdate) {
        console.error(`Task with ID ${taskId} not found in tasks state.`);
        return;
      }

      // update the task with new container's task_status
      const updatedTask = { ...taskToUpdate, task_status };
      console.log("Updated Task:", updatedTask);

      // Updated State
      const updatedTasks = tasks.map((task) =>
        task.id === taskId ? updatedTask : task
      );
      setTasks(updatedTasks);

      try {
        const response = await api.put(`/tasks/${taskId}`, updatedTask);
        console.log("Response:", response.data);
        console.log(`Task ${taskId} updated`);
      } catch (err) {
        console.error("Error updating task:", err);
      }
    },
    [tasks, task_status, setTasks]
  );

  return (
    <section
      className="task-container"
      onDrop={onDrop}
      onDragOver={(e) => e.preventDefault()}>
      <h2>{task_status}</h2>
      {tasks
        .filter((task) => task.task_status === task_status)
        .map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
    </section>
  );
};

export default TaskContainer;
