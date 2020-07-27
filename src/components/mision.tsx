import React, { useState, useRef, useEffect, useCallback } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import { AiFillEdit, AiOutlineDelete } from "react-icons/ai";
import { GrDrag } from "react-icons/gr";
import { keyboardEvent, inputEvent, IMision } from '../interfaces';

interface IMisionProps {
  mission: IMision
  deleteMission: (id: number) => void
  editMission: (id: number, name: string) => void
}

export const Mission: React.FC<IMisionProps> = ({ mission, deleteMission, editMission }) => {
  const [checked, setChecked] = useState(false);
  const [editing, setEditing] = useState(false);
  const [newName, setNewName] = useState('');
  const ref = useRef<HTMLInputElement>(document.createElement("input"));

  const changeTask = (e: inputEvent) => {
    setNewName(e.target.value);
  };

  const saveTask = () => {
    console.log("I SAVED THE NEW MISSION");
    
    // editMission(mission.id, newName);
    setEditing(false);
  };

  const editTask = async () => {
    setEditing(true);
  };

  const handleBlur = (e) => {
    console.log("AAA", e.key)
    if(!e.currentTarget.contains(e.relatedTarget) && !newName) {
      setEditing(false);
    }
  };

  const pressEnter = (e: keyboardEvent) => {
    console.log("AWWWWWW")

    if(e.key === 'Enter') {
      saveTask();
    }

    if(e.keyCode === 27) {
      console.log("llego");
      // setEditing(false);
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
      ref.current.focus();
    }
  }, [editing]);

  const deleteTask = () => {
    deleteMission(mission.id);
  };

  return (
    <div className="flex justify-center mb-4">
      <div className="flex w-8/12 justify-between h-12 align items-center shadow-md rounded-lg bg-gray-300 p-2">

        <div className="flex w-full"> 
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
              <div className="flex w-full items-center border-b border-b-2 border-indigo-800 ml-3 mr-16">
                <input 
                  className="appearance-none bg-transparent border-none w-full text-lg text-gray-500 leading-tight focus:outline-none" 
                  ref={ref}
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
              <span onClick={() => editTask()} className={`ml-3 text-lg text-gray-700 ${checked && 'line-through'}`}>{ mission.name }</span>
            )
          }
        </div>

        {/* EDITING TASK */}
        {
          editing ? (
            <div className="flex">
              <button className="bg-gray-100 p-1 rounded-lg mr-3" onClick={(e) => saveTask()}>
                <FaCheck size="1.3em" className="relative cursor-pointer" />
              </button>
              <button className="rounded-lg mr-3" onClick={() => setEditing(false)}>
                <FaTimes size="1.4em" className="mr-1 relative cursor-pointer" />
              </button>
              <GrDrag size="1.7em" className="origin-left relative opacity-50" />
            </div>
          )
          : (
            <div className="flex">
              <AiFillEdit size="1.8em" className="mr-3 relative cursor-pointer" onClick={() => editTask()} />
              <AiOutlineDelete size="1.7em" className="mr-3 relative cursor-pointer" onClick={() => deleteTask()} />
              <GrDrag size="1.7em" className="origin-left relative cursor-pointer" />
            </div>
          )
        }
      </div>
    </div>
  ); 
};