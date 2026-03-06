import {createResource, Show, useContext} from "solid-js";
import {UserContext} from "../app";

type User = {
    id: number;
    name: string;
    email: string;
}

export default function UserProfile() {
   async function fetchUser(): Promise<User> {
        const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if(!res.ok) {
            throw new Error("Failed to fetch user data");
        }
        return res.json();
    } 
    const [userData] = createResource(fetchUser);
    
    const user = useContext(UserContext) as { name: string; email: string };
    
    return (
        <main>
            <h4>User Profile</h4>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            
            <h4>Fetched User Data</h4>
            <Show when={!userData.loading} fallback={<p>Loading...</p>}>
                <p>Name: {userData()?.id}</p>
                <p>Name: {userData()?.name}</p>
                <p>Email: {userData()?.email}</p>
            </Show>
        </main>
    );
}