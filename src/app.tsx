import { MetaProvider, Title } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { createContext, createSignal, Suspense } from "solid-js";
import "./app.css";

export const UserContext = createContext();
    
export default function App() {
  const [user, setUser] = createSignal({
    name: "John Doe",
    email: "john.doe@example.com"
  });
  
  return (
    <Router
      root={props => (
        <MetaProvider>
        <UserContext.Provider value={user()}>
          <Title>SolidStart - Basic</Title>
          <a href="/">Index</a>
          <a href="/about">About</a>
          <a href="/todo">Todo</a>
          <a href="/user">User</a>
          <a href="/settings">Settings</a>
          <a href="/form">Form</a>
          <a href="/playground">Playground</a>
          <Suspense>{props.children}</Suspense>
          </UserContext.Provider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
