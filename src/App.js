import React from 'react';
import logo from './gifbertyanim-Exit.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Tuto PWA
        </p>
        <a
          className="App-link"
          href="https://www.codica.com/blog/how-to-create-pwa-with-react/"
          target="_blank"
          rel="noopener noreferrer"
        >
          How to Make a React Progressive Web Application (PWA)
        </a>
      </header>
    </div>
  );
}

export default App;
