import React, { useState } from "react";

import "./App.css";
import { Header } from "./MyComponents/Header";
import { Todos, AddTodo } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {

  
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "Go to the market1",
    },
    {
      sno: 2,
      title: "Go to the market2",
    },
    {
      sno: 3,
      title: "Go to the market3",
    },
  ]);

  const onDelete = (todo) => {
    console.log("Deleting of todo", todo.title);
    setTodos(
      todos.filter((element) => {
        return element !== todo;
      })
    );
  };

  // const edit = (todo) =>{
  //   // let change = document.getElementById(todo.sno).value;
  //   let m = 0;
  //   for (let i = 0; i < todos.length; i++) {
  //     const element = todos[i];
  //     if(element === todo){
  //       m = i;
  //       break;
  //     }      
  //   }
  //   console.log(m);
  //   // setTodos();
  //   // alert('Edit')
  // }

  const addTodo = (title) =>{
     console.log("i am adding this todo", title);
     let sno =0;
     if(todos.length === 0){
      sno = 1;
     }
     else{
      sno = todos[todos.length-1].sno + 1;
     }
      const myTodo = {
      sno: sno,
      title: title,
     }
     console.log(myTodo);
     setTodos([...todos, myTodo])
  }


  return (
    <>
      <Header title="MyToDosList" searchBar={false} />
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete} /*edit={edit}*//>
      <p><br/><br/><br/></p>
      <Footer />
    </>
  );
}

export default App;

// import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
// className  App extends Component {
//   render() {
//     return (
//       <div className Name="App">
//         <header className Name="App-header">
//           <img src={logo} className Name="App-logo" alt="logo" />
//           <h1 className Name="App-title">Welcome to React</h1>
//         </header>
//         <p className Name="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }
// export default App;
