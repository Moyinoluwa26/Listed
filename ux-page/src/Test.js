import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';
import LoginForm from './LoginForm';
import HomePage from './HomePage';

const Test = () => {
    const isAuthenticated = !!localStorage.getItem('token');

    return (
        <Router>
            <Switch>
                <Route
                    path="/login"
                    render={(props) => (
                        isAuthenticated ? <Redirect to="/" /> : <LoginForm {...props} />
                    )}
                />
                <Route
                    path="/"
                    render={(props) => (
                        isAuthenticated ? <HomePage {...props} /> : <Redirect to="/login" />
                    )}
                />
            </Switch>
        </Router>
    );
};

export default Test;
