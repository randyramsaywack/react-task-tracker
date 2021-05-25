import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Go to Work",
      day: "May 25th @ 1:00PM",
      reminder: true,
    },
    {
      id: 2,
      text: "Rub puppy belly",
      day: "May 25th @ 3:30PM",
      reminder: true,
    },
    {
      id: 3,
      text: "Watch Knicks",
      day: "May 25th @ 7:30PM",
      reminder: true,
    },
  ]);

  // Delete Task
  const deleteTask = (id) => {
    console.log("delete", id);
  };

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
