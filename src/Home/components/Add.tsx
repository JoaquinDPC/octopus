import React, { useState } from 'react';
import { keyboardEvent, inputEvent, IAddProps } from '../../interfaces/mainInterfaces';


export const Add: React.FC<IAddProps> = ({ addMission }) => {
  const [mission, setMission] = useState<string>('');

  const writeMission = (e: inputEvent): void => {
    const text: string = e.currentTarget.value;
    setMission(text);
  };

  const pressEnter = (e: keyboardEvent): void => {
    if(e.keyCode == 13) {
      saveMission();
    }
  };
  
  const saveMission = (): void => {
    if(mission) {
      addMission(mission);
      setMission('');
    }
  };

  return (
    <div className="mb-4">
      <input 
        className="rounded-l shadow-lg pl-3 bg-gray-200 hover:bg-white hover:border-gray-300 
        focus:outline-none w-7/12 h-12 focus:bg-white focus:shadow-outline focus:border-gray-300" 
        value={mission}
        placeholder="¿Cuál es la misión?"
        onChange={(e: inputEvent) => writeMission(e)}
        onKeyDown={(e: keyboardEvent) => pressEnter(e)}
        />
      <button 
        onClick={() => saveMission()}
        className="w-1/12 h-12 shadow-lg bg-indigo-800 hover:bg-indigo-300 rounded-r-lg text-white text-xl font-medium"
        >
        GO!
      </button>
    </div>
  );
};