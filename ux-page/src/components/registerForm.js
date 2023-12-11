import React, { useState } from 'react';


const RegisterForm = () => {


    const initialFormData = {
        firstName: "",
        lastName: "",
        age: "",
        email: "",
        username: "",
        password: ""
    };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        /* const FormData = {
             firstName: e.target.firstName.value,
             lastName: e.target.lastName.value,
             age: e.target.age.value,
             email: e.target.email.value,
             username: e.target.username.value,
             password: e.target.password.value
         }*/
        try {

            const response = await fetch('http://localhost:4000/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            resetForm()
            console.log(data);

        } catch (err) {
            console.log(err.message)
        }
    }

    const resetForm = () => {
        setFormData(initialFormData);
    };


    return (<div>
        <form className='flex flex-col mt-2' onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="FirstName" value={formData.firstName} onChange={handleChange} className='p-2 mx-2 border-2 my-2 ' />
            <input type="text" name="lastName" placeholder="LastName" value={formData.lastName} onChange={handleChange} className='p-2 mx-2 border-2 my-2 ' />
            <input type="number" name="age" placeholder="Your Age" value={formData.age} onChange={handleChange} className='p-2 mx-2 border-2 my-2 ' />
            <input type="text" name="email" placeholder="email" value={formData.email} onChange={handleChange} className='p-2 mx-2 border-2 my-2 ' />
            <input type="text" name="username" value={formData.username} placeholder="Choose a suitable Username for yourself" onChange={handleChange} className='p-2 mx-2 border-2 my-2 ' />
            <input type="text" name="password" value={formData.password} placeholder="Choose a suitable password for yourself" onChange={handleChange} className='p-2 mx-2 border-2 my-2 ' />
            <button className='bg-blue-600 text-white p-2 rounded-lg my-2 mx-2 ' type='submit ' onClick={resetForm}>Register</button>

        </form>
    </div>);
}

export default RegisterForm;