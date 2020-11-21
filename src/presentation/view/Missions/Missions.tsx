import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// Components
// import { Mission } from './components/Mision';
// import { Add } from './components/Add';

// Interfaces
import { HomeMissionsProps } from '../../ViewInterfaces';

const Home: React.FC<HomeMissionsProps> = (MissionProps) => {

  React.useEffect(() => {
    MissionProps.viewModel.attachView(this);

    return () => {
      MissionProps.viewModel.detachView();
    };
  }, []);

  const onViewModelChanged = (): void => {
    console.log("VIEW CHANGED");
  };

  return(
    <div>
      <div>You're at home.</div>
      <div>NAME: { MissionProps.viewModel.name }</div>
      <div>AGE: { MissionProps.viewModel.age }</div>
    </div>
  );
};

export default Home;