import { createSignal, For } from "solid-js";

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
        const data = await res.json();
        setTodos([data]);
    }
    
  return (
    <main>
      <h1>Todo</h1>
      <ul>
        <For each={todos()} fallback={<li>No todos</li>}>
          {(todo) => <li>{todo.title}</li>}
        </For>
      </ul>
      <button onClick={() => fetchTodo()}>Fetch ToDo</button>     
    </main>
  );
}