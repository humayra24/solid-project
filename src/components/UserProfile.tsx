import {createResource, createSignal, Match, Show, Switch, useContext} from "solid-js";
import {UserContext} from "../app";

type User = {
    id: number;
    name: string;
    email: string;
}

export default function UserProfile() {
   async function fetchUser(): Promise<User> {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId()}`);
        if(!res.ok) {
            throw new Error("Failed to fetch user data");
        }
        return res.json();
    } 
    
    const [userId, setUserId] = createSignal(1);
    
    const [userData, { mutate, refetch }] = createResource(userId, fetchUser);
    
    const user = useContext(UserContext) as { name: string; email: string };
    
    return (
        <main>
            <h4>User Profile</h4>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
 
{/* 
 Between show & match, we can use either of them. 
 
 Show is more suitable for simple conditions, while match is better for multiple conditions. 
 In this case, we have three states: loading, error, and data, so using match is more appropriate. 
 On the other hand, using && would require us to check for each state separately, which can be less efficient and harder to read. 
 Therefore, using match allows us to handle all three states in a more concise and organized way.     
 
*/}
        
            <h4>Fetched User Data</h4>
            <Switch>
                <Match when={userData.error}>
                <p>Error: {userData.error!.message}</p>
                </Match>

                <Match when={userData.loading}>
                <p>Loading...</p>
                </Match>

                <Match when={userData()}>
                {(data) => (
                    <>
                    <p>ID: {data().id}</p>
                    <p>Name: {data().name}</p>
                    <p>Email: {data().email}</p>
                    </>
                )}
                </Match>
            </Switch>
            
            <button style={{ margin: "0 10px" }} onClick={() => setUserId(id => id - 1)} disabled={userId() === 1}>
                Previous User
            </button>
            <button style={{ margin: "0 10px" }} onClick={() => setUserId(id => id + 1)}>
                Next User
            </button>
            <button style={{ margin: "0 10px" }} onClick={refetch}>
                Refetch User
            </button>
            <button
                onClick={() => {
                    mutate(prev =>
                    prev ? { ...prev, email: "updating@example.com" } : prev
                    );
                }}
                >
                Optimistic Email Update
            </button>
            
        </main>
    );
}