import React from "react";

const TaskCard = ({ task }) => {
  const onDragStart = (e) => {
    console.log("onDragStart");
    e.dataTransfer.setData("taskId", task.id);
  };
  return (
    <article
      className="task"
      draggable
      onDragStart={(e) => onDragStart(e)}
      /* onDragOver={(e) => e.preventDefault()} */
      style={{ backgroundColor: task.color }}>
      <h4>{task.title}</h4>
    </article>
  );
};

export default TaskCard;
