import { React } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLogout } from './state';
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const user = useSelector(state => state.auth.user.firstName);
    const dispatch = useDispatch();
    const Navigate = useNavigate();
    const Logout = () => {
        dispatch(setLogout());
        Navigate('/')
    }
    return (<div>
        <h1>Home</h1>
        <p>Welcome to the home page.</p>
        <p>{user}</p>
        <button onClick={Logout}>Logout</button>
    </div>);
}

export default Home;