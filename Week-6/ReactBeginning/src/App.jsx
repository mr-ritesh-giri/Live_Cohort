import { useEffect, useState } from "react";
import "./App.css";

function App() {}

export default App;

// function App() {
//   return (
//     <div>
//       <HeaderWithButton />
//       <Header title={"Ritesh 1"} />
//       <Header title={"Ritesh 2"} />
//       <Header title={"Ritesh 3"} />
//       <Header title={"Ritesh 4"} />
//     </div>
//   );
// }

// function HeaderWithButton() {
//   const [title, setTitle] = useState("My name is Ritesh");

//   const onClickHandler = () => {
//     setTitle(`My name is ${Math.random()}`);
//   };

//   return (
//     <div>
//       <button onClick={onClickHandler}>Click me to change the title.</button>
//       <Header title={title} />
//     </div>
//   );
// }

// function Header({ title }) {
//   return <header>{title}</header>;
// }

// Different code portion

// function App2() {
//   const [title, setTitle] = useState("");

//   const onClickHandler = () => {
//     setTitle(Math.random());
//   };

//   return (
//     <div>
//       <button onClick={onClickHandler}>Click me to change the title.</button>
//       <Header title={title} />
//       <Header title={"Ritesh 1"} />
//       <Header title={"Ritesh 2"} />
//       <Header title={"Ritesh 3"} />
//       <Header title={"Ritesh 4"} />
//     </div>
//   );
// }

// const Header = memo(function Header({ title }) {
//   return (
//     <header>
//       <div>
//         My name is <span>{title}</span>
//       </div>
//     </header>
//   );
// });

// Another Code

// function App() {
//   const addTodo = () => {
//     setItems([
//       ...items,
//       { id: Date.now(), title: Math.random(), description: Math.random() },
//     ]);
//   };

//   const [items, setItems] = useState([
//     {
//       id: Date.now() + 1,
//       title: "First Title",
//       description: "This is the first description",
//     },
//     {
//       id: Date.now() + 2,
//       title: "Second Title",
//       description: "This is the second description",
//     },
//     {
//       id: Date.now() + 3,
//       title: "Third Title",
//       description: "This is the third description",
//     },
//   ]);

//   return (
//     <div>
//       <button onClick={addTodo}>Add a todo</button>

//       {items.map((item) => (
//         <TodoComponent
//           key={item.id}
//           title={item.title}
//           description={item.description}
//         />
//       ))}
//     </div>
//   );
// }
// const TodoComponent = React.memo(function ({ title, description }) {
//   return (
//     <>
//       <h1>{title}</h1>
//       <p>{description}</p>
//     </>
//   );
// });

// Anothere Code

// function App() {
//   return <CardWrapper innerComponent={<TextComponent />} />;
// }

// function TextComponent() {
//   return (
//     <div>
//       <h1>Ritesh Giri</h1>
//       <p>I am a Front End Developer.</p>
//     </div>
//   );
// }

// function CardWrapper({ innerComponent }) {
//   return (
//     <div
//       style={{
//         border: "2px solid black",
//         display: "inline-block",
//         padding: "10px 20px",
//       }}
//     >
//       {innerComponent}
//     </div>
//   );
// }

// Another Code

// function App4() {
  //   const [todos, setTodos] = useState([]);
  
  //   useEffect(() => {
  //     fetch("https://sum-server.100xdevs.com/todos").then(async (res) => {
  //       const json = await res.json();
  //       setTodos(json.todos);
  //     });
  //   }, []);
  
  //   return (
  //     <div>
  //       {todos.map((todo) => (
  //         <Todo title={todo.title} description={todo.description} />
  //       ))}
  //     </div>
  //   );
  // }
  
  // function Todo({ title, description }) {
  //   return (
  //     <div>
  //       <h2>{title}</h2>
  //       <h5>{description}</h5>
  //     </div>
  //   );
  // }