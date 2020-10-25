import React, { useState } from 'react';
import { keyboardEvent, inputEvent } from '../interfaces/mainInterfaces';

// inprogress
export const EditTaskInput: React.FC<any> = ({ inputRef, saveTask, missionName }) => {
  const [newMission, setNewMission] = useState('');

  const changeTask = (e: inputEvent): void => {
    setNewMission(e.target.value);
  };

  const pressEnter = (e: keyboardEvent): void => {
    if(e.key === 'Enter') {
      saveTask();
    }
  }; 

  const handleBlur = (e): void => {
    if(!e.currentTarget.contains(e.relatedTarget) && !newMission) {
      // setNewMission(false);
    }
  };

  return (
    <div className="flex w-full items-center border-b-2 border-indigo-800 ml-3 mr-16">
      <input 
        className="appearance-none tems-center bg-transparent mr-5 
        border-none w-full text-lg text-gray-500 leading-tight focus:outline-none" 
        ref={inputRef}
        type="text" 
        onKeyDown={(e: keyboardEvent) => pressEnter(e)}
        onBlur={(e) => handleBlur(e)}
        onChange={(e: inputEvent) => changeTask(e)}
        placeholder={missionName}
      />
    </div>
  );
};