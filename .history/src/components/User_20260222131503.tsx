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
    const [loading, setLoading] = createSignal(false);
    
    async function fetchUser() {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 5000)); // Simulate delay
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const data = await res.json();
        setUser(data); 
        setLoading(false);    
    }
    
    return (
        <main>
            {loading() ? <p>Loading...</p> : user() ? 
                <div>
                    <h2>{user()?.name}</h2>
                    <p>Username: {user()?.username}</p>
                    <p>Email: {user()?.email}</p>
            <button onClick={() => fetchUser()}>Fetch User</button>           
        </main>
    );
}