import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage'
import Home from './HomePage';

//import { Switch, Route } from 'react-router-dom';


//import { useSelector } from 'react-redux';

function App() {

  return (
    <div className="App">


      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/logout" element={<Navigate to="/login" />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;