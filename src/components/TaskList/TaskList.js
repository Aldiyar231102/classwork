import TaskItem from "./../TaskItem/TaskItem";

export default function TaskList({ tasks, setTasks, deleteTask }) {
  return (
    <>
      {tasks.map((task) => {
        return (
          <TaskItem
            key={task.id}
            task={task}
            tasks={tasks}
            setTasks={setTasks}
            deleteTask={deleteTask}
          />
        );
      })}
    </>
  );
}