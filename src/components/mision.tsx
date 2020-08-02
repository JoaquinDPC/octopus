import React, { useState, useRef, useEffect, createRef } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { GrDrag } from "react-icons/gr";
import { keyboardEvent, inputEvent, IMision } from '../interfaces';
import { Draggable } from "react-beautiful-dnd";

interface IMisionProps {
  bla: number
  mission: IMision
  deleteMission: (id: number) => void
  editMission: (id: number, name: string) => void
}

export const Mission: React.FC<IMisionProps> = ({ mission, deleteMission, bla, editMission }) => {
  const [checked, setChecked] = useState(mission.checked);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const inputRef = useRef<HTMLInputElement>(document.createElement("input"));

  console.log();

  const changeTask = (e: inputEvent) => {
    setNewName(e.target.value);
  };

  const saveTask = () => {
    editMission(mission.id, newName);
    setEditing(false);
  };

  const editTask = async () => {
    if(!checked) {
      setEditing(true);
    }
  };

  const handleBlur = (e) => {
    if(!e.currentTarget.contains(e.relatedTarget) && !newName) {
      setEditing(false);
    }
  };

  const pressEnter = (e: keyboardEvent) => {
    if(e.key === 'Enter') {
      saveTask();
    }
  }; 

  useEffect(() => {
    document.onkeydown = (evt) => {
      evt = evt || window.event;
      if(evt.key === 'Escape') {
        setEditing(false);
      }
    };

    if(editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const deleteTask = () => {
    deleteMission(mission.id);
  };

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    userSelect: "none",
    padding: 8 * 2,
    margin: `0 0 ${8}px 0`,
  
    // change background colour if dragging
    background: isDragging ? "" : "",
  
    // styles we need to apply on draggables
    ...draggableStyle
  });

  const getItemClassname = (isDragging, draggableStyle) => {
    return isDragging ? "flex w-8/12 justify-between align items-center transition duration-300 ease-in-out shadow-2xl rounded-lg bg-gray-300 p-2" : "flex w-8/12 justify-between align items-center  transition duration-300 ease-in-outshadow-md rounded-lg bg-gray-300 p-2";
  };

  return (
    <Draggable key={mission.id} draggableId={`${mission.id}`} index={bla}>
    {(provided, snapshot) => (
      <div
        ref={provided.innerRef}
        {...provided.draggableProps}
        style={getItemStyle(
          snapshot.isDragging,
          provided.draggableProps.style
        )}
      >
    <div className="flex justify-center mb-4">
      <div className={getItemClassname(
          snapshot.isDragging,
          provided.draggableProps.style
        )}>

        <div className="flex items-center w-full no-drag"> 
          <button 
            onClick={() => setChecked(!checked)}
            className={`flex p-1 rounded text-white relativecursor-pointer
              ${checked ? 'bg-indigo-800' : 'bg-indigo-200'}
            `}>
            <FaCheck />
          </button>              

          {/* THE TASK */}
          {
            editing ? (
              <div className="flex w-full items-center border-b-2 border-indigo-800 ml-3 mr-16">
                <input 
                  className="appearance-none tems-center bg-transparent border-none w-full text-lg text-gray-500 leading-tight focus:outline-none" 
                  ref={inputRef}
                  type="text" 
                  onKeyDown={(e: keyboardEvent) => pressEnter(e)}
                  onBlur={(e) => handleBlur(e)}
                  onChange={(e: inputEvent) => changeTask(e)}
                  placeholder={mission.name}
                  aria-label="Full name" 
                />
              </div>
            )
            : (
              <span onClick={() => editTask()} className={`ml-3 mr-5 text-lg text-left text-gray-700 ${checked && 'line-through'}`}>{ mission.name }</span>
            )
          }
        </div>

        {/* EDITING TASK */}
        {
          editing ? (
            <div className="flex no-drag">
              <button className="bg-gray-100 p-1 rounded-lg mr-3" onClick={(e) => saveTask()}>
                <FaCheck size="1.2em" className="relative cursor-pointer" />
              </button>
              <button className="rounded-lg mr-3" onClick={() => setEditing(false)}>
                <FaTimes size="1.3em" className="mr-1 relative cursor-pointer" />
              </button>
              <GrDrag size="1.5em" className="origin-left relative cursor-not-allowed opacity-50" />
            </div>
          )
          : (
            <div className="flex">
              {
                !checked && <AiFillEdit size="1.5em" className="mr-3 relative cursor-pointer no-drag" onClick={() => editTask()} />
              }
              <AiOutlineDelete size="1.5em" className="mr-3 relative cursor-pointer no-drag" onClick={() => deleteTask()} />
              <div { ... provided.dragHandleProps}> 
                <GrDrag size="1.5em" className="origin-left relative cursor-pointer" />
              </div>
            </div>
          )
        }
      </div>
    </div>
    </div>
              )}
            </Draggable>
  ); 
};