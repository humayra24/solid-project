import { createSignal } from "solid-js";
import "./Form.css";

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
    }
    
    function processData(e: Event) {
        e.preventDefault();
        console.log("Form Data:", formData());
        // Here you can add logic to send the data to a server or perform other actions
    }
    
    return(
        <div class="form-wrapper">
            <form class="form" onSubmit={(e) => processData(e)}>
                <div class="form__field">
                    <input 
                        type="text" 
                        class="form__input"
                        placeholder="Enter Your Name" 
                        value={formData().name} 
                        onInput={(e) => updateField("name", e.currentTarget.value)} 
                    />
                </div>
                
                <div class="form__field">
                    <input 
                        type="email" 
                        class="form__input"
                        placeholder="Enter Your Email" 
                        value={formData().email} 
                        onInput={(e) => updateField("email", e.currentTarget.value)}
                    />
                </div>
                
                <div class="form__field">
                    <input 
                        type="password" 
                        class="form__input"
                        placeholder="Enter Your Password" 
                        value={formData().password} 
                        onInput={(e) => updateField("password", e.currentTarget.value)} 
                    />
                </div>

                <fieldset class="form__fieldset">
                    <div class="form__radio-group">
                        {
                            genders.map(gender => (
                                <label class="form__radio-label">
                                    <input 
                                        type="radio" 
                                        class="form__radio"
                                        name="gender" 
                                        value={gender} 
                                        checked={formData().gender === gender}
                                        onChange={() => updateField("gender", gender)}
                                    />
                                    <span class="form__radio-text">{gender}</span>
                                </label>
                            ))
                        }
                    </div>
                </fieldset>

                <div class="form__field form__field--checkbox">
                    <label class="form__checkbox-label">
                        <input 
                            type="checkbox" 
                            class="form__checkbox"
                            checked={formData().agree} 
                            onChange={(e) => updateField("agree", e.currentTarget.checked)} 
                        />
                        <span class="form__checkbox-text">I agree to the terms and conditions</span>
                    </label>
                </div>
                
                <button type="submit" class="form__submit">Submit</button>
                
                <div class="form__preview">
                    <div class="form__preview-title">Form Data Preview</div>
                    <pre class="form__preview-code">{JSON.stringify(formData(), null, 2)}</pre>
                </div>
            </form>
        </div>
    )
}