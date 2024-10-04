import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [selectedId, setSelectedId] = useState(1);

  return (
    <div>
      <button onClick={() => setSelectedId(1)}>Select Todo 1</button>
      <button onClick={() => setSelectedId(2)}>Select Todo 2</button>
      <button onClick={() => setSelectedId(3)}>Select Todo 3</button>
      <button onClick={() => setSelectedId(4)}>Select Todo 4</button>
      <button onClick={() => setSelectedId(5)}>Select Todo 5</button>

      <Todo id={selectedId} />
    </div>
  );
}

function Todo({ id }) {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/todos/${id}`)
      .then((res) => {
        setTodos(res.data);
      })
      .catch((err) => {
        console.error("Error fetching todo:", err);
      });
  }, [id]);

  return (
    <div>
      <h1>{todos.todo}</h1>
      <h4>{todos.completed ? "Completed" : "Not Completed"}</h4>
    </div>
  );
}

export default App;

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     console.log(`Running ${count++}`);
//     axios
//       .get("https://dummyjson.com/todos")
//       .then((res) => {
//         setTodos(res.data.todos);
//       })
//       .catch((err) => {
//         console.error("Error fetching todos:", err);
//       });
//   }, []);

//   return (
//     <div>
//       {todos.map((todo) => (
//         <Todo key={todo.id} title={todo.todo} completed={todo.completed} />
//       ))}
//     </div>
//   );
// }

// function Todo({ title, completed }) {
//   return (
//     <div>
//       <h1>{title}</h1>
//       <p>{completed ? "Completed" : "Not Completed"}</p>
//     </div>
//   );
// }
