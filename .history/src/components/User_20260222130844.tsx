import { createSignal } from "solid-js";

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
    
    async function fetchUser() {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json()
        
    }
    
    
    return (
        <main>
            <button onClick={() => fetchUser()}>Fetch User</button>
        </main>
    );
}