import React, { useState } from 'react';
import { Mission } from './components/mision';
import { Add } from './components/add';
import { IMision } from './interfaces';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";


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
  const [missions, setMission] = useState<IMision[]>(mock);

  const addMission = (mission: string): void => {
    const copyMissions = missions;
    copyMissions.unshift({ 
      id: Math.random(),
      checked: false,
      name: mission
    });

    setMission([ ... copyMissions]);
  };

  const deleteMission = (id: number) => {
    const copyMissions = missions;
    const missionIndex = missions.findIndex((mission: IMision) => mission.id === id);
    copyMissions.splice(missionIndex, 1);

    setMission([ ... copyMissions]);
  };

  const editMission = (id: number, name: string) => {
    const copyMissions = missions;
    const missionIndex = missions.findIndex((mission: IMision) => mission.id === id);
    copyMissions[missionIndex].name = name;

    setMission([ ... copyMissions]);
  };

  const reorder = (list, startIndex, endIndex): IMision[] => {
    // const result = Array.from(list);
    const [removed] = list.splice(startIndex, 1);
    list.splice(endIndex, 0, removed);
  
    return list;
  };

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    // console.log(result.source.index);
    // console.log(result.destination.index);

    const items = reorder(
      missions,
      result.source.index,
      result.destination.index
    );

    setMission(items);
  };

  const grid = 8;

  const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "" : "",
    padding: grid,
    width: 250
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: grid * 2,
    margin: `0 0 ${grid}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "" : "",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });
 
  return (
    <div className="flex flex-col">
      <Add addMission={addMission} />

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div  
            {...provided.droppableProps}
            ref={provided.innerRef} 
            className="relative bot-0">
          {
            missions.map((mission, index) => (


                  <Mission 
                    bla={index}
                    key={mission.id} 
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