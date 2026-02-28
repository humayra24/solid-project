import { createSignal } from "solid-js";

type FormData = {
    name: string;
    email: string;
    password: string;
    gender: string;
    agree: boolean;
}

export default function Form()  >{}
    const [formData, setFormData] = createSignal<FormData>
    return(
        <main>
            
        </main>
    )
}