import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth';
//main hoon don
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Auth />
      </header>
    </div>
  );
}

export default App;
