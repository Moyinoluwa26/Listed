import React from 'react';

const registerForm = () => {
    return (<div>
        <form className='flex flex-col mt-2' >
            <input type="text" name="firstname" placeholder="FirstName" className='p-2 mx-2 border-2 my-2 ' />
            <input type="text" name="lastname" placeholder="LastName" className='p-2 mx-2 border-2 my-2 ' />
            <input type="number" name="age" placeholder="Your Age" className='p-2 mx-2 border-2 my-2 ' />
            <input type="text" name="email" placeholder="email" className='p-2 mx-2 border-2 my-2 ' />
            <input type="text" name="username" placeholder="Choose a suitable Username for yourself" className='p-2 mx-2 border-2 my-2 ' />
            <input type="text" name="password" placeholder="Choose a suitable password for yourself" className='p-2 mx-2 border-2 my-2 ' />
            <button className='bg-blue-600 text-white p-2 rounded-lg my-2 mx-2 ' type='submit'>Register</button>
        </form>
    </div>);
}

export default registerForm;