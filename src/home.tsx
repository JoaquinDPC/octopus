import React, { useState } from 'react';
import { Mission } from './components/mision';
import { Add } from './components/add';
import { IMision } from './interfaces';

const mock: IMision[] = [{
  id: 1,
  name: 'Make lentails'
}, {
  id: 2,
  name: 'Buscar el feature de dejar el texto abajo cuando escribe'
}, {
  id: 3,
  name: 'coock a cake'
}, {
  id: 4,
  name: 'play pls4'
}, {
  id: 5,
  name: 'bee happy :)'
}];

export const Home = () => {
  const [missions, setTask] = useState<IMision[]>(mock);

  const addMission = (mission: string): void => {
    const copyMissions = missions;
    copyMissions.unshift({ 
      id: Math.random(),
      name: mission
    });

    setTask([ ... copyMissions]);
  };

  const deleteMission = (id: number) => {
    const copyMissions = missions;
    const missionIndex = missions.findIndex((mission: IMision) => mission.id === id);
    copyMissions.splice(missionIndex, 1);

    setTask([ ... copyMissions]);
  };

  const editMission = (id: number, name: string) => {
    const copyMissions = missions;
    const missionIndex = missions.findIndex((mission: IMision) => mission.id === id);
    copyMissions[missionIndex].name = name;

    setTask([ ... copyMissions]);
  };
 
  return (
    <div className="flex flex-col">
      <Add addMission={addMission} />

      {
        missions.map((mission, index) => (
          <Mission 
            key={mission.id} 
            mission={mission} 
            deleteMission={deleteMission}
            editMission={editMission}
            />
        ))
      }
    
    </div>
  );
};