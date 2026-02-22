import { createSignal, Suspense } from "solid-js";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export default function User() {
    
    const [user, setUser] = createSignal<User | null>(null);
    const
    
    async function fetchUser() {
        await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate delay
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setUser(data);     
    }
    
    return (
        <main>
            <button onClick={() => fetchUser()}>Fetch User</button>
            
        </main>
    );
}