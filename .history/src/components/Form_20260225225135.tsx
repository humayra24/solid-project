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
    
    function updateField(key: keyof FormData, value: any) {
        setFormData(prev => ({
            ...prev,
            [key]: value
        }));
        console.log(formData());
    }
    
    return(
        <main>
            <input type="text" placeholder="Enter Your Name" value={formData().name} onInput={(e)=>updateField("name",e.currentTarget.value)} />
            <input type="email" placeholder="Enter Your Email" value={formData().email} onInput={(e)=>updateField()}/>
            
        </main>
    )
}