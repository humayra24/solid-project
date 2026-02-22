import { createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  return (
    <main>
      <button class="decrement" onClick={() => setCount(count() - 1)} type="button">
        Decrement
      </button>
      <button class="increment" onClick={() => setCount(count() + 1)} type="button">
        Clicks: {count()}
      </button>
    </main>
  );
}
