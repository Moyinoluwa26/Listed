import { React, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setLogin } from '../state/index';



const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const initialFormData = { username: "", password: "" };

    const [formData, setFormData] = useState(initialFormData);

    const handleChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); };

    const resetForm = () => {
        setFormData(initialFormData);
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            const data = await response.json();
            console.log(data);
            /* if (data.status === 'ok') {
                 dispatch(setLogin(data));
                 resetForm();
                 // Use navigate directly here
                 navigate('/home');
             } else {
                 throw new Error(`HTTP error! Status: ${response.status}`);
             }*/

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', JSON.stringify(data.user));
            dispatch(setLogin({ user: data.user, token: data.token }));
            resetForm();
            navigate('/home');
        } catch (err) {
            console.log(err.message);
        }


    }




    return (< div className='flex bg-gray-700 rounded-xl mt-36'>
        <form className='flex flex-col md:w-full mt-2 mx-auto' onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={formData.username} className='p-2 border-2 my-2 md:mx-2 rounded-lg' onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} className='p-2  md:mx-2 border-2 my-2 rounded-lg ' onChange={handleChange} />
            <button className='bg-yellow-500 text-white rounded-lg my-5 p-2 md:mx-2' type='submit'>Login</button>
        </form>

    </div>);
}

export default Login;