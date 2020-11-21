import React from 'react';

// Components
// import { Home } from './Home/Home';
import { Navbar } from './components/Navbar';
import AuthComponent from './presentation/view/auth/AuthComponent';
import Missions from './presentation/view/Missions/Missions';

// Use cases
import LoginUseCase from './domain/interactors/LoginUseCase';

// Entities
import AuthHolder from './domain/entity/AuthHolder';

// View Models
import AuthViewModelImpl from './presentation/viewModel/AuthViewModelImpl';
import MissionsVM from './presentation/viewModel/MissionsVM';

// Interfaces
import NetworkManager from './data/NetworkManager';


function App() {
  // data layer
  const networkRepository = new NetworkManager();
  // domain layer
  const authHolder = new AuthHolder();
  const loginUseCase = new LoginUseCase(networkRepository, authHolder);
  // view layer
  const authViewModel = new AuthViewModelImpl(loginUseCase, authHolder);

  const missionsVM = new MissionsVM(null, null); 

  return (
    <div className="App">
      <Navbar />
      <div className="flex flex-col mt-6">
        <Missions viewModel={missionsVM} />
        {/* <AuthComponent authViewModel={authViewModel} /> */}
      </div>
    </div>
  );
}

export default App;
