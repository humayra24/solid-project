import { createSignal } from "solid-js";

type FormData = {
    name: string;
    email: string;
    password: string;
    gender: string;
    agree: boolean;
}

const genders = ["Male", "Female", "Other"];

export default function Form(){
    const [formData, setFormData] = createSignal<FormData>({
        name: "",
        email: "",
        password: "",
        gender: "",
        agree: false
    });
    
    function updateField(key: keyof FormData, value: any) {
        // setFormData(prev => ({
        //     ...prev,
        //     [key]: value
        // }));
        setFormData(function(prev){
            console.log("Previous state:", prev);
            return {
                ...prev,
                [key]: value
            };
        })
        console.log(formData());
    }
    
    return(
        <main>
            <input type="text" placeholder="Enter Your Name" value={formData().name} onInput={(e)=>updateField("name",e.currentTarget.value)} />
            <input type="email" placeholder="Enter Your Email" value={formData().email} onInput={(e)=>updateField("email", e.currentTarget.value)}/>
            <input type="password" placeholder="Enter Your Password" value={formData().password} onInput={(e)=>updateField("password",e.currentTarget.value)} />
            {
                genders.map(gender => (
                    <div>
                        <input 
                            type="radio" 
                            name="gender" 
                            value={gender} 
                            checked={formData().gender === gender}
                            onChange={() => updateField("gender", gender)}
                        />
                        <label>{gender}</label>
                    </div>
                ))
            }
            <input type="chec" checked />
            
        </main>
    )
}