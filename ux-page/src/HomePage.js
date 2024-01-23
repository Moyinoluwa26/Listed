import { React } from 'react';
import { useDispatch } from 'react-redux';
import { setLogout } from './state';
import { useNavigate } from 'react-router-dom';
//import { useEffect } from 'react';

const Home = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();


    const user = JSON.parse(localStorage.getItem('user'));

    const Logout = () => {
        dispatch(setLogout());
        Navigate('/');
    }



    return (<div>
        <h1>Home</h1>
        <p>Welcome to the home page.</p>
        <p>{user.firstName}</p>
        <button onClick={Logout}>Logout</button>
    </div>);
}

export default Home;