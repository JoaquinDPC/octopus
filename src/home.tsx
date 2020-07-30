import React, { useState } from 'react';
import { Mission } from './components/mision';
import { Add } from './components/add';
import { IMision } from './interfaces';

const mock: IMision[] = [{
  id: 1,
  checked: false,
  name: 'Make lentails'
}, {
  id: 2,
  checked: false,
  name: `Estaba la pájara pinta
    sentada en un verde limón.
    Con el pico cortaba la rama,
    con la rama cortaba la flor.
    Ay, ay, ay!
    Cuándo vendrá mi amor...
    Me arrodillo a los pies de mi amante,
    me levanto constante, constante.
    Dame la mano, dame la otra,`
}, {
  id: 3,
  checked: false,
  name: 'read a book'
}, {
  id: 4,
  checked: true,
  name: 'play ps4'
}, {
  id: 5,
  checked: true,
  name: 'do 2 backflips :)'
}, {
  id: 6,
  checked: false,
  name: 'FIX drag component. Your current implementation is shit! >:('
}];

export const Home = () => {
  const [missions, setTask] = useState<IMision[]>(mock);

  const addMission = (mission: string): void => {
    const copyMissions = missions;
    copyMissions.unshift({ 
      id: Math.random(),
      checked: false,
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

      <div className="bg-indigo-200 relative bot-0">
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
  
    </div>
  );
};