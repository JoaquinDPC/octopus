import React from 'react';
import './App.css';
import { Home } from './Home/Home';
import { Navbar } from './components/Navbar';

import AuthComponent from './presentation/view/auth/AuthComponent';
import AuthViewModelImpl from './presentation/viewModel/AuthViewModelImpl';
import AuthFakeApi from './data/auth/AuthFakeApi';
import LoginUseCase from './domain/interactors/auth/LoginUseCase';
import AuthHolder from './domain/entity/AuthHolder';


function App() {
  // data layer
  const authRepository = new AuthFakeApi();
  // domain layer
  const authHolder = new AuthHolder();
  const loginUseCase = new LoginUseCase(authRepository, authHolder);
  // view layer
  const authViewModel = new AuthViewModelImpl(loginUseCase, authHolder);


  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col mt-6">
        {/* <Home /> */}
        <AuthComponent authViewModel={authViewModel} />
      </div>
    </div>
  );
}

export default App;
