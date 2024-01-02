import { React, useState } from 'react';
import { useDispatch } from 'react-redux';



const Login = () => {
    const Dispatch = useDispatch();

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
            /*if (data.status === 'ok') {
                localStorage.setItem('token', data.token);
                localStorage.setItem('username', data.username);
                history.push('/');
            }*/

            if (data.status === 'ok') {
                Dispatch({ type: 'setLogin', payload: { user: data.user, token: data.token } });
            }
            resetForm();
        } catch (err) {
            console.log(err.message);
        }


    }


    return (<div>
        <form className='flex flex-col mt-2' onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={formData.username} className='p-2 mx-2 border-2 my-2 ' onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} className='p-2 mx-2 border-2 my-2 ' onChange={handleChange} />
            <button className='bg-blue-600 text-white p-2 rounded-lg my-2 mx-2 ' type='submit'>Login</button>
        </form>
    </div>);
}

export default Login;