import { createSignal } from "solid-js";


type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default function Todo() {
    
  const [todo, setTodo] = createSignal<Todo | null>(null);
  return (
    <main>
      <h1>Todo</h1>
      <p>{todo()?.title || "No todo selected"}</p>
      
    </main>
  );
}