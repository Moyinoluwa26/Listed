import React from 'react';
import { useSelector } from 'react-redux';

function App() {
  return (
    <div className="App">
      <h1>
        {useSelector(state => state.auth.user)}
      </h1>
    </div>
  );
}

export default App;
