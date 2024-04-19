import React, { useState } from "react";
import "./App.css";
import InputField from "./components/InputField";
import { Todo } from "./model";
// let name: string = "asa";
// let isGood: boolean;
// let hobbies: string[];

// let role: [number, string];
// role = [4, "wow"];

// let age: number | string;

// function printName(name: string) {
//   console.log(name);
// }
// printName("aniel");

//let printName: Function;

//Objeto Person con sus atributos
// type Person = {
//   name: string;
//   age?: number; //este atributo es opcional ponerlo
// };

// let person1: Person = {
//   name: "Daniel",
//   age: 20,
// };
// type X = {
//   a:string;
//   b:number;
// }

// interface Persona extends X {
//   nombre: string;
//   edad: number;
// }
let a: number;

// Esta funcion es de tipo comoponente funcional React.FC
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  console.log(todos);

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;
