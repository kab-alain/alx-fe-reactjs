// Import React
import React from "react";

// ✅ Import TodoList component
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">My Todo List</h1>
      <TodoList />
    </div>
  );
}

export default App;
