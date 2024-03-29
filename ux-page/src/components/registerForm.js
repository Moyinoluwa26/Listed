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

            console.log(data);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            resetForm()

        } catch (err) {
            console.log(err.message)
        }

    }

    const resetForm = () => {
        setFormData(initialFormData);
    };


    return (<div className='mt-36 rounded-xl bg-gray-700'>
        <form className='flex flex-col ' onSubmit={handleSubmit}>
            <input type="text" name="firstName" placeholder="FirstName" value={formData.firstName} onChange={handleChange} className='p-2 rounded-lg mx-2 border-2 mt-3 mb-1 ' />
            <input type="text" name="lastName" placeholder="LastName" value={formData.lastName} onChange={handleChange} className='p-2 rounded-lg mx-2 border-2 my-1 ' />
            <input type="number" name="age" placeholder="Your Age" value={formData.age} onChange={handleChange} className='p-2 rounded-lg  mx-2 border-2 my-1 ' />
            <input type="text" name="email" placeholder="email" value={formData.email} onChange={handleChange} className='p-2 rounded-lg mx-2 border-2 my-1 ' />
            <input type="text" name="username" value={formData.username} placeholder="Choose a suitable Username for yourself" onChange={handleChange} className='p-2 rounded-lg  mx-2 border-2 my-2 ' />
            <input type="text" name="password" value={formData.password} placeholder="Choose a suitable password for yourself" onChange={handleChange} className='p-2 rounded-lg mx-2 border-2 my-2 ' />
            <button className='bg-yellow-500 text-white p-2 rounded-lg my-2 mx-2 ' type='submit ' >Register</button>

        </form>
    </div>);
}

export default RegisterForm;