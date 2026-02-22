import { createSignal } from "solid-js";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Todo() {
    
  const [todos, setTodos] = createSignal<Todo;
  
  async function fetchTodo() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await res.json();
        setTodo(data);
    }
    
  return (
    <main>
      <h1>Todo</h1>
      <p>{todo()?.title || "No todo selected"}</p>
      <button onClick={() => fetchTodo()}>Fetch ToDo</button>     
    </main>
  );
}