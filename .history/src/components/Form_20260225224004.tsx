import { createSignal } from "solid-js";

type FormData = {
    name: string;
    email: string;
    password: string;
    gender: string;
    agree: boolean;
}

export default function Form(){
    const [formData, setFormData] = createSignal<FormData>({
        name: "",
        email: "",
        password: "",
        gender: "",
        agree: false
    });
    
    return(
        <main>
            <input type="text" placeholder="Enter Your Name" value={formData().name} onIn />
            <input type="text" />
        </main>
    )
}