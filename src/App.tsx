import React from 'react';
import './App.css';
import { Home } from './home';
import { NavBar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="flex flex-col mt-6">
        <Home />
      </div>
    </div>
  );
}

export default App;
