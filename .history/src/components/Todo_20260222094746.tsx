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
  
  async function fetchTodo() {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        console.log(res);
        const data = await res.json();
        setTodos(data);
    }
    
  return (
    <main>
      <h1>Todo</h1>
      <For each={todos()}>
        {(todo) => <li>{todo.title}</li>}       
      </For>
      <button onClick={() => fetchTodo()}>Fetch ToDo</button>     
    </main>
  );
}