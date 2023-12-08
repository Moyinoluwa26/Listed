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
            <div>Login yeah</div>
            <div>{pageType === "Login" && <Login />}
                {pageType === "Register" && <Register />}
                <button onClick={HaveAccount}> {pageType === "Register" ? "Have an account? Login" : "Don't have an account? Register"}</button>
            </div>
        </div>
    );
}

export default LoginPage;