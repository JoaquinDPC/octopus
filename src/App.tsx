import React from 'react';
import './App.css';
import { Home } from './Home/Home';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col mt-6">
        <Home />
      </div>
    </div>
  );
}

export default App;
