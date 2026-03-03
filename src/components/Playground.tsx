import { createSignal, createMemo, createEffect } from "solid-js";

export default function Playground() {
    const [firstName, setFirstName] = createSignal("");
    const [lastName, setLastName] = createSignal("");
    
    const fullName = createMemo(() => `${firstName()} ${lastName()}`);
    
    // inefficient way to compute full name without using createMemo
    const fullName2 = () => {
        `${firstName()} ${lastName()}`;
    }
    
    createEffect(( ) => {
        console.log("First Name:", firstName());
        console.log("Last Name:", lastName());
    })
    
    
    return (
        <main>
            <input type="text" name="firstName" value={firstName()} onInput={(e) => setFirstName(e.target.value)} placeholder="Enter first name" /> <br />
            <input type="text" name="lastName" value={lastName()} onInput={(e) => setLastName(e.target.value)} placeholder="Enter last name" />
            <p>Full Name: {fullName()}</p>
        </main>
    );
}