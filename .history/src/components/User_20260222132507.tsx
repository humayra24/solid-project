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
    const [loading, setLoading] = createSignal(false);
    const [userId, setUserId] = createSignal(1);
    
    async function fetchUser() {
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate delay
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId()}`);
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
                    <p>Phone: {user()?.phone}</p>
                    <p>Website: {user()?.website}</p>
                </div> : <p>No user data available</p>}
            <input 
                type="text"  name="userid" id="userid" 
                value={userId()}
                onInput={(e) => setUserId(Number(e.currentTarget.value))}
            />
            <button onClick={() => fetchUser()}>Fetch User</button>           
        </main>
    );
}