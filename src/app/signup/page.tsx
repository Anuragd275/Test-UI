import { useState } from 'react'
import { supabase } from '../utils/supabaseClient'  // Update path to your Supabase client

const Signup = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: ""
    })

    console.log(formData);

    function handleChange(event) {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault();
        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
                options: {
                    data: {
                        name: formData.name
                    }
                }
            })

            if (error) {
                throw error;
            }
            alert("Check email for verification link")
        } catch (error) {
            alert(error.message)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="Name"
                    name='name'
                    onChange={handleChange}
                    value={formData.name}
                    required
                />
                <input
                    placeholder="Email"
                    name='email'
                    type='email'
                    onChange={handleChange}
                    value={formData.email}
                    required
                />
                <input
                    placeholder="Password"
                    name='password'
                    type='password'
                    onChange={handleChange}
                    value={formData.password}
                    required
                />
                <button type='submit'>Submit</button>
                <p>Already have an account? <a href='/signin'>Login</a></p>
            </form>
        </div>
    )
}

export default Signup
