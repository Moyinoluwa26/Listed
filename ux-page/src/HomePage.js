import React from 'react';
import { useSelector } from 'react-redux';

const Home = () => {
    const user = useSelector(state => state.token);
    return (<div>
        <h1>Home</h1>
        <p>Welcome to the home page.</p>
        <p>{user}</p>
    </div>);
}

export default Home;