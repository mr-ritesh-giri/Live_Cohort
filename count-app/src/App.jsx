import { useState } from "react";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { title: "Gym", description: "From 6 to 8", completed: true },
    { title: "DSA", description: "From 9 to 11", completed: true },
  ]);

  return (
    <div>
      {todos.map(function (todo) {
        return <Todo title={todo.title} description={[todo.description]} />;
      })}
      {/* <Todo title={todos[0].title} description={[todos[0].description]} />
      <Todo title={todos[1].title} description={[todos[1].description]} />  */}
    </div>
  );

  // return <Todo title="Ritesh Giri" description="Ritesh 2" />;
}
function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.description}</h1>
    </div>
  );
}

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <CustomButton count={count} setCount={setCount}></CustomButton>
//     </div>
//   );
// }

// function CustomButton(props) {
//   function onClickHandler() {
//     props.setCount(props.count + 1);
//   }

//   return <button onClick={onClickHandler}>Counter {props.count}</button>;
// }

export default App;
