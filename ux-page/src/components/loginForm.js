import React from 'react';
import { useDispatch } from 'react-redux';

const Login = () => {
    const Dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;

        try {
            const response = await fetch('http://localhost:4000/api/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, password })
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
        } catch (err) {
            console.log(err.message);
        }
    }


    return (<div>




        <form className='flex flex-col mt-2' onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" className='p-2 mx-2 border-2 my-2 ' />
            <input type="password" name="password" placeholder="Password" className='p-2 mx-2 border-2 my-2 ' />
            <button className='bg-blue-600 text-white p-2 rounded-lg my-2 mx-2 ' type='submit'>Login</button>
        </form>
    </div>);
}

export default Login;