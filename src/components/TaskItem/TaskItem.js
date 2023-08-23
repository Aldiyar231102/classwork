import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import "./TaskItem.css";
import { useState } from "react";

export default function TaskItem({ task, tasks, setTasks, deleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newValue, setNewValue] = useState(task.value);

  const editTask = () => {
    setIsEditing(true);
    setNewValue(task.value);
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((t) =>
      t.id === task.id ? { ...t, value: newValue } : t
    );
    setTasks(updatedTasks);
    setIsEditing(false);
  };

  const onDelete = () => {
    deleteTask(task.id);
  };

  if (isEditing) {
    return (
      <div>
        <input
          type="text"
          value={newValue}
          onChange={(e) => setNewValue(e.target.value)}
        />
        <button onClick={updateTask}>Save</button>
      </div>
    );
  }

  return (
    <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
      <div className="task-value">
        {task.value}
        <div>
          <AiOutlineEdit onClick={editTask} />
          <BsTrash onClick={onDelete} />
        </div>
      </div>
    </div>
  );
}
