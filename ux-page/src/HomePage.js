import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLogout } from './state';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { setLogin } from './state';
const Home = () => {

    const dispatch = useDispatch();
    const Navigate = useNavigate();


    useEffect(() => {

        const token = localStorage.getItem('token');
        const user = localStorage.getItem('user');
        if (token && user) {
            dispatch(setLogin({ user: JSON.parse(user), token }));
        } else {
            Navigate('/login');
        }

    }, [dispatch, Navigate])


    const Cuser = useSelector(state => state.auth.user);

    const Logout = () => {
        dispatch(setLogout());
        Navigate('/');
    }



    return (<div>
        <h1>Home</h1>
        <p>Welcome to the home page.</p>
        <p>{Cuser.firstName}</p>
        <button onClick={Logout}>Logout</button>
    </div>);
}

export default Home;