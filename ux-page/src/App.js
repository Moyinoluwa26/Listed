import React from 'react';
import { BrowserRouter, Navigate, Routes, Route } from 'react-router-dom';
import LoginPage from './LoginPage'
import Home from './HomePage'

//import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<div>About</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;