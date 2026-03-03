import {useContext} from "solid-js";
import {UserContext} from "../app";

export default function UserProfile() {
    const user = useContext(UserContext) as { name: string; email: string };
    return (
        <main>
            <h4>User Profile</h4>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
        </main>
    );
}