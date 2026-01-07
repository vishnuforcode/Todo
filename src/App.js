import { Route, Routes } from "react-router-dom";
import Todo from "./components/Todo";
import Home from "./Pages/Home";
import AddTodo from "./Pages/AddTodo";

function App() {
  return (
  <>
  <Routes>
    
    <Route element={<Todo/>} path="/home/todos" />
    <Route element={<AddTodo/>} path="/home/addTodos" />
    <Route element={<Home/>} path="*" />

  </Routes>
  
  </>
  );
}

export default App;
