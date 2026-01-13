import React from "react";
import TodoList

// ✅ This line is required to import the TodoList component
import { TodoList } from "./components/TodoList";


function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo List App</h1>
      <TodoList />
    </div>
  );
}

export default App;
