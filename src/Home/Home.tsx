import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable } from "react-beautiful-dnd";

// Components
import { Mission } from './components/Mision';
import { Add } from './components/Add';

// Interfaces
import { IMision } from '../interfaces/mainInterfaces';

// Utils
import { mock } from './mockData';
import NetworkManager from '../data/NetworkManager';

export const Home: React.FC = () => {
  const [missions, setMissions] = useState<IMision[]>(mock);
  const [error, setError] = useState<string>('');

  // TODO: hacer un reducer que maneje todo el estado de la vista acutal
  // De esta manera todos los componentes de la vista tendrán acceso al estado general
  // Ayudando a pasar menos props
  // Estas vistas no deben tener funciones, solo invocaciones y pasar parámetros

  // Fines cientificos
  useEffect(() => {
    const getHealth = async () => {
      const missionsResponse = await NetworkManager.getMissions();
      
      if(!missionsResponse.success) {
        setError(missionsResponse.message);
      } else {
        setMissions(missionsResponse.data);
      }
    };
    
    getHealth();
  }, []);

  const addMission = (mission: string): void => {
    // const copyMissions = missions;
    // copyMissions.unshift({ 
    //   _id: `${Math.random()}`,
    //   checked: false,
    //   name: mission
    // });

    // setMissions([ ... copyMissions]);
  };

  const deleteMission = (id: number): void => {
    const copyMissions = missions;
    const missionIndex = missions.findIndex((mission: IMision) => mission._id === `${id}`);
    copyMissions.splice(missionIndex, 1);

    setMissions([ ... copyMissions]);
  };

  const editMission = (id: number, name: string): void => {
    const copyMissions = missions;
    const missionIndex = missions.findIndex((mission: IMision) => mission._id === `${id}`);
    copyMissions[missionIndex].missionName = name;

    setMissions([ ... copyMissions]);
  };

  const reorder = (list, startIndex, endIndex): IMision[] => {
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
  
    return list;
  };

  const onDragEnd = (result): void => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      missions,
      result.source.index,
      result.destination.index
    );

    setMissions(items);
  };
 
  return (
    <div className="flex flex-col">
      
      { error && 
        <div className="bg-red-500 w-8/12 self-center mb-4 rounded-full shadow-lg">
          <h1 className="text-white font-bold text-xl">Error</h1>
          <p className="text-xl text-white">{ error }</p>
        </div>
      }

      <Add addMission={addMission} />

      <DragDropContext onDragEnd={onDragEnd}>
        {
          !missions.length && <h1 className="text-xl text-gray-600">¡Comienza a agregar misiones!</h1>
        }

        <Droppable droppableId="droppable">
        {provided => (
          <div {...provided.droppableProps} ref={provided.innerRef} className="relative bot-0">
          {
            missions.map((mission, index: number) => (
              <Mission 
                key={mission._id} 
                index={index}
                mission={mission} 
                deleteMission={deleteMission}
                editMission={editMission}
                />
            ))
          }
          </div>
        )}
        </Droppable>
      </DragDropContext>
  
    </div>
  );
};