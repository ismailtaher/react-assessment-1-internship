import { useEffect, useState } from "react";
import api from "./api/tasks";
import TaskBoard from "./components/TaskBoard";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await api.get("/tasks");
        setTasks(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };

    fetchTasks();
  }, []);

  return (
    <div className="App">
      <h1>React Assessment 1</h1>
      <TaskBoard tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App;
