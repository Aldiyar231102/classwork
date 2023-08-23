import "./App.css";
import { useState } from "react";
import Input from "./components/Input/Input"
import Button from "./components/Button/Button";
import TaskList from "./components/TaskList/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([
    { id: 1, value: "Мое первое задание" },
    { id: 2, value: "Купить хлеб" },
  ]);

  const [inputValue, setInputValue] = useState("");

  const onChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTask = () => {
    if (inputValue.trim() !== "") {
      const newTask = { id: Date.now(), value: inputValue };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="form-container">
        <h1>Get Things Done!</h1>
        <Input
          placeholder="What is the task today?"
          value={inputValue}
          onChange={onChange}
        />
        <Button value="Add task" onClick={addTask} />
        <TaskList tasks={tasks} setTasks={setTasks} deleteTask={deleteTask} />
      </div>
    </div>
  );
}
