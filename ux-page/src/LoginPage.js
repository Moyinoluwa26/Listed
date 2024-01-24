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
        <div className='h-screen w-screen bg-gray-200 flex flex-col mx-auto'>

            <div className='md:w-2/5 bg-blue-500 md:mx-auto ' >
                {pageType === "Login" && <Login />}
                {pageType === "Register" && <Register />}
                <button onClick={HaveAccount} className='my-10 ml-2 text-white hover:underline'> {pageType === "Register" ? "Have an account? Login" : "Don't have an account? Register"}</button>
            </div>

        </div>
    );
}

export default LoginPage;