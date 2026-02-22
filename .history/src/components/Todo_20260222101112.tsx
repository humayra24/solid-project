import { createSignal } from "solid-js";
import { For } from "solid-js/web";

type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Todo() {
    
  const [todos, setTodos] = createSignal<Todo[]>([]);
  const [loading, setLoading] = createSignal(false);
  
  async function fetchTodo() {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate delay
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        // console.log(res);
        const data = await res.json();
        setTodos(data);
        setLoading(false);
    }
    
  return (
    <main>
      <h1>Todo</h1>
      {loading() ? <p>Loading...</p> : todos().length === 0 ? 
        <p>No todos available</p> :
        <For each={todos()}>
            {(todo) => <li>{todo.title}</li>}       
        </For>
      }
      <button onClick={() => fetchTodo()}>Fetch ToDo</button>     
    </main>
  );
}