import { React, useState } from 'react';
import Login from './components/loginForm';
import Register from './components/registerForm';




const LoginPage = () => {


    const [pageType, setpageType] = useState("Register");
    const HaveAccount = () => {
        if (pageType === "Register") {
            setpageType("Login");
        } else {
            setpageType("Register");
        }
    }
    return (
        <div className='h-screen w-screen bg-blaaaa flex flex-col mx-auto'>
            <div className='flex w-full  '><h1 className='my-3 text-3xl text-white mx-auto'>Lis<span className='text-yellow-500'>tio</span></h1></div>
            <div className='md:w-1/5 mx-auto w-64' >
                {pageType === "Login" && <Login />}
                {pageType === "Register" && <Register />}
                <button onClick={HaveAccount} className='my-10 ml-2 text-white hover:underline'> {pageType === "Register" ? "Have an account? Login" : "Don't have an account? Register"}</button>
            </div>

        </div>
    );
}

export default LoginPage;