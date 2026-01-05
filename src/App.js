import { Route, Routes } from "react-router-dom";
import Todo from "./Pages/Todo";
import Home from "./Pages/Home";
import AddTodo from "./Pages/AddTodo";
import UpdateTodo from "./Pages/UpdateTodo";

function App() {
  return (
  <>
  <Routes>
    <Route element={<Todo/>} path="/home/todos" />
    <Route element={<AddTodo/>} path="/home/addTodos" />
    <Route element={<UpdateTodo/>} path="/updateTodo" />
    <Route element={<Home/>} path="*" />
  </Routes>
  
  </>
  );
}

export default App;
