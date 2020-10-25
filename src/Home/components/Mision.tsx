import React, { useState, useRef, useEffect } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { GrDrag } from "react-icons/gr";
import { Draggable } from "react-beautiful-dnd";

// Interfaces
import { keyboardEvent, inputEvent, IMision } from '../../interfaces/mainInterfaces';

// components
import { Checkbox } from '../../components/Checkbox';

export interface IMisionProps {
  index: number
  mission: IMision
  deleteMission: (id: number) => void
  editMission: (id: number, name: string) => void
};

export const Mission: React.FC<IMisionProps> = ({ mission, deleteMission, index, editMission }) => {
  const [checked, setChecked] = useState(mission.checked);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const inputRef = useRef<HTMLInputElement>(document.createElement("input"));
  const documentDivRef = useRef<HTMLDivElement>(document.createElement("div"));

  const changeTask = (e: inputEvent): void => {
    setNewName(e.target.value);
  };

  const saveTask = (): void => {
    // editMission(mission._id, newName);
    setEditing(false);
  };

  const editTask = async (): Promise<void> => {
    if(!checked) {
      setEditing(true);
    }
  };

  const handleBlur = (e): void => {
    if(!e.currentTarget.contains(e.relatedTarget) && !newName) {
      setEditing(false);
    }
  };

  const pressEnter = (e: keyboardEvent): void => {
    if(e.key === 'Enter') {
      saveTask();
    }
  }; 

  useEffect((): void => {
    document.onkeydown = (evt) => {
      const myEvent = evt || window.event;
      if(evt.key === 'Escape') {
        setEditing(false);
      }
    };

    if(editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const deleteTask = (): void => {
    // deleteMission(mission.id);
  };

  const getItemClassname = (isDragging, draggableStyle) => {
    // TODO: Fix shadows
    // Hint: transition duration-300
    return isDragging 
      ? "flex w-8/12 justify-between align items-center shadow-2xl rounded-lg bg-gray-300 p-2" 
      : "flex w-8/12 justify-between align items-center shadow-md rounded-lg bg-gray-300 p-2";
  };

  const draggableId = mission._id;

  return (
    <Draggable draggableId={draggableId} index={index}>
      {(provided, snapshot) => (
          <div className="flex justify-center mb-1 p-1" ref={provided.innerRef} {...provided.draggableProps}>
            <div className={getItemClassname(
              snapshot.isDragging,
              provided.draggableProps.style
            )}>

              <div className="flex items-center w-full"> 
                <Checkbox checked={checked} updateCheck={setChecked} />

                {/* THE MISSION */}
                {
                  editing ? (
                    <div className="flex w-full h-full items-center border-b-2 border-indigo-800 ml-3 mr-16">
                      <input 
                        className="appearance-none tems-center bg-transparent mr-5 
                        border-none w-full h-full pt-1 text-lg leading-tight focus:outline-none" 
                        ref={inputRef}
                        type="text" 
                        onKeyDown={(e: keyboardEvent) => pressEnter(e)}
                        onBlur={(e) => handleBlur(e)}
                        onChange={(e: inputEvent) => changeTask(e)}
                        placeholder={mission.missionName}
                      />
                    </div>
                  )
                  : (
                    <span onClick={() => editTask()} className={`ml-3 mr-5 text-lg text-left text-gray-700 ${checked && 'line-through'}`}>{ mission.missionName }</span>
                  )
                }
              </div>

              {/* EDITING MISSION */}
              {
                editing ? (
                  <div className="flex">
                    <FaCheck size="1.4em" className="bg-gray-100 mr-3 relative cursor-pointer hover:bg-indigo-300 rounded-md" onClick={(e) => saveTask()} />
                    <FaTimes size="1.4em" className="mr-3 relative cursor-pointer hover:bg-indigo-300 rounded-md" onClick={() => setEditing(false)} />
                    <div { ... provided.dragHandleProps}> 
                      <GrDrag size="1.5em" className="origin-left relative cursor-pointer" />
                    </div>
                  </div>
                )
                : (
                  <div className="flex">
                    {
                      !checked && <AiFillEdit size="1.5em" className="mr-3 relative cursor-pointer hover:bg-indigo-300 rounded-lg" onClick={() => editTask()} />
                    }
                    <AiOutlineDelete size="1.5em" className="mr-3 relative cursor-pointer hover:bg-indigo-300 rounded-lg" onClick={() => deleteTask()} />
                    <div { ... provided.dragHandleProps}> 
                      <GrDrag size="1.5em" className="origin-left relative cursor-pointer" />
                    </div>
                  </div>
                )
              }
            </div>
            
            {/* ACORDEON */}
            {/* <div 
              ref={documentDivRef}
              className="duration-700 ease-in-out flex flex-col bg-white transition-height h-0
              rounded-lg rounded-t-none relative overflow-hidden focus:overflow-scroll"
              style={{bottom: '1px'}}>

              <h1>BLUCKACK</h1>

            </div> */}

          </div>
        )}
    </Draggable>
  ); 



};